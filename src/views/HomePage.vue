<template>
  <div class="body">
    <div class="left_aside">
      <el-menu
        default-active="active_index"
        class="el-menu-vertical-demo"
        @select="handleSelect"
      >
        <el-menu-item index="1">
          <span>综合</span>
        </el-menu-item>
        <el-menu-item index="2">
          <span>前端</span>
        </el-menu-item>
        <el-menu-item index="3">
          <span>后端</span>
        </el-menu-item>
        <el-menu-item index="4">
          <span>大数据</span>
        </el-menu-item>
        <el-menu-item index="5">
          <span>人工智能</span>
        </el-menu-item>
        <el-menu-item index="6">
          <span>算法</span>
        </el-menu-item>
        <el-menu-item index="7">
          <span>面试</span>
        </el-menu-item>
        <el-menu-item index="8">
          <span>职场经验</span>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="main">
      <el-card style="width: 800px;" >
        <div v-for="passage in passages" :key="passage.id" class="text item" style="margin-bottom: 15px;box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);padding: 10px;">
          <div style="font-size: 18px;font-weight: 600;margin-bottom: 10px;">{{ passage.title.slice(0,50) }}</div>
          <div style="margin-bottom: 10px;color: gray;">
            {{ passage.abstract.slice(0,50) }}
            <span v-if="passage.abstract.length>50">...</span>
          </div>
          <div style="margin-bottom: 10px; display: flex; justify-content: space-between;">
            <span style="margin-left: 10px;color: gray;">
              <el-icon><User /></el-icon>{{ passage.author_name }}&nbsp;
              <el-icon><Comment /></el-icon>{{ passage.like_count }}
            </span>
            <span style="margin-right: 20px;background-color:floralwhite;color:blue;width: 40px;height:25px;text-align: center;">
              {{ passage.tag }}
            </span>
          </div>
        </div>
      </el-card>
    </div>
    <div class="right_aside">
      <div class="hello">
        <div style="font-size: 20px">欢迎您！<el-icon><Mug /></el-icon></div>
        <div style="margin-top: 10px;font-weight: 300px;color: gray;">写下博客记录美好的一天</div>
      </div>
      <div class="hot">
        <span>热门榜单</span>
        <el-divider content-position="center">点赞量大</el-divider>
        <div class="hot_section">
                <div class="passages">
                  <div v-for="passage in hot_passages.slice(0, 5)" :key="passage.id" class="passage" style="margin-bottom: 10px;">
                        <span style="font-weight: 500;">{{ passage.title.slice(0,30) }}</span>&nbsp;
                        <el-icon style="color:gray;font-size: 14px;"><User /></el-icon>
                        <span style="font-weight: 300;color: gray;font-size: 14px;">{{ passage.like_count }} </span>
                    </div>
                </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { Mug,User,Comment } from '@element-plus/icons-vue'
import axios from 'axios'
export default {
  name: 'HomePage',
  components: {
      Mug,User,Comment
  },
  data(){
    return {
      active_index:1,
      hot_passages: [
                { title: "再见 Java 7！", like_count: 10, id: 146 },
                { title: "Wi-Fi 爆重大安全漏洞，Android、iOS、Windows 等所有无线设备都不安全了", like_count: 13, id: 1 },
                { title: "Python读写Excel表格，就是这么简单粗暴又好用", like_count: 65, id: 16 },
                { title: "看这里！！1024个程序员关于AI PC 的联想", like_count: 5, id: 20 },
                { title: "我该用 Java 12 还是坚持 Java 11？", like_count: 8, id: 25 },
                { title: "Linus 如何在 14 天内编写出 Git？", like_count: 2, id: 30 }
      ],
      passages: [
    {
      title: "谷粒商城实战(033 业务-秒杀功能4-高并发问题解决方案)",
      author_name: "张三",
      like_count: 12,
      tag: "前端",
      abstract: "Hi，好久不见，最近植物大战僵尸杂交版蛮火的。那今天苏音整理给大家三端的植物大战僵尸杂交版。"
    },
    {
      title: "React入门与实战",
      author_name: "李四",
      like_count: 25,
      tag: "前端",
      abstract: "本文介绍了React的基础知识和实战技巧，适合初学者和有一定经验的开发者。"
    },
    {
      title: "Vue3新特性详解",
      author_name: "王五",
      like_count: 30,
      tag: "前端",
      abstract: "本文深入探讨了Vue3的新特性和使用方法，帮助开发者快速上手新版本。"
    },
    {
      title: "Ant Design实用指南",
      author_name: "赵六",
      like_count: 18,
      tag: "前端",
      abstract: "本指南详细介绍了Ant Design的常用组件和最佳实践，提升开发效率。"
    },
    {
      title: "ECharts可视化教程",
      author_name: "孙七",
      like_count: 20,
      tag: "前端",
      abstract: "通过实例讲解ECharts的使用方法，帮助开发者快速掌握数据可视化技术。"
    },
    {
      title: "ECharts可视化教程",
      author_name: "孙七",
      like_count: 20,
      tag: "前端",
      abstract: "通过实例讲解ECharts的使用方法，帮助开发者快速掌握数据可视化技术。"
    },
    {
      title: "ECharts可视化教程",
      author_name: "孙七",
      like_count: 20,
      tag: "前端",
      abstract: "通过实例讲解ECharts的使用方法，帮助开发者快速掌握数据可视化技术。"
    }
      ]

    }
  },
  methods:{
    handleSelect(key,keyPath){
      console.log(key, keyPath);
      this.getArticles();
    },
    getPopular() {
          axios.get(`/api/blog/getPopular`)
            .then(response=>{
              if (response.code === 1) {
                this.hot_passages = response.data;
              } else {
                this.$message.error('获取top失败'); // Handle error if needed
              }
            })
            .catch(error=>{
              console.error('获取top失败', error);
              this.$message.error('获取top失败'); // Handle error if needed
            })
    },
    numberToTag(number) {
      const tagMap = {
        1: '综合',
        2: '前端',
        3: '后端',
        4: '大数据',
        5: '人工智能',
        6: '算法',
        7: '面试',
        8: '职场经验'
      };

      // 检查数字是否在有效范围内
      if (number >= 1 && number <= 8) {
        return tagMap[number];
      } else {
        return '未知标签'; // 如果数字不在1-8之间，可以返回一个默认值或者空字符串，视情况而定
      }
    },
    getArticles() {
      const tag = this.numberToTag(this.active_index);
      axios.get(`/api/blog/searchBlog?tag=${tag}`)
            .then(response => {
              if (response.data.code === 1) {
                this.passages = response.data;
              } else {
                this.$message.error('获取文章失败'); // Handle error if needed
              }
            })
            .catch(error => {
              console.error('获取文章失败', error);
              this.$message.error('获取文章失败'); // Handle error if needed
            });
    }

  },
  mounted(){
    this.getPopular();
    this.getArticles();

  }

};
</script>


<style>
/* 全局样式 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  height: 100%;
}
#mainBody{
  margin: 0;
  position:fixed;
  top:7%;
  height:94%;
  overflow: scroll;
}
/* Body容器样式 */
.body {
  display: flex;
  justify-content: space-between;
  padding: 50px; /* 页面两侧留空 */
  padding-top: 30px;
  gap: 20px; /* 左中右间隙 */
  min-height: 100vh;
  background-color: #e3e2e2; /* 背景颜色，可根据需求更改 */
}

/* Left Aside样式 */
.left_aside {
  flex: 2;
  /*background-color: #d3d3d3; /* 背景颜色，可根据需求更改 */
  padding: 10px;
  padding-top: 0;
}

/* Main内容样式 */
.main {
  flex: 8;

  /* background-color: #ffffff; /* 背景颜色，可根据需求更改 */
  /*padding: 10px; */
}

/* Right Aside样式 */
.right_aside {
  flex: 3;
  /*background-color: #d3d3d3; /* 背景颜色，可根据需求更改 */
  padding: 10px;
  padding-top: 0;
}
.hello{
  width:100%;
  height:100px;
  padding: 20px;
  background-color: hsl(184, 54%, 78%);

}
.hot{
  margin-top: 30px;
  width:100%;
  min-height:300px;
  padding: 20px;
  background-color: hsl(184, 54%, 78%);
}
</style>
