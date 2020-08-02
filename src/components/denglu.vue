<template>
    <div class="denglu">
        <div class="d1" >
            <input class="i1" type="text" v-model="zhmm.name" maxlength="5" placeholder='用户名'>
            <input class="i2" type="password" v-model="zhmm.password" maxlength="10" placeholder="密码">
            <div class="d11" @click="deng_lu">登录</div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            //账号密码
            zhmm:{
                name:'陈壳子',
                password:'123456'
            },
        }
    },
    methods:{
        //登录
        async deng_lu(){
            // let shuju=await this.$axios.get('/zcdl/denglu',{params:this.zhmm})
            // if(!shuju.data[0]){
            //     //全局指令登录失败
            //     this.$bus.$emit('denglushibai')
            //     return
            // }
            // localStorage
            window.sessionStorage.setItem('chen','1')
            this.$router.push({path:'/guanli'})
        },
        
    }
}
</script>

<style scoped lang='scss'>
    .denglu{
        width: 100vw;
        padding-top: 45px;
        
        .d1{
            display: flex;
            flex-direction:column;
            padding: 20vw 15vw;
            .i1,.i2{
            width: 65vw;
            height: 15vw;
            outline: none;
            border-radius: none;
            border: none;
            border-bottom: 2px solid rgb(0,0,0);
            margin: 5px;
            font-size: 20px;
            padding: 0 3vw;
            // text-align: center;
            }
            .d11{
                margin: 10vw 0 0 25vw;
                width: 20vw;
                height: 10vw;
                line-height: 10vw;
                text-align: center;
                border-bottom: 1px solid rgb(0,0,0);
                // border-radius: 5px;
            }
        }
    }
</style>