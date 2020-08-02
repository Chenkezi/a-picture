<template>
    <div class="guanli">
        <!-- <div class="d1">
            <div class="d11" @click="tupian">图片</div>
            <div class="d12" @click="yinyue">音乐</div>
        </div> -->

        <div class="d2">
            <div class="d21" v-for="item in tlist" :key="item.name">
                <div class="d211">
                    <img class="img" :src="item.imgurl">
                </div>
                <div class="d212">
                    <p>{{item.title}}</p>
                    <p>{{item.text}}</p>
                    <p>{{item.date}}</p>
                </div>
                <div class="d213">
                    <span @click="shanchu(item.name)">删除</span>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            tlist:[],//图片数据
        }
    },
    mounted(){
        this.glsj()
    },
    //页面结束
    beforeDestroy(){
        window.sessionStorage.removeItem("chen")
    },
    methods:{
        //获取数据
        glsj(){
            this.tlist=[]
            this.$axios.get('/list').then((res)=>{
                res.data.forEach((item,i)=>{
                    const url=item.imgurl
                    item.imgurl=this.$axios.defaults.baseURL+'/public/images/'+url
                    this.tlist.unshift(item)
                })
            })
        },
        //删除
        shanchu(name){
            if(!window.sessionStorage.getItem("chen")){
                //发送无权限全局指令
                this.$bus.$emit('wuquanxian')
                return
            }
            this.$axios.get('/listsc',{params:{name:name}}).then((res)=>{
                if(res.data){
                    this.glsj()
                    return
                }
                //发送删除失败全局指令
                this.$bus.$emit('shanchushibai')
            })
        }
    }
}
</script>

<style lang="scss" scoped>
    .guanli{
        .d2{
            width: 100vw;
            margin-top: 60px;
            .d21{
                height: 20vw;
                border: 2px solid rgb(0,0,0);
                margin: 5vw;
                padding: 5vw;
                display: flex;
                .d211{
                    width: 27vw;
                    height: 20vw;
                    display: flex;
                    align-items: center;
                    overflow: hidden;
                    margin-right: 7vw;
                    border: 1px solid rgb(0,0,0);
                    >img{
                        width: 20vw;
                    }
                }
                .d212{
                    width: 30vw;
                    height: 20vw;
                    p{
                        overflow: hidden;
                        text-overflow:ellipsis;
                        white-space: nowrap;
                    }
                }
                .d213{
                    width: 30vw;
                    height: 20vw;
                    text-align: center;
                    line-height: 20vw;
                    >span{
                        padding: 2vw;
                        border: 1px solid rgb(0,0,0);
                    }
                }
                
            }
        }
        
    }
</style>