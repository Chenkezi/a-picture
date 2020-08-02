<template>
    <div class="img">
        <div class="d1">
            <h3 @click="daohang1">首页</h3>
            <h3 @click="daohang2">发布</h3>
            <h3 @click="daohang3">|||</h3>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        
    },
    mounted(){

    },
    methods:{
        daohang1(){
            // 子传父关闭导航框
            this.$emit('guanbi')
            if(this.$route.path=='/'){
                return
            }
            //路由跳转
            this.$router.push({path:'/'})
        },
        daohang2(){
            // 子传父关闭导航框
            this.$emit('guanbi')
            // this.$bus.$emit('发布')
            if(this.$route.path=='/fabu'){
                return
            }
            // 路由跳转
            this.$router.push({path:'/fabu'})
        },
        daohang3(){
            // 子传父关闭导航框
            this.$emit('guanbi')
            // this.$bus.$emit('zwwc')
            if(this.$route.path=='/denglu'){
                return
            }
            // 路由跳转
            this.$router.push({path:'/denglu'})
        },
        
    }
}
</script>

<style lang="scss" scoped>
    .img{
        padding: 20vw;
        box-sizing:content-box;
        box-sizing:border-box;
        position: fixed;
        top: 45px;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(0,0,0,0.7);
        z-index: 1;
        .d1{
            width: auto;
            height: 70vh;
            border: 2px solid rgb(255,255,255);
            border-radius: 5px;
            padding-left: 10px;
            display: flex;
            align-items:center;

            justify-content:space-around;
            flex-direction:column;
            h3{
                color: rgb(255,255,255);
                letter-spacing:5px;
            }
        }
        
    }
</style>