<template>
    <div class="foot">
        <ul>
            <li>
                <a href="@/views/otherPage.vue">关于我们</a>
            </li>
            <li>
                <a href="@/views/otherPage.vue">招贤纳士</a>
            </li>
            <li>
                <a href="@/views/otherPage.vue">商业合作</a>
            </li>
            <li>
                <a href="@/views/otherPage.vue">寻求报导</a>
            </li>
            <li>
                <el-icon><Phone /></el-icon>
                400-660-0108
            </li>
            <li>
                <el-icon><Document /></el-icon>
                kefu@codelife.com
            </li>
            <li>
                <el-icon><Clock /></el-icon>
                工作时间 8:30-22:00
            </li>
        </ul>
    </div>
</template>

<script>
import { Phone, Document,Clock } from '@element-plus/icons-vue'

export default {
    name: 'FootBar',
    components: {
        Phone,
        Document,
        Clock
    }
}
</script>

<style>
.foot {
    background-color: #6d6e6e; /* 背景颜色 */
    padding: 20px 0; /* 内边距 */
    padding-left:230px;
    padding-right:200px;
    padding-top: 25px;
    height:70px;

}

.foot ul {
    display: flex; /* 使用 Flexbox 布局 */
    justify-content: space-around; /* 在水平方向上均匀分布 */
    align-items: center; /* 垂直方向居中 */
    list-style-type: none; /* 去掉列表项的点 */
    margin: 0;
    padding: 0;
}

.foot li {
    display: flex; /* 每个列表项使用 Flexbox 布局 */
    align-items: center; /* 列表项内容垂直居中 */
    font-size: 16px; /* 字体大小 */
    color: #333; /* 文字颜色 */
    margin-right: 10px;
}

.foot li el-icon {
    margin-right: 15px; /* 图标和文字之间的间距 */
    font-size: 20px; /* 图标大小 */
    margin-right: 5px;
}
.foot li a {
    text-decoration: none; /* 去掉下划线 */
    color: inherit; /* 继承父元素颜色 */
}

.foot li a:hover {
    color: #007BFF; /* 鼠标悬停时颜色 */
}
</style>
