<template>

    <el-dialog
            v-model="dialogVisible"
            width="40%"
    >
        <el-tabs
                v-model="activeName"
                class="demo-tabs"
                stretch="true"
                id="table"
        >
            <el-tab-pane label="修改基本信息" name="first" class="el-tab-pane_UH">
                <el-input
                        v-model="newNick"
                        style="width: 90%; height: 40px"
                        placeholder="昵称"
                >
<!--                    <template #prepend>-->
<!--                        <el-icon><UserFilled /></el-icon>-->
<!--                    </template>-->
                </el-input>
                <el-input
                        v-model="newGender"
                        style="width: 90%; height: 40px; margin-top: 20px"
                        placeholder="性别"
                >
<!--                    <template #prepend>-->
<!--                        <el-icon><Lock /></el-icon>-->
<!--                    </template>-->
<!--                    <template #append>-->
<!--                        <div @click="sendCap">-->
<!--                            发送验证码-->
<!--                        </div>-->
<!--                    </template>-->
                </el-input>
                <el-input
                        v-model="newEdu"
                        style="width: 90%; height: 40px; margin-top: 20px"
                        placeholder="学历"
                >
                </el-input>
                <el-input
                        v-model="newInto"
                        style="width: 90%; height: 40px; margin-top: 20px"
                        placeholder="个人简介"
                >
                </el-input>
                <div class="dialog-footer" style="margin-top: 10px; display: flex; flex-direction: row; justify-content: flex-end; align-items: flex-end">
                    <el-button @click="dialogVisible = false">Cancel</el-button>
                    <el-button type="primary" @click="updateBaseInfo()">
                        Confirm
                    </el-button>
                </div>
            </el-tab-pane>
            <el-tab-pane label="修改密码" name="second" class="el-tab-pane_UH">
                <el-input
                        v-model="oldPwd"
                        style="width: 90%; height: 40px"
                        placeholder="旧密码"
                >
                </el-input>
                <el-input
                        v-model="newPwd"
                        style="width: 90%; height: 40px; margin-top: 20px"
                        placeholder="新密码"
                >
                </el-input>
                <div class="dialog-footer" style="margin-top: 10px; display: flex; flex-direction: row; justify-content: flex-end; align-items: flex-end">
                    <el-button @click="dialogVisible = false">Cancel</el-button>
                    <el-button type="primary" @click="updatePwd">
                        Confirm
                    </el-button>
                </div>
            </el-tab-pane>
            <el-tab-pane label="修改邮箱" name="third" class="el-tab-pane_UH">
                <el-input
                        v-model="newEmail"
                        style="width: 90%; height: 40px; margin-top: 20px"
                        placeholder="新邮箱"
                >
                </el-input>
                <el-input
                        v-model="capN"
                        style="width: 90%; height: 40px; margin-top: 20px"
                        placeholder="验证新邮箱"
                >
                    <template #append>
                        <div @click="sendCap(newEmail)">
                            发送验证码
                        </div>
                    </template>
                </el-input>
                <div class="dialog-footer" style="margin-top: 10px; display: flex; flex-direction: row; justify-content: flex-end; align-items: flex-end">
                    <el-button @click="dialogVisible = false">Cancel</el-button>
                    <el-button type="primary" @click="updateEmail">
                        Confirm
                    </el-button>
                </div>
            </el-tab-pane>
        </el-tabs>
    </el-dialog>


    <div class="UH" id="body_UH">
        <el-container class="UH" id="body_UH">
            <el-header class="UH" id="header_UH">
                <el-card class="card_UH" id="card_head_UH">
                    <div class="card_body_UH" id="card_container_UH">
                        <div class="card_body_UH" id="ava">
                            <el-avatar :size="95" style="font-size: 30px">{{ userName.substring(0, 2) }}</el-avatar>
                        </div>
                        <el-descriptions class="card_body_UH" id="info" column="2" label-style="'font-size': '200px'">
                            <el-descriptions-item label="昵称" >{{ userName }}</el-descriptions-item>
                            <el-descriptions-item style="display:flex; flex-direction:column; align-items: center; justify-content: center">
                                <el-icon v-if="userGender"><Male /></el-icon>
                                <el-icon v-else><Female /></el-icon>
                            </el-descriptions-item>
                            <el-descriptions-item label="学历">{{ userEdu }}</el-descriptions-item>
                            <el-descriptions-item label="邮箱">{{ userEmail }}</el-descriptions-item>
                            <el-descriptions-item label="简介">{{ userInto }}</el-descriptions-item>
                        </el-descriptions>
                        <div class="card_body_UH" id="button">
                            <el-button type="primary" :icon="Edit" circle plain @click="dialogVisible = true"/>
                        </div>
                    </div>
                </el-card>
            </el-header>
            <el-container class="UH" id="main_UH">
                <el-aside class="UH" id="left_UH" width="30%">
                    <el-card class="card_UH" id="card_left_UH">
                        <template #header>
                            <div class="card-header">
                                <span>个人成就</span>
                            </div>
                        </template>
                        <p class="bar">
                            <el-icon style="margin-right: 7px"><Star /></el-icon>
                            获得{{stars}}次点赞
                        </p>
                        <p class="bar">
                            <el-icon style="margin-right: 7px"><ChatDotRound /></el-icon>
                            内容获得{{comments}}次评论
                        </p>
                    </el-card>
                </el-aside>
                <el-main class="UH" id="right_UH" width="65%">
                    <el-card class="card_UH" id="card_right_UH">
                        <template #header>
                            <div class="card-header">
                                <span>我的文章</span>
                            </div>
                        </template>
                        <el-table :data="articles" height="400" stripe style="width: 100%">
                            <el-table-column prop="title" label="标题" width="180">
                                <template #default="scope">
                                    <div @click="openArticle(scope.row)">
                                        {{ scope.row.title }}
                                    </div>
                                </template>
                            </el-table-column>
                            <el-table-column prop="abst" label="摘要" width="180">
                                <template #default="scope">
                                    <div @click="openArticle(scope.row)">
                                        {{ scope.row.abst }}
                                    </div>
                                </template>
                            </el-table-column>
                            <el-table-column prop="time" label="发布时间">
                                <template #default="scope">
                                    <div @click="openArticle(scope.row)">
                                        {{ scope.row.time }}
                                    </div>
                                </template>
                            </el-table-column>
                        </el-table>
                    </el-card>
                </el-main>
            </el-container>
        </el-container>
    </div></template>

<script>
import {onMounted, ref} from "vue";
import {Edit} from '@element-plus/icons-vue'

export default {
    name: "UserHome",

    setup() {
        const stars = ref(0);
        const comments = ref(0);
        const articles = ref([
            {
                title: '暴走奶昔的制作方法',
                abst: '切、削、刨，一次解决',
                time: '2024/6/14'
            },
            {
                title: '用暴走奶昔喂HelloKitty',
                abst: '注意适量，不可贪杯',
                time: '2024/6/15'
            },
        ]);
        const srcAva = ref("https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png")

        // const userInfo = ref("");
        const userName = ref("暴走奶昔");
        const userGender = ref(true);
        const userEdu = ref("BUAA");
        const userEmail = ref("1234567890@buaa.com");
        const userInto = ref("暴走奶昔是一种奶昔，传说HelloKitty非常喜欢");

        let dialogVisible = ref(false);

        const activeName = ref('first');
        const newNick = ref();
        const newGender = ref();
        const newEdu = ref();
        const newInto = ref();
        const newPwd = ref();
        const oldPwd = ref();
        const newEmail = ref();
        const capN = ref();
        
        const getUserInfo = () => {
            // TODO: if get failed, push back to login and send message
        };

        const openArticle = (row) => {
            row.id;
            // TODO: open the article
        };

        const updateBaseInfo = () => {
            // TODO: update
            dialogVisible = false;
        };

        const sendCap = (email) => {
            email;
            // TODO: add the api of send cap
        };

        const updatePwd = () => {
            // TODO: update pwd
            dialogVisible = false;
        };

        const updateEmail = () => {
          // TODO: update email
            dialogVisible = false;
        }
        
        onMounted(() => {
            getUserInfo();
        })

        return {
            stars,
            comments,
            articles,
            srcAva,
            userName,
            userGender,
            userEdu,
            userEmail,
            userInto,
            dialogVisible,
            activeName,
            newNick,
            newGender,
            newEdu,
            newInto,
            newPwd,
            oldPwd,
            newEmail,
            capN,
            openArticle,
            updateBaseInfo,
            sendCap,
            updatePwd,
            updateEmail,
            Edit
        }
    }
}
</script>

<style scoped>

.UH {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

#body_UH {
    height: 100%;
}

#header_UH {
    padding: 0;
    height: 25%;
    margin: 30px 0 0;
}

#left_UH {
    width: 30%;
    height: 100%;
    margin: 0;
    padding: 0;
    flex-direction: column;
    justify-content: flex-start;
}

#right_UH {
    width: 65%;
    height: 100%;
    margin: 0;
    padding: 0;
    flex-direction: column;
    justify-content: flex-start;
}

.card_UH {
    width: 100%;
    margin-left: 20px;
    margin-right: 20px;
    padding: 0;
}

#card_head_UH {
    width: calc(100% - 40px);
    height: 100%;
    /*display: flex;*/
    flex-direction: row;
    align-items: center;
    justify-items: center;
}

#card_left_UH {
    width: calc(100% - 45px);
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 30px;
}

#card_right_UH {
    height: calc(100% - 40px);
    width: calc(100% - 45px);
    margin-top: 30px;
    flex-direction: column;
    justify-content: flex-start;
}

.bar {
    display: flex;
    /*justify-content: center;*/
    align-items: center;
}

#ava {
    width: 15%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: flex-start;
    margin-left: -10px;
    margin-top: -40px;
    margin-right: 10px;
}

#info {
    width: 70%;
    display: flex;
    align-items: center;
    justify-items: center;
}

#button {
    width: 10%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-items: flex-start;
    margin: 20px 20px auto auto;
}

#card_container_UH {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}

.el-card::v-deep .el-card__body {
    width: calc(100% - 20px);
    height: calc(100% - 20px);
    display: flex;
    flex-direction: column; /* 确保子组件垂直排列 */
    padding: 10px; /* 移除默认内边距 */
}

::v-deep .el-descriptions__label {
    font-size: 16px;
    font-weight: bold;
}

::v-deep .el-descriptions__content {
    font-size: 16px;
}

.el-tab-pane_UH {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

</style>