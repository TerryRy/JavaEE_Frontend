<template>
  <div class="Editor">
    <div class="article-editor" style="height:700px;">
      <!-- 编辑器内容 -->
      <!-- <CherryEditor></CherryEditor> -->
      <cherry-components ref="cherryComponents"
                         :height="height"
                         :editorModel="editorModel"
      ></cherry-components>
    </div>
    <div class="article-detail">
      <div class="tag" style="margin-bottom: 30px">
        文章标签
        <el-select
          v-model="select_value"
          placeholder="选择一个标签"
          size="large"
          style="width: 240px; margin-left: 20px;"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>
      <div class="abstract" style="display: flex;">
        <span>
          文章摘要
        </span>
        <span>
          <el-input
            v-model="textarea"
            style="width: 500px;margin-left: 25px;"
            :rows="2"
            maxlength="200"
            type="textarea"
            show-word-limit
            placeholder="会在推荐、列表等场景外露，帮助读者快速了解内容"
          />
        </span>

      </div>
      <div class="submit" style="width: 100%;display: flex;justify-content: flex-end;">
        <el-button color="#F56C6C" :dark="isDark" size="large" style="color: white;" @click="saveArticle">发布博客</el-button>
      </div>
    </div>
  </div>

</template>

<script>
import CherryComponents from "@/components/Cherry/CherryComponents";
import axios from 'axios'

export default {
  name: "EditorIndex",
  components: {
    // CherryEditor
    CherryComponents
  },
  data() {
    return {
      select_value: '',
      options: [
        { value: 'op1', label: '综合' },
        { value: 'op2', label: '前端' },
        { value: 'op3', label: '后端' },
        { value: 'op4', label: '大数据' },
        { value: 'op5', label: '人工智能' },
        { value: 'op6', label: '算法' },
        { value: 'op7', label: '面试' },
        { value: 'op8', label: '职场经验' },
      ],
      textarea:'',
      articleForm: {
        title: '',
        content: '',
      },
      // 编辑模式
      editorModel: 'editOnly',
      // 自定义编辑器高度
      height: '520px'
    }
  },
  methods: {
    /**
     * 保存文章
     */
     saveArticle() {
      this.articleForm.content = this.$refs.cherryComponents.cherryInstance.getValue();
      axios.post('/api/blog/upload', this.articleForm)
        .then(response => {
          if (response && response.data) {
            this.$message.success('文章发布成功');
          } else {
            this.$message.error('文章发布失败');
          }
        })
        .catch(error => {
          console.error('文章发布失败', error);
          this.$message.error('文章发布失败');
        });
    }
  }
}
</script>

<style scoped>
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
}

.Editor {
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw; /* 全屏宽度 */
  height: 100vh; 
  position: relative;
  overflow:scroll;
  gap: 20px; /* 设置间隔 */
  background-color:#f0f0f0;
}


.article-editor {
  width: 90%; /* 设置宽度，根据需要调整 */
  min-height: 400px; /* 设置最小高度，根据需要调整 */
}
.article-detail{
  margin-bottom: 40px;
  padding: 30px;
  background-color: white;
  height:200px;
  width:60%;
}
.footer {
      position: relative;
      height:12vh;
      width: 90%;
      background-color:#eb1111;
      color: white;
      text-align: center;
      padding: 10px 0;
}
</style>
