<template>
  <div id="markdown-container" :style="{ height: height }"></div>
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
    },
    content: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      cherryInstance: null,
    }
  },
  watch: {
    content(newContent) {
      alert(newContent);
      if (this.cherryInstance && this.cherryInstance.getValue() !== newContent) {
        this.cherryInstance.setValue(newContent);
      }
    }
  },
  mounted() {
    this.initMarkDown();
  },
  methods: {
    initMarkDown() {
      this.cherryInstance = new Cherry({
        id: 'markdown-container',
        value: this.content,
        emoji: { useUnicode: true },
        editor: { defaultModel: this.editorModel },
        toolbars: { theme: 'light ' }
      });
    }
  }
}
</script>
