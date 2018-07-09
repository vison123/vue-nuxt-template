<template>
  <div>
    <header>
      <app-menu
        background-color="#484848"
        bottom-color="#ffd04b"
        text-color="#ffffff"
        active-text-color="#ffd04b"
      >
        <menu-item link="/">首页</menu-item>
        <menu-item link="/about">关于金诚</menu-item>
        <menu-item link="/town">特色小镇</menu-item>
        <menu-item link="/wealth">金诚财富</menu-item>
        <menu-item link="/biz">金诚业务</menu-item>
        <menu-item link="/news">新闻中心</menu-item>
        <menu-item link="/bidding">招采信息</menu-item>
        <menu-item link="/joinus">加入金诚</menu-item>
        <menu-item link="/contract">联系我们</menu-item>
      </app-menu>
    </header>
    <main class="main-content">
      <nuxt/>
    </main>
    <footer>
      <foot-view></foot-view>
    </footer>
  </div>
</template>

<script>
  import AppMenu from '~/components/menu/menu.vue'
  import MenuItem from '~/components/menu/menu-item.vue'
  import FootView from '~/components/footer/footer.vue'

  export default {
    components: {
      AppMenu,
      MenuItem,
      FootView
    }
  }
</script>

<style>
  .main-content{
    height: 100%;
    min-height: 750px;
    width: 100%;
  }
</style>
