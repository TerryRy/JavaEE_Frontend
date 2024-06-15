<template>
    <nav class="navbar">
        <div class="body_HB">
            <div id="bottomHome" @click="jumpHome">
                <el-icon style="margin-left: 15px; margin-right: 5px">
                    <MilkTea />
                </el-icon>
                CodeLife
            </div>
            <div id="input">
                <el-input
                        v-model="inputSearch"
                        style="flex: 1"
                        placeholder="请输入内容"
                        @keyup.enter="runSearch"
                >
                    <template #prefix>
                        <el-icon class="el-input__icon"><search /></el-icon>
                    </template>
                </el-input>
                <el-button @click="runSearch" type="primary" style="margin-left: 25px; font-size: 15px">搜索</el-button>
            </div>
            <div id="element">
                <el-popover
                        popper-style="box-shadow: rgb(14 18 22 / 35%) 0px 10px 38px -10px, rgb(14 18 22 / 20%) 0px 10px 20px -15px; padding: 20px;"
                >
                    <template #reference>
                        <el-avatar :size="35" style="font-size: 12px">{{ userName.substring(0, 2) }}</el-avatar>
                        />
                    </template>
                    <template #default>
                        <div
                                class="demo-rich-conent"
                                style="display: flex; gap: 16px; flex-direction: column"
                        >
                            <p @click="toUserHome" style="display: flex; flex-direction: row; align-items: center">
                                <el-icon style="margin-right: 5px"><House /></el-icon>
                                个人主页
                            </p>
                            <p @click="toSetting" style="display: flex; flex-direction: row; align-items: center">
                                <el-icon style="margin-right: 5px"><Setting /></el-icon>
                                设置
                            </p>
                            <p @click="logOut" style="display: flex; flex-direction: row; align-items: center">
                                <el-icon style="margin-right: 5px"><Delete /></el-icon>
                                退出登录
                            </p>
                        </div>
                    </template>
                </el-popover>
                <el-button @click="toCreate" type="primary" plain round style="font-size: 15px; margin-left: 45px">
                    <el-icon style="margin-right: 3px"><CirclePlus /></el-icon>
                    发布
                </el-button>
            </div>
        </div>
    </nav>
</template>

<script>
import router from "@/router";
import {onMounted, ref} from "vue";

export default {
    name: 'HeadBar',

    setup() {

        const inputSearch = ref("")
        // const srcAva = ref("https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png")
        const userName = ref("暴走奶昔");
        const jumpHome = () => {
            router.push('/')
        }
        
        const runSearch = () => {
            // console.log("搜索：" + inputSearch.value);
            // TODO: add searching api
        }

        const toCreate = () => {
            // TODO: route
            // router.push('/create');
        }

        const toUserHome = () => {
            console.log("into toUserHome")
            if (sessionStorage.getItem("token") === 'null') {
                // no login
                router.push('/login');
            }
            else {
                router.push('/userHome');
            }
        }

        const toSetting = () => {
            router.push('/setting');
        }

        const logOut = () => {
            sessionStorage.setItem("token", 'null');
            router.push('/login');
        }

        const getUserInfo = () => {
            if (!sessionStorage.getItem("token") === null) {
                // no login
                // TODO: get self info and update relevant data, maybe only srcAva
            }
        }

        onMounted(() => {
            getUserInfo();
        })

        return {
            inputSearch,
            userName,
            jumpHome,
            runSearch,
            toCreate,
            toUserHome,
            toSetting,
            logOut
        }
    }
};
</script>

<style scoped>

.navbar {
    width: 100%;
    height: 6%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.body_HB {
    width: 100%;
    height: 100%;
    margin: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}

ul {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
}

li {
    margin-right: 1rem;
}

#bottomHome {
    width: 25%;
    display: flex;
    flex-direction: row;
    align-items: center;
}

#input {
    width: 50%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-left: 7px;
    margin-right: 7px;
}

#element {
    width: 25%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: right;
    padding: 10px;
}

</style>
