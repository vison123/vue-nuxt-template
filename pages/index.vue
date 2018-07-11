<template xmlns:v-swiper="http://www.w3.org/1999/xhtml">
  <div v-swiper:mySwiper="swiperOption">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <img src="../static/image/bg-1.png">
      </div>
      <div class="swiper-slide">
        <img src="../static/image/bg-2.png">
      </div>
      <div class="swiper-slide">
        <img src="../static/image/bg-3.png">
      </div>
    </div>
    <div class="swiper-pagination swiper-pagination-bullets"></div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        title: '首页',
        swiperOption: {
          loop: true,
          slidesPerView: 'auto',
          centeredSlides: true,
          pagination: {
            el: '.swiper-pagination',
            dynamicBullets: true
          },
          on: {
            slideChange() {
              console.log('onSlideChangeEnd', this);
            },
            tap() {
              console.log('onTap', this);
            }
          }
        }
      }
    },
    mounted() {
      console.log('app init', this)
      setTimeout(() => {
        this.banners.push('/5.jpg')
        console.log('banners update')
      }, 3000)
      console.log(
        'This is current swiper instance object', this.mySwiper,
        'I will slideTo banners 3')
      this.mySwiper.slideTo(3)
    },
    components: {
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
          { hid: 'home' , name: 'description', content: 'My custom description' }
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
  .my-swiper {
    height: 300px;
    width: 100%;
  }
  .my-swiper .swiper-slide {
    text-align: center;
    font-size: 38px;
    font-weight: 700;
    background-color: #eee;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .my-swiper .swiper-pagination > .swiper-pagination-bullet {
    background-color: red;
  }
</style>
