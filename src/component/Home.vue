<template>
    <div>
        <el-button type="info" @click="handleSignout">退出</el-button>
    </div>
</template>

<script>
export default {
    data () {
        return {

        }
    },
    methods: {
        handleSignout () {
            window.sessionStorage.clear();
            this.$router.push('/login');
        }
    }
}
</script>

<style lang="less" scoped>

</style>