<template>
    <div v-loading="loading">
        <div></div>
        <ul>
            <li v-for="item in dataList">{{item.title}}</li>
        </ul>
    </div>
</template>

<script>
    export default{
        data(){
            return {
                dataList: '',
                loading : true
            }
        },
        mounted: function() {
            this.$http.jsonp('http://m.toutiao.com/list/?tag=news_tech&ac=wap&count=5&format=json_raw&as=A1C5B8143523B69&cp=5845435BB6199E1&min_behot_time=0', {}, {
                headers: {

                },
                emulateJSON: true
            }).then(function(response) {// 这里是处理正确的回调
                console.log(response.data.data)
                this.loading = false; //加载完成开关
                this.dataList = response.data.data
            }, function(response) { // 这里是处理错误的回调
                console.log(response)
            });
        }
    }
</script>