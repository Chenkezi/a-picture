<template>
    <div class="shipin">
        <div class="d1">
            <video ref="vid" src="../assets/mp4/1.mp4" @canplay='sc' autoplay controls :class="{vid:show_nc}"/>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            //降低层级
            show_nc:false,
            //播放暂停
            bfzt:true
        }
        
    },
    mounted(){
        // 全局指向监听接受
        let this_=this
        this.$bus.$on('jdcj',()=>{
            // console.log(this.$route)
            this.show_nc=!this.show_nc
            if(this.$route.fullPath=='/shipin'){
                if(this.bfzt){
                    this_.$refs.vid.pause()
                    this.bfzt=!this.bfzt
                }else{
                    this_.$refs.vid.play()
                    this.bfzt=!this.bfzt
                }
                
            }
            
        })
    },
    methods:{
        sc(){
            console.log(this.$refs.vid.duration)
            
        }
    }
}
</script>

<style lang='scss' scoped>
    .shipin{
        padding-top: 45px;
        .d1{
            width: 100vw;
            height: calc(100vh - 45px);
            display: flex;
            align-items:center;
            justify-content: center;
            video{
                max-width: 100vw;
                max-height: calc(100vh - 45px);
            }
            .vid{
                display: none;
            }
        }
        
    }
</style>