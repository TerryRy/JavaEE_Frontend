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
                <el-avatar :size="40" :src="ava_src" style="margin-right: 20px"/>
                <el-button @click="toCreate" type="primary" plain round style="font-size: 15px">
                    <el-icon style="margin-right: 3px"><CirclePlus /></el-icon>
                    发布
                </el-button>
            </div>
        </div>
    </nav>
</template>

<script>
import router from "@/router";
import {ref} from "vue";

export default {
    name: 'HeadBar',

    setup() {

        const inputSearch = ref("")
        const jumpHome = () => {
            router.push('/')
        }
        
        const runSearch = () => {
            console.log("搜索：" + inputSearch.value);
            // TODO: add searching api
        }

        const toCreate = () => {
            // router.push('/create')
        }

        return {
            inputSearch,
            jumpHome,
            runSearch,
            toCreate
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
