<template>
    <div>
        <transition appear>
            <div class="fabu" v-show="fbdh">
                    <input :class="{inputZindex:show_nc}" maxlength="5" class="input-name" type="text" v-model="shuju.title" placeholder="标题">
                    <br/>
                    <label for="imgInput">选择图片</label>
                    <input @change="yl" id="imgInput" ref="imgsc" hidden type="file" name="file" accept="image/png,image/gif,image/jpeg">
                    <div class="d1">
                        <img ref="imgyl" src="">
                    </div>
                    <textarea v-model="shuju.text" maxlength="50" :placeholder="tishi ? '输入内容':'不可为空'"/>
                    <br/>
                    <h2><span @click="fb">发布</span></h2>
            </div>
        </transition>
        <img class="jz" v-show="jz" src="../assets/加载.png">
    </div>
</template>

<script>

import tishi from './tishi'

export default {
    components:{
        tishi
    },
    data(){
        return{
            shuju:{
                name:'',
                title:'',
                text:'',
                date:''
            },
            name:'',
            //昵称框隐藏
            show_nc:false,
            //提示标语
            tishi:true,
            // 发布动画
            fbdh:true,
            //提示内容
            tsnr:'',
            //重复发布
            chong_fu_fa_bu:0,
            // 加载动画
            jz:false,
        }
    },
    mounted(){
        // 全局指向监听接受
        this.$bus.$on('jdcj',()=>{
            this.show_nc=!this.show_nc
        })
    },
    methods:{
        //预览图片
        yl(){
            //创建预览图片地址
            let file=this.$refs.imgsc.files[0]
            let url=window.webkitURL.createObjectURL(file)
            this.$refs.imgyl.src=url
        },
        //发布
        async fb(e) {
            //避免重复发送
            this.chong_fu_fa_bu=this.chong_fu_fa_bu+1
            if(this.chong_fu_fa_bu!=1)return
            
            if(!this.$refs.imgsc.files[0]){
                // 发送图片不可为空全局指令
                this.$bus.$emit('imgk')
                return
            }
            // 处理提交数据
            this.shuju.name=Math.ceil(Math.random()*10000)+'';
            if(!this.shuju.title)this.shuju.title='A Picture'
            if(!this.shuju.text)this.shuju.text='- - - - - - - - - - - - '
            const time = new Date();
            this.shuju.date=(''+time.getFullYear()).substring(2,4)+'/'+(time.getMonth()+1)+'/'+time.getDate()+' '+time.getHours()+':'+time.getMinutes()
            
            this.jz=!this.jz
            //提交数据
            try{
                let sjtj=await this.$axios.post('/sjtj',this.shuju)
                // console.log(sjtj.data.ok)
                if(sjtj.data.ok){
                    // 上传照片
                    let file=this.$refs.imgsc.files[0]
                    let formDataObj=new FormData()
                    //创建formDataObj对象，将文件追加到formData对象里
                    formDataObj.append('imgfile',file)
                    formDataObj.append('shuju','111')
                    let imgsc= await this.$axios.post('/img', formDataObj)
                    // console.log(imgsc.data.ok)
                    if(imgsc.data.ok){
                        // 发布动画
                        this.fbdh=false
                        setTimeout(()=>{
                            this.$router.push({path:'/'})
                        },500)
                        
                        this.jz=!this.jz

                        this.chong_fu_fa_bu=0
                        return
                    }
                }
            }catch{
                this.jz=!this.jz
                // 发送全局指令
                this.$bus.$emit('fbsb')
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .fabu{
        width: 100vw;
        padding-top: 70px;
        .input-name{
            // z-index: -1;
            border-radius: none;
            border: none;
            border-bottom: 2px solid rgb(0,0,0);
            outline: none;
            // transform: scale(1.6);
            display:block;
            // position: absolute;
            // left: 22vw;
            width: 60vw;
            height: 10vw;
            margin-left: 10vw;
            font-size: 20px;
        }
        label{
            margin: 10vw;
            font-size: 20px;
            font-weight: 500;
            color: dimgrey;
        }
        .inputZindex{
            z-index: -1;
        }
        .d1{
            margin:6vw 0 8vw 10vw;
            width: 80vw;
            height: 50vw;
            overflow: hidden;
            display: flex;
            align-items: center;
            border: none;
            img{
                width: 80vw;
            }
        }
        textarea{
            outline: none;
            border: 1px solid rgb(0,0,0);
            margin-left: 10vw;
            min-width: 80vw;
            max-width: 80px;
            min-height: 20vw;
            font-size: 20px;
        }
        h2{
            padding:5vw 0 0 70vw ;
        }
    }
    //加载动画
    .jz{
        width: 13vw;
        position: fixed;
        top: 30vw;
        left: 47vw;
        animation: myfirst 3.2s linear infinite;
    }
    @keyframes myfirst
    {
        0%   {transform:rotate(0deg);}
        100% {transform:rotate(360deg);}
    }


    //动画入场
    .v-enter{
        opacity: 0;
    }
    .v-enter-to{
        opacity: 1;
    }
    .v-enter-active{
        transition: all 1.2s ease;
    }
    //出场
    .v-leave{
        transform: none;
    }
    .v-leave-to{
        transform: scale(0.5);
        opacity: 0;
    }
    .v-leave-active{
        transition: all 0.5s ease;
    }
    
    .tsk-enter,.tsk-leave-to{
        opacity: 0;
    }
    .tsk-enter-active,.tsk-leave-active{
        transition: all 1s;
    }
</style>