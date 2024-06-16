<template>
    <div id="markdown"></div>
</template>
  
<script>
  import { onMounted} from 'vue';
  import Cherry from 'cherry-markdown';
  import 'cherry-markdown/dist/cherry-markdown.css';
  

  function myFileUpload(file, callback) {
    putFile(file, function(err, url, file) {
        if (err) {
            console.error('文件上传失败:', err);
        } else {
            if (/video/i.test(file.type)) {
                callback(url, {
                    name: '视频',
                    poster: `${url}?poster=true`,
                    isBorder: true,
                    isShadow: true,
                    isRadius: true,
                });
            } else if (/image/i.test(file.type)) {
                callback(url, {
                    name: '图片',
                    isBorder: true,
                    isShadow: true,
                    isRadius: true,
                    width: '60%',
                    height: 'auto',
                });
            } else {
                callback(url);
            }
        }
    });
}

function putFile(file, callback) {
    // setTimeout(() => {
    //     const url = 'https://example.com/uploaded/' + file.name;
    //     callback(null, url, file);
    // }, 1000);
    console.log(file);
    console.log(callback);
}

export default {
    name: 'CherryEditor',
    setup() {
      alert("CherryEditorInit");
      onMounted(() => {
        const config = {
          id: 'markdown',
          value: '',
          fileUpload: myFileUpload,  // 配置文件上传函数
          callback: {
            afterChange: function(/*md, html*/) {
              console.log('change');
            }
          },
        };
  
        const cherry = new Cherry(config);
        cherry.setValue(`# 创作灵感 #：\n记录工作实践、项目复盘\n写技术笔记巩固知识\n发表感悟心得\n搬运自己的原创文章`);
      });
    },
  };
  </script>
  
  <style scoped>
  html {
    height: 100%;
  }
  body {
    height: 100%;
    overflow: hidden;
    margin: 0;
  }
  #markdown {
    min-width: 800px;
    max-width: 2600px;
    min-height: 90%;
    width: 90%;
    margin: 0 auto;
  }
  </style>

