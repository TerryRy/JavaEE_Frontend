<template>
  <div
      id="markdown-container"
      :style="{height:height}"
  ></div>
</template>

<script>
import Cherry from "cherry-markdown";
import "cherry-markdown/dist/cherry-markdown.min.css";

export default {
  name: 'CherryComponents',
  props: {
    height: {
      type: String,
      default: 'calc(100vh - 100px)'
    },
    editorModel: {
      type: String,
      default: 'editOnly'
    }
  },
  data() {
    return {
      cherryInstance: null,
      content: ''
    }
  },
  mounted() {
    // alert("mounted");
    // console.log("mounted");
    this.initMarkDown();
  },
  methods: {
    /**
     *
     *   defaultModel 编辑器初始化后的默认模式，一共有三种模式：1、双栏编辑预览模式；2、纯编辑模式；3、预览模式
     *   edit&preview: 双栏编辑预览模式
     *   editOnly: 纯编辑模式（没有预览，可通过toolbar切换成双栏或预览模式）
     *   previewOnly: 预览模式（没有编辑框，toolbar只显示“返回编辑”按钮，可通过toolbar切换成编辑模式）
     */
    initMarkDown() {
      // alert("InitMarkDown");
      this.cherryInstance = new Cherry({
        id: 'markdown-container',
        value: this.content,
        emoji: {useUnicode: true},
        editor: {defaultModel: this.editorModel},
        toolbars: {theme: 'light '}
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#markdown-container {
  text-align: left;
  height:800px;
}
</style>
