<template>
<div>
    <div class="dingbu">
        <!-- 音乐 autoplay-->
        <!-- <audio ref="audio" autoplay @ended="qh"  :src="mp3"></audio> -->
        <!-- 名称 -->
        <div class="d2">
            A plcture
        </div>
        <!-- 播放切换图标 -->
        <div class="d1">
            <!-- 播放暂停img -->
            <!-- <img :class="{donghuazantin:!sfbf}" class="xuanzhuan img-zt" @click="bfzt" src="../assets/音乐.png"> -->
            <!-- 切换img -->
            <!-- <img class="img-qh" @click="qh" src="../assets/切换.png"> -->
            <!-- 菜单img -->
            <img @click="showCd" class="img-cd" src="../assets/菜单.png">
        </div>
        <!-- 菜单栏 -->
        <transition>
            <caidan @guanbi='guanbi' v-show="show_cd"/>
        </transition>
        
    </div>
    <!-- 提示框 -->
    <transition>
        <tishi :tsnr="tsnr" v-show="show_ts"/>
    </transition>
</div>
</template>

<script>
import caidan from './caidan'
import tishi from './tishi'

export default {
    components:{
        caidan,
        tishi
    },
    data(){
        return{
            //音乐列表
            mp3:'',
            //播放音乐动画
            sfbf:false,
            // 菜单框显示
            show_cd:false,
            //提示框显示
            show_ts:false,
            //提示内容
            tsnr:''
        }
    },
    created(){
        // 进入立即播放音乐
        // setTimeout(()=>{
        //     this.qh()
        // },0)

        //接受发布失败的全局指令
        this.$bus.$on('fbsb',()=>{
            this.ts('发布失败')
        })
        
        //接受图片不可为空的全局指令
        this.$bus.$on('imgk',()=>{
            this.ts('请上传图片')
        })

        //接受登录失败全局指令
        this.$bus.$on('denglushibai',()=>{
            this.ts('和密用户名码不匹配')
        })

        //接受删除失败全局指令
        this.$bus.$on('shanchushibai',()=>{
            this.ts('删除失败')
        })

        //接受无权限全局指令
        this.$bus.$on('wuquanxian',()=>{
            this.ts('无权限')
        })

        this.$bus.$on('dengluchenggong',()=>{
            this.ts('登录成功')
        })

        this.$bus.$on('zwwc',()=>{
            this.ts('暂未完成')
        })
    },
    
    methods:{
        //提示
        ts(text){
            this.tsnr=text
            this.show_ts=true
            setTimeout(()=>{
                this.show_ts=false
            },1500)
        },
        showCd(){
            // 全局指向发送
            this.$bus.$emit('jdcj')

            this.show_cd=!this.show_cd
        },
        // 父接收
        guanbi(){
            this.show_cd=!this.show_cd
        },
        //播放暂停音乐
        // bfzt(){
        //     this.sfbf=!this.sfbf
        //     if(this.sfbf){
        //         this.$refs.audio.play()
        //     }else{
        //         this.$refs.audio.pause()
        //     }
        // },
        //切换音乐
        // qh(){
        //     this.mp3=require('../assets/mp3/'+this.getRandomNumber(0,67)+'.mp3');
        //     // this.$refs.audio.load()
        //     this.sfbf=true
        //     // this.$refs.audio.play()
        // },
        //指定范围随机数
    //     getRandomNumber(max,min) {
    //         return Math.floor(Math.random() * (max - min + 1)) + min;
    //    }
    }
}
</script>

<style lang="scss" scoped>
    .dingbu{
        position: fixed;
        top: -1px;
        left: 0;
        padding: 0 10px;
        width: calc(100% - 20px);
        height: 45px;
        line-height: 45px;
        box-shadow:0px 3px 3px rgb(0,0,0) ;
        background-color: rgb(255, 255, 255);
        display: flex;
        justify-content:space-between;
        .d1{
            width: auto;
            .img-qh{
                width: 30px;
                margin: 0 10px;
                vertical-align:3px;
                // opacity:0.7;
            }
            .img-zt{
                width: 40px;
                // padding-top: 3px;
            }
            .img-cd{
                width: 35px;
                height: 25px;
                vertical-align: -7px;
            }
        }
        .d2{
            width: 50%;
            font-size: 25px;
            font-weight: 600;
        }
    }


    //音乐旋转动画
    .xuanzhuan{
        animation: myfirst 3.2s linear infinite;
    }
    @keyframes myfirst
    {
        0%   {transform:rotate(0deg);}
        100% {transform:rotate(360deg);}
    }
    .donghuazantin{
        animation-play-state:paused;
    }

    .v-enter,.v-leave-to{
        opacity:0;
    }
    .v-enter-active,.v-leave-active{
        transition: all .5s ;
    }
</style>