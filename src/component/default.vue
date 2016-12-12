<template>
    <el-row>
        <el-col :span="24" style="text-align:center">
            <el-card>
                <img src="../assets/logo.png" class="image">
                <div style="padding: 14px;">
                    <h1>作者：{{ author }}</h1>
                    <h2 style="margin-top:20px;"><i class="el-icon-time"></i>2016-12-05</h2>
                </div>
            </el-card>
        </el-col>
    </el-row>
</template>
<script>
    export default{
        data(){
            return {
                author: "Felix"
            }
        }
    }
</script>