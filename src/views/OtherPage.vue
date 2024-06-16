<template>
    <div class="header"></div>
    otherPage
</template>
  
<script>
    import FootBar from "@/components/FootBar.vue";
    export default {
        components: {
            FootBar,
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
  
  /* 设置 flex 布局 */
  .body {
    display: flex;
    flex-direction: column;
  }
  
  /* header 样式 */
  .header {
    height: 60px; /* 可以根据需要调整高度 */
    background-color: #1b83eb; /* 设置背景颜色 */
  }
  
  /* main 样式 */
  .main {
    display: flex;
    flex: 1; /* 使 main 占据剩余空间 */
    background-color: #e9ecef; /* 设置背景颜色 */
  }
  
  /* left 和 right 样式 */
  .aside, .detail {
    flex: 0.25; /* 两个部分平分空间 */
    padding: 20px; /* 设置内边距 */

  }
          
  /* 如果希望 left 和 right 之间有间距，可以使用 margin */
  .aside {
    margin-right: 20px;
    background-color: #b12128;
  }
  
  /* footer 样式 */
  .footer {
    height: 40px; /* 可以根据需要调整高度 */
    background-color: #f1f3f5; /* 设置背景颜色 */
  }
  </style>
  