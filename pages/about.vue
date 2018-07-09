<template>
  <div class="container">
    <app-logo></app-logo>
    <div>
      <h1 class="title">
        关于
      </h1>
    </div>
  </div>
</template>

<script>
  import AppLogo from '~/components/AppLogo.vue'

  export default {
    components: {
      AppLogo,
    },
    data () {
      return {
        title: '关于'
      }
    },
    asyncData (context) {
      // 最重要的一个键, 支持 异步数据处理，另外该方法的第一个参数为当前页面组件的 上下文对象。
      // asyncData方法会在组件（限于页面组件）每次加载之前被调用
      return { name: 'World' }
    },
    fetch () {
      // 用于在渲染页面之前获取数据填充应用的状态树（store）。不同的是 fetch 方法不会设置组件的数据
      // The fetch method is used to fill the store before rendering the page
    },
    head () {
      // 配置当前页面的 Meta 标签
      return {
        title: this.title,
        meta: [
          { hid: 'description', name: 'description', content: 'My custom description' }
        ]
      }
    },
    // 指定页面加载的layout，默认为default
    // 指定页面切换的过渡动效
    transition: '',
    //  用于判定渲染页面前是否需要将当前页面滚动至顶部。这个配置用于 嵌套路由的应用场景。
    scrollToTop: false,
    // 动态路由校验，如果校验方法返回的值不为 true， Nuxt.js 将自动加载显示 404 错误页面
    validate ({ params }) {
      return true
      // return /^\d+$/.test(params.id)
    },
    // 指定页面的中间件，中间件会在页面渲染之前被调用
    middleware: ''
  }
</script>

<style>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .title {
    font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
  }

  .subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }

  .links {
    padding-top: 15px;
  }
</style>
