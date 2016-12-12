<template>
    <div v-loading="loading">
        <ul class="item-ul">
            <li v-for="item in dataList">
                <span class="item-img-span" v-if="item.has_image">
                    <img class="item-img" v-bind:src="item.image_list.length>0? item.image_list[0].url:item.image_url" alt="">
                </span>
                <span class="item-img-span" v-else>
                    <img class="item-img" src="../assets/no-img.png" alt="">
                </span>
                <span class="item-title"><a :href="item.url">{{item.title}}</a></span>
            </li>
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