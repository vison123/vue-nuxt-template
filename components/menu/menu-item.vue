<template>
  <li
    class="menu-item"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
    @click="handleClick"
  >
    <slot></slot>
  </li>
</template>

<script>
  export default {
    inject: ['rootMenu'],
    props: {
      link: String,
    },
    computed: {
      backgroundColor() {
        return this.rootMenu.backgroundColor || '';
      },
      hoverBackground() {
        return this.rootMenu.hoverBackground;
      },
      activeTextColor() {
        return this.rootMenu.activeTextColor || '';
      },
      textColor() {
        return this.rootMenu.textColor || '';
      },
    },
    methods: {
      onMouseEnter() {
        if (!this.rootMenu.backgroundColor) return;
        this.$el.style.backgroundColor = this.hoverBackground;
      },
      onMouseLeave() {
        if (!this.rootMenu.backgroundColor) return;
        this.$el.style.backgroundColor = this.backgroundColor;
      },
      handleClick() {
        if (!this.disabled) {
          this.$router.push(this.link)
        }
      }
    }
  }
</script>

<style>
  .menu-item {
    height: 60px;
    line-height: 60px;
    margin: 0;
    border-bottom: 2px solid transparent;
    color: #FFF;
    min-width: 120px;
    text-align: center;
  }

  .menu-item .is-active{
    border-bottom: 2px solid #ffd04b
  }
  .menu-item:hover {
    border-bottom: 2px solid #ffd04b;
    transition:width 2s;
  }
  .menu-item:after {
    background-color: #41b883;
    height: 10px;
  }
</style>
