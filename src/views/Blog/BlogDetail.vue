<template>
  <div class="main-container">
      <div class="main">
          <div class="aside">
              <div class="author_section">
                <div class="author1" style="display: flex;">
                  <img src="@/assets/logo.png" style="height:50px;width:50px;margin-right: 20px;">
                  <router-link to="/OtherBlog" style="margin-bottom:20px;height:50px;padding: 15px;">{{ author_name }}</router-link>
                </div>
                <div class="author2" style="display: flex;padding-left: 20px;">
                  <div style="margin-right: 30px;">
                    <div>发文量</div>
                    <div>&nbsp;&nbsp;{{ author_publication_count }}</div>
                  </div>
                  <div style="margin-right: 30px;">
                    <div>点赞量</div>
                    <div>&nbsp;&nbsp;{{ author_like_count }}</div>
                  </div>
                  <div>
                    <div>评论量</div>
                    <div>&nbsp;&nbsp;{{ author_comment_count }}</div>
                  </div>
                </div>
                <el-divider border-style="dotted" style="margin:10px"/>
              </div>
              <div class="hot_section">
                <div class="hot_title" style="padding: 15px;background-color: aqua;">热门文章</div>
                <div class="passages">
                  <div v-for="passage in hot_passages.slice(0, 5)" :key="passage.id" class="passage" style="margin-bottom: 10px;">
                        <span style="font-weight: 500;">{{ passage.title }}</span>&nbsp;
                        <el-icon style="color:gray;font-size: 14px;"><User /></el-icon>
                        <span style="font-weight: 300;color: gray;font-size: 14px;">{{ passage.like_count }} </span>
                    </div>
                </div>
              </div>
          </div>
          <div class="detail">
              <div class="passage_section">
                <div class="passage_title">
                  <span style="font-size: 30px;font-family: Arial, Helvetica, sans-serif">{{ passage_title }}</span>
                </div>
                <div class="passage_detail">
                  <div style="margin-bottom: 10px;">
                    <router-link to="/OtherPage">{{ author_name }}</router-link>&nbsp;&nbsp;
                    <el-icon><Clock /></el-icon><span>于{{ passage_time }}发布</span>&nbsp;&nbsp;
                    <el-icon><User /></el-icon><span>点赞量{{ like_count }}</span>&nbsp;&nbsp;
                    <el-icon><CopyDocument /></el-icon><span>评论量{{ comment_count }}</span>&nbsp;&nbsp;
                  </div>
                  <div>
                    文章标签：&nbsp;&nbsp;
                    <span style="margin-right: 20px;background-color:floralwhite;color:blue;width: 40px;height:25px;text-align: center;">
                      {{ passage_tag }}
                    </span>
                  </div>
                </div>
                <div class="passage_body">
                  <cherry-components
                      ref="cherryComponents"
                      :height="this.height"
                      :editorModel="editorModel"
                  ></cherry-components>
                </div>
              </div>
              <div class="comment_section">
                <div class="your_comment">
                  <div class="avatar">
                    <img src="@/assets/logo.png" style="width:50px;margin-right: 30px;">
                  </div>
                  <div class="new_comment">
                    <el-input
                      v-model="textarea"
                      style="width: 500px;"
                      :rows="2"
                      type="textarea"
                      maxlength="100"
                      placeholder="欢迎高质量评论"
                      show-word-limit
                    />
                  </div>
                  <div class="button">
                    <el-button color="#79bbff" :dark="isDark"  style="color: white;margin-top: 10px;margin-left:30px" @click="putComment">发布评论</el-button>
                  </div>
                </div>
                <el-divider></el-divider>
                <div class="other_comment">
                  <div v-for="comment in comments" :key="comment.time" class="comment">
                    <p>{{ comment.content }}</p>
                    <div style="font-size: 12px;color: gray;">
                      <el-icon><User /></el-icon>
                      <span>{{ comment.author_name }}</span>&nbsp;&nbsp;
                      <el-icon><Clock /></el-icon>
                      <span>{{ comment.time }}</span>
                    </div>
                    <el-divider></el-divider>
                  </div>
                </div>
                
              </div>
              
          </div>
      </div>
  </div>

  <div class="footer"><FootBar></FootBar></div>
</template>
<script>
  import axios from 'axios'
  import FootBar from "@/components/FootBar.vue";
  import { User,CopyDocument,Clock } from '@element-plus/icons-vue'
  import CherryComponents from "@/components/Cherry/CherryComponents";
  export default {
      components: {
          FootBar,User,CopyDocument,Clock,CherryComponents
      },
      data(){
        return{
          author_name:"zhangsan",
          author_id:1,
          editorModel: 'previewOnly',
          height:"400px",
          passage_id:1,
          passage_title:"Wi-Fi 爆重大安全漏洞，Android、iOS、Windows 等所有无线设备都不安全了",
          passage_time:"2017-10-17 13:10:49",
          passage_tag:"前端",
          comment_count:10,
          like_count:19,
          unlike_count:1,
          author_publication_count:77,
          author_comment_count:1987,
          author_like_count:9986,
          textarea:"",
          hot_passages: [
                { title: "再见 Java 7！", like_count: 10, id: 146 },
                { title: "Wi-Fi 爆重大安全漏洞，Android、iOS、Windows 等所有无线设备都不安全了", like_count: 13, id: 1 },
                { title: "Python读写Excel表格，就是这么简单粗暴又好用", like_count: 65, id: 16 },
                { title: "看这里！！1024个程序员关于AI PC 的联想", like_count: 5, id: 20 },
                { title: "我该用 Java 12 还是坚持 Java 11？", like_count: 8, id: 25 },
                { title: "Linus 如何在 14 天内编写出 Git？", like_count: 2, id: 30 }
          ],
          comments: [
            { content: '安全，永远的话题，如何在安全的努力都是值得的', author_name: '用户1', time: '2023-06-10 10:00' },
            { content: 'wifi漏洞这个有点危险，随处都是wifi', author_name: '用户2', time: '2023-06-11 11:00' },
            { content: '现在都wap3了，不慌', author_name: '用户3', time: '2023-06-12 12:00' },
            { content: '都是干货，简直太干了', author_name: '用户4', time: '2023-06-13 13:00' },
            { content: '黑linux桌面系统似乎价值不大，要是用linux桌面的人多了也会曝光出各种不安全，不过linux本身似乎决定了自己很难像闭源系统那样普及', author_name: '用户5', time: '2023-06-14 14:00' }
          ]
        }
      },
      methods:{
        getArticle() {
          // const article_id = this.$route.params.id; // Assuming you pass article ID via route params
          axios.get(`/api/blog/getArticle?id=${this.passage_id}`)
            .then(response => {
              const { data } = response.data; // Assuming the response structure is { code, msg, data }
              if (response.data.code === 1) {
                this.passage_title=data.title;
                this.passage_tag=data.tag;
                this.passage_time=data.time;
                this.like_count=data.like;
                this.unlike_count=data.unlike;
                this.comment_count=data.comment;
                this.getAuthor();
              } else {
                this.$message.error('获取文章失败'); // Handle error if needed
              }
            })
            .catch(error => {
              console.error('获取文章失败', error);
              this.$message.error('获取文章失败'); // Handle error if needed
            });
        },
        getAuthor() {
          axios.get(`/api/blog/getAuthor?id=${this.author_id}`)
            .then(response=>{
              const { data } = response.data;
              if (response.data.code === 1) {
                this.author_name=data.author_name;
                this.author_like_count=data.author_like_count;
                this.author_comment_count=data.author_comment_count;
                this.author_publication_count=data.author_publication_count;
              } else {
                this.$message.error('获取作者失败'); // Handle error if needed
              }
            })
            .catch(error=>{
              console.error('获取作者失败', error);
              this.$message.error('获取作者失败'); // Handle error if needed
            })
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
        getComments() {
          axios.get(`/api/blog/getComments?id=${this.passage_id}`)
            .then(response=>{
              const { data } = response.data;
              if (response.data.code === 1) {
                this.comments=data.comments;
              } else {
                this.$message.error('获取作者失败'); // Handle error if needed
              }
            })
            .catch(error=>{
              console.error('获取作者失败', error);
              this.$message.error('获取作者失败'); // Handle error if needed
            })
        },
        putComment() {
          const my_comment = this.textarea; // Assuming this.textarea is properly initialized

          axios.post('/api/blog/comment', { comment: my_comment })
            .then(response => {
              if (response && response.data && response.data.code === 1) {
                this.$message.success('评论发布成功');
                // Optionally, reset the textarea or perform other actions upon success
                this.textarea = ''; // Reset textarea after successful comment submission
              } else {
                this.$message.error('评论发布失败');
              }
            })
            .catch(error => {
              console.error('评论发布失败', error);
              this.$message.error('评论发布失败');
            });
        }

      },
      mounted() {
        this.getArticle();
        this.getPopular();
      },
  }
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
a{
  text-decoration: none; /* 去掉下划线 */
  color: inherit; /* 继承父元素颜色 */
}
a :hover{
  color: #007BFF; /* 鼠标悬停时颜色 */
}
/* 设置 flex 布局 */
.body {
  display: flex;
  flex-direction: column;
  height: 100%;
}

/* main-container 样式 */
.main-container {
  flex: 1; /* 使 main-container 占据剩余空间 */
  padding: 20px 100px; /* 设置左右两侧的间距 */
  
}

/* main 样式 */
.main {
  display: flex;
  justify-content: space-between; /* 在子元素之间留空 */
  height: calc(100vh - 110px); /* 计算高度以减去 header 和 footer 的高度 */
  overflow: scroll;

}

/* aside 和 detail 样式 */
.aside {
  flex: 0 0 28%; /* 固定宽度为20% */
  min-height: 100%; /* 高度与 main 一致 */
}
.author_section{
  margin-bottom: 30px;
  padding: 20px;
  background-color:azure;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 添加阴影效果 */
}
.hot_section{
  min-height:100px;
  background-color:azure;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 添加阴影效果 */
}
.passages{
  padding: 15px;
  
}
.detail {
  flex: 0 0 70%; /* 固定宽度为70% */
  background-color: azure;
  min-height: 100%; /* 高度与 main 一致 */
  /*box-shadow: 0 8px 8px rgba(0, 0, 0, 0.5); /* 添加阴影效果 */
}
.passage_title{
  width:100%;
  padding:30px;

}
.passage_detail{
  width:95%;
  padding:20px;
  padding-left: 40px;
  /* background-color: rgb(215, 217, 217); */

}
.passage_body{
  width:100%;
  padding:30px;
  background-color: azure;
  min-height:500px;

}
.comment_section{
  width:100%;
  min-height:200px;
  background-color:aliceblue;

}
.your_comment{
  padding: 20px;
  display: flex;
}
.other_comment{
  padding: 20px;
  margin-top: 20px;
}
/* footer 样式 */
.footer {
  height: 70px; /* 可以根据需要调整高度 */
  background-color: #5a5b5c; /* 设置背景颜色 */
  position: fixed; /* 固定定位 */
  bottom: 0; /* 底部对齐 */
  left: 0; /* 左侧对齐 */
  width: 100%;
}
</style>
