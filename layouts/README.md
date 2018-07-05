# LAYOUTS 布局

layout中文件相当于为pages中界面指定渲染模版：

* default.vue 默认布局，pages中界面默认使用该布局;
* 通过编辑 layouts/error.vue 文件来定制化错误页面，这个布局文件不需要包含 <nuxt/> 标签;
* layout文件夹下可任意自定义布局，布局文件里面增加 <nuxt/> 组件用于显示页面内容;
* pages下界面修改layout方法为：

```
  // 指定布局文件为 layout/post.vue
  <script>
    export default {
      layout: 'post'
    }
  </script>
```

