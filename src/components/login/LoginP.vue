<template>
    <div class="body_L">
        <div class="mainItem">
            <div class="Items">
                <div id="head">
                    <div style="font-size: 18px; margin-bottom: -5px">欢迎来到</div>
                    <br/>
                    <div style="font-size: 22px; font-weight: bold; color: #e1992d">CodeLife技术论坛</div>
                </div>
                <div id="card">
                    <el-tabs
                            v-model="activeName"
                            class="demo-tabs"
                            stretch="true"
                            id="table"
                    >
                        <el-tab-pane label="验证码登录" name="first" class="el-tab-pane">
                            <el-input
                                    v-model="userEmail"
                                    style="width: 90%; height: 40px"
                                    placeholder="请输入注册邮箱"
                            >
                                <template #prepend>
                                    <el-icon><UserFilled /></el-icon>
                                </template>
                            </el-input>
                            <el-input
                                    v-model="cap"
                                    style="width: 90%; height: 40px; margin-top: 20px"
                                    placeholder="请输入验证码"

                            >
                                <template #prepend>
                                    <el-icon><Lock /></el-icon>
                                </template>
                                <template #append>
                                    <div @click="sendCap">
                                        发送验证码
                                    </div>
                                </template>
                            </el-input>
                        </el-tab-pane>
                        <el-tab-pane label="密码登录" name="second" class="el-tab-pane">
                            <el-input
                                    v-model="userEmail"
                                    style="width: 90%; height: 40px"
                                    placeholder="请输入注册邮箱"
                            >
                                <template #prepend>
                                    <el-icon><UserFilled /></el-icon>
                                </template>
                            </el-input>
                            <el-input
                                    v-model="pwd"
                                    style="width: 90%; height: 40px; margin-top: 20px"
                                    placeholder="请输入密码"

                            >
                                <template #prepend>
                                    <el-icon><Lock /></el-icon>
                                </template>
                            </el-input>
                        </el-tab-pane>
                    </el-tabs>
                    <el-button
                            style="width: 90%; height: 40px; margin-top: 20px"
                            type="warning"
                            plain
                            @click="login"
                    >
                        登录
                    </el-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {onMounted, ref} from "vue";
import axios from "axios";
import {ElMessage} from "element-plus";
import {mapState, useStore } from 'vuex';
import router from "@/router";

export default {
    name: "LoginP",
    computed: {
        ...mapState(['userName_AVA']),
        // 其他 computed properties
    },
    setup() {
        const userEmail = ref("");
        const cap = ref("");
        const pwd = ref("");
        const message = ElMessage;
        const store = useStore();

        const activeName = ref('first')

        const sendCap = () => {
            console.log(userEmail.value);
            axios.post('/user/emailSend', {
                email: userEmail.value
            })
        }

        const login = () => {
            console.log(activeName.value);
            if (activeName.value === 'first') {
                // 验证码
                axios.post('/user/register', {
                    code: cap.value,
                    email: userEmail.value,
                    opt: 0
                })
                    .then((response) => {
                        if (response.data.code === 1) {
                            // success
                            const token = response.data.data.id;
                            window.sessionStorage.setItem('token', token);
                            store.state.userName_AVA = response.data.data.user.name;
                            if (store.state.userName_AVA === null) {
                                store.state.userName_AVA = '暴走奶昔';
                            }
                            router.push('/userHome');
                        }
                        else {
                            message({
                                message: response.data.msg,
                                type:'error'
                            })
                        }
                    })
            }
            else {
                // 密码
                axios.post('/user/search', {
                    email: userEmail.value,
                    password: pwd.value
                })
                    .then((response) => {
                        if (response.data.code === 1) {
                            // success
                            const token = response.data.data.id;
                            window.sessionStorage.setItem('token', token);
                            store.state.userName_AVA = response.data.data.user.name;
                            if (store.state.userName_AVA === null) {
                                store.state.userName_AVA = '暴走奶昔';
                            }
                            router.push('/userHome');
                        }
                        else {
                            message({
                                message: response.data.msg,
                                type:'error'
                            })
                        }
                    })
            }
        }

        onMounted(() => {
            sessionStorage.setItem('token', 'null');
        })

        return {
            userEmail,
            cap,
            pwd,
            activeName,
            sendCap,
            login
        }
    }
}
</script>

<style scoped>

.body_L {
    width: 100vw;
    height: 100vh;
    margin: -10px;
    padding: -5px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: row;
    background-image: url("../../img/1.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
}

.mainItem {
    width: 30vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.7);
}

.Items {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 10px;
}

#card {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 35px;
}

#head {
    width: 90%;
    /*margin-left: 10px;*/
}

/*#table > .el-tabs__content {*/
/*    !*padding: 32px;*!*/
/*    color: #e1992d;*/
/*    font-size: 32px;*/
/*    font-weight: 600;*/
/*    width: 100%;*/
/*    display: flex;*/
/*    justify-content: center;*/
/*    align-items: center;*/
/*    flex-direction: column;*/
/*}*/

::v-deep .el-tabs.el-tabs--top.demo-tabs {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

}

::v-deep .demo-tabs > .el-tabs__content {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

::v-deep .el-tabs__header.is-top {
    width: 90%;
}

::v-deep .el-tabs__active-bar {
    background-color: #e5a13c !important; /* 添加 !important 以确保优先级 */

}

::v-deep .el-tabs__item:hover {
    color: #e5a13c;
}

::v-deep .el-tabs__item.is-active {
    color: #e5a13c;
}

.el-tab-pane {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

</style>