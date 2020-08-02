<template>
    <div class="list" >
        <transition-group appear tag="div" >

        <div class="d1" v-for="(item,i) in list" :key="item.name">
            <div class="d11">
                <h3>{{item.title}}</h3>
                <p>{{item.date}}</p>
            </div>
            <div :class="dianjiImg==i ? 'dianji-img':'d12'" @click.stop="dianjLimg(i)">
                <img :class="dianjiImg==i ? 'img-dt':'img-xt'" @click.stop="dianjLimg(i)" :src="item.imgurl">
            </div>
            <p><pre>{{item.text}}</pre></p>
        </div> 


        </transition-group>
        
    </div>
</template>

<script>
export default {
    data(){
        return{
            // 列表数据
            list:[],
            //点击图片放大
            dianjiImg:null,
        }
    },
    mounted(){
       this.$axios.get('/list').then((err)=>{
           err.data.forEach((item,i)=>{
               const url=item.imgurl
               item.imgurl=this.$axios.defaults.baseURL+'/public/images/'+url
               this.list.unshift(item)
           })
       })
       
    },
    methods:{
        // 点击图片放大预览
        dianjLimg(i){
            if(this.dianjiImg==i){
                this.dianjiImg=null
                return
            }
            this.dianjiImg=i
        }
    }
}
</script>

<style lang='scss' scoped>
    .list{
        width: 100vw;
        height: calc(100vh - 45px);
        padding-top: 45px;
        overflow: auto;
        .d1{
            display: flex;
            flex-direction:column;
            width: 85vw;
            height: 110vw;
            border: 2px solid rgb(0,0,0);
            border-radius: 5px;
            margin: 5vw auto;
            box-shadow: 0 0 10px rgb(0,0,0);
            .d11,.d12,p{
                margin: 0 auto;
            }
            .d11{
                width: 70vw;
                height: 20vw;
                display: flex;
                justify-content : space-between;
                line-height: 12vh;
                h3{
                    width: 50%;
                }
                >p{
                    text-align: right;
                    width: 50%;
                }
            }
            .d12{
                width: 70vw;
                height: 60vw;
                overflow: hidden;
                display: flex;
                align-items: center;
                margin-bottom: 8vw;
                .img-xt{
                    // min-width: 70vw;
                    width: 70vw;
                    // min-height:70vw
                    
                }
                
            }
            >p{
                width: 70vw;
                height: 15vw;
                margin-bottom: 7vw;
                overflow: auto;
                pre{
                    white-space: pre-wrap;
                    font-size: 15px;
                }
            }
            
        }
    }
    .dianji-img{
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        background:rgb(0,0,0);
        display: flex;
        align-items: center;
        overflow: scroll;
    }
    .img-dt{
        width: 100vw;
        height: auto;
        
    }


                
    //动画
    .v-enter,.v-leave-to{
        opacity: 0;
        transform: scale(0.5);
        // transform: translateY(80vw);
    }
    .v-enter-active,.v-leave-active{
        transition: all 1s ease;
    }

    // .v-move{
    //     transition: all 1s ease;
    // }
    // .v-leave-active{
    //     position: absolute;
    // }
</style>