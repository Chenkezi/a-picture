<template>
    <div class="tishi">
        <div class="d1"></div>
        {{tsnr}}
    </div>
</template>

<script>
export default {
    props:{
        tsnr:{
            type: String,
            default: ''
        },
    }
}
</script>

<style scoped lang='scss'>
    .tishi{
        z-index: 1;
        width: 50vw;
        height: 15vw;
        position: fixed;
        top: 20vw;
        left: 50vw;
        transform: translateX(-50%);
        line-height: 15vw;
        font-size: 20px;
        border-radius: 5px;
        text-align: center;
        background: rgb(255,255,255);
        border: 1px solid rgb(0,0,0);
        box-shadow: 0 0 3px rgb(0,0,0);
    }
</style>