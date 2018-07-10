<template>
  <nav class="menu" @click="handleClick">
    <ol>
      <slot></slot>
      <li class="menu-item"><a href="/">首页</a></li>
      <li class="menu-item"><a href="/about">关于我们</a></li>
      <li
        class="menu-item"
        @mouseenter="onMouseEnter1"
        @mouseleave="onMouseLeave1"
      >
        <a href="3">Widgets
          <svg version="1.1" class="plus-icon" xmlns="http://www.w3.org/2000/svg"
               xmlns:xlink="http://www.w3.org/1999/xlink"
               viewBox="0 0 18 18">
            <line fill="none" stroke-width="4" stroke-linecap="round" stroke-miterlimit="10" x1="10" y1="9" x2="17"
                  y2="9"/>
            <line fill="none" stroke-width="4" stroke-linecap="round" stroke-miterlimit="10" x1="9" y1="9" x2="9"
                  y2="1"/>
            <g id="lineGroup_1">
              <line fill="none" stroke-width="4" stroke-linecap="round" stroke-miterlimit="10" x1="1" y1="9" x2="8"
                    y2="9"/>
              <line fill="none" stroke-width="4" stroke-linecap="round" stroke-miterlimit="10" x1="9" y1="17" x2="9"
                    y2="9"/>
            </g>
          </svg>
        </a>
        <ol class="sub-menu">
          <li class="sub-menu-item"><a href="3-1">Widget1</a></li>
          <li class="sub-menu-item"><a href="3-2">Widget2</a></li>
          <li class="sub-menu-item"><a href="3-3">Widget3</a></li>
        </ol>
      </li>
      <li
        class="menu-item"
        @mouseenter="onMouseEnter2"
        @mouseleave="onMouseLeave2"
        @click="handleClick"
      >
        <a href="4">Kabobs
          <svg version="1.1" class="plus-icon" xmlns="http://www.w3.org/2000/svg"
               xmlns:xlink="http://www.w3.org/1999/xlink"
               viewBox="0 0 18 18">
            <line fill="none" stroke-width="4" stroke-linecap="round" stroke-miterlimit="10" x1="10" y1="9" x2="17"
                  y2="9"/>
            <line fill="none" stroke-width="4" stroke-linecap="round" stroke-miterlimit="10" x1="9" y1="9" x2="9"
                  y2="1"/>
            <g id="lineGroup_2">
              <line fill="none" stroke-width="4" stroke-linecap="round" stroke-miterlimit="10" x1="1" y1="9" x2="8"
                    y2="9"/>
              <line fill="none" stroke-width="4" stroke-linecap="round" stroke-miterlimit="10" x1="9" y1="17" x2="9"
                    y2="9"/>
            </g>
          </svg>
        </a>
        <ol class="sub-menu">
          <li class="sub-menu-item"><a href="4-1">Shishkabobs</a></li>
          <li class="sub-menu-item"><a href="4-2">BBQ kabobs</a></li>
          <li class="sub-menu-item"><a href="4-3">放任自我</a></li>
        </ol>
      </li>
      <li class="menu-item"><a href="5">Contact</a></li>
      <li class="menu-item"><a href="6">Contact1</a></li>
      <li class="menu-item"><a href="7">Contact2</a></li>
      <li class="menu-item"><a href="8">Contact3</a></li>
    </ol>
  </nav>
</template>

<script>
  export default {
    provide() {
      return {
        rootMenu: this
      };
    },
    mounted(){
      console.log(this.$route.path)
      // 渲染动画
//      let tl = new TimelineLite()
//      let links = document.querySelectorAll('.menu-item')
//      tl.staggerFromTo(links,0.4,{autoAlpha:0},{autoAlpha:1,ease:Sine.easeInOut},0.2)
    },
    methods:{
      onMouseEnter1() {
        let pIcon = document.querySelectorAll('.plus-icon');
        TweenMax.to(pIcon[0],0.15,{rotation:-45,ease:Power1.easeIn})
        TweenMax.to('#lineGroup_1',0.20,{attr:{'stroke-dashoffset':'8','stroke-dasharray' :'8'},ease:Power1.easeIn})
      },
      onMouseLeave1() {
        let pIcon = document.querySelectorAll('.plus-icon');
        TweenMax.to(pIcon[0],0.15,{rotation:0,ease:Power1.easeIn})
        TweenMax.to('#lineGroup_1',0.20,{attr:{'stroke-dashoffset':'0','stroke-dasharray' :'0'},ease:Power1.easeIn})
      },
      onMouseEnter2() {
        let pIcon = document.querySelectorAll('.plus-icon');
        TweenMax.to(pIcon[1],0.15,{rotation:-45,ease:Power1.easeIn})
        TweenMax.to('#lineGroup_2',0.20,{attr:{'stroke-dashoffset':'8','stroke-dasharray' :'8'},ease:Power1.easeIn})
      },
      onMouseLeave2() {
        let pIcon = document.querySelectorAll('.plus-icon');
        TweenMax.to(pIcon[1],0.15,{rotation:0,ease:Power1.easeIn})
        TweenMax.to('#lineGroup_2',0.20,{attr:{'stroke-dashoffset':'0','stroke-dasharray' :'0'},ease:Power1.easeIn})
      },
      handleClick() {
        let menuToggle = document.querySelector(".menu")
        menuToggle.classList.toggle('open')
      }
    }
  }
</script>

<style>
  @import url("https://fonts.googleapis.com/css?family=Roboto:400,400i,700");
  .menu {
    font-family:Roboto;
    background: #FFF;
    margin: auto;
    text-align: center;
    padding: 15px;
    box-shadow: 0px -4px 24px 2px rgba(0, 0, 0, 0.15);
  }

  .menu a {
    font-weight: 700;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 3px;
    position: relative;
    color: #9575CD;
    padding: 10px 0px;
    font-family:Roboto;
  }

  .menu ol {
    padding-left: 0px;
  }

  .menu-item {
    list-style-type: none;
    display: inline;
    position: relative;
    margin: 15px;
  }

  .menu-item-active {
    list-style-type: none;
    display: inline;
    position: relative;
    margin: 15px;
  }

  .menu-item-active:before {
    position: absolute;
    content: "";
    border-bottom: 3px solid #9575CD;
    overflow: hidden;
    top: 50px;
    width: 100%;
    left: 0%;
    transition: 0.2s ease-in-out;
  }

  .menu-item:before {
    position: absolute;
    content: "";
    border-bottom: 3px solid #9575CD;
    overflow: hidden;
    width: 0%;
    left: 50%;
    top: 50px;
    transition: 0.2s ease-in-out 0.15s;
  }

  .menu-item:hover:before {
    width: 100%;
    left: 0%;
    transition: 0.2s ease-in-out;
  }

  .sub-menu {
    position: absolute;
    left: 0%;
    background: #FFF;
    top: 53px;
    padding: 0;
    text-align: left;
    box-shadow: 0px 4px 20px -5px rgba(0, 0, 0, 0.15);
    max-height: 0;
    max-width: 200px;
    opacity: 0;
    transition: 0.45s ease all 0.1s;
    z-index: 10;
  }
  .sub-menu .menu-item {
    display: block;
  }

  .menu-item:nth-child(n+3):nth-child(-n+4) .plus-icon {
    width: 10px;
    height: 10px;
    stroke: #9575CD;
    margin-bottom: 1px;
  }
  .menu-item:nth-child(n+3):nth-child(-n+4) .sub-menu-item {
    list-style-type: none;
    display: block;
    padding: 15px;
    position: relative;
    transform: translateY(-10px);
    opacity: 0;
    transition: 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) all 0.1s;
    visibility: hidden;
  }
  .menu-item:nth-child(n+3):nth-child(-n+4):hover .sub-menu {
    max-height: 300px;
    max-width: 500px;
    opacity: 1;
  }
  .menu-item:nth-child(n+3):nth-child(-n+4):hover .sub-menu-item a {
    transition: 0.15s ease all;
  }
  .menu-item:nth-child(n+3):nth-child(-n+4):hover .sub-menu-item:hover {
    background-color: #A18EC3;
  }
  .menu-item:nth-child(n+3):nth-child(-n+4):hover .sub-menu-item:hover a {
    color: #FFF;
  }
  .menu-item:nth-child(n+3):nth-child(-n+4):hover .sub-menu-item {
    transform: translateY(0px);
    opacity: 1;
    visibility: visible;
  }

  @media screen and (max-width: 640px) {
    .menu:before {
      content: "";
      position: absolute;
      width: 26px;
      height: 4px;
      background-color: #9575CD;
      top: 22px;
      left: 15px;
      transition: 0.15s ease all;
    }
    .menu:after {
      content: "";
      position: absolute;
      width: 26px;
      height: 4px;
      background-color: #9575CD;
      transform: rotate(90deg);
      left: 15px;
      top: 22px;
      transition: 0.15s ease all;
    }
    .menu.open:after {
      width: 16px;
      left: 24px;
      transform: rotate(-45deg);
    }
    .menu.open:before {
      width: 16px;
      left: 15px;
      transform: rotate(45deg);
    }
    .menu.open .menu-item {
      display: block;
    }
    .menu.open .menu-item a:hover {
      color: #7850bf;
    }
    .menu.open .menu-item a:hover .plus-icon {
      stroke: #7850bf;
    }
    .menu.open .menu-item:nth-child(3):hover .sub-menu-item {
      margin: 10px auto;
    }
    .menu.open .menu-item:nth-child(4):hover .sub-menu-item {
      margin: 10px auto;
    }

    .menu-item {
      display: none;
      text-align: center;
      margin: 15px auto;
    }

    .menu-item:before {
      width: 0%;
      display: none;
    }

    .sub-menu {
      position: relative;
      box-shadow: none;
      top: 0;
      text-align: center;
      max-height: 0;
      opacity: 0;
      transition: 0.2s ease all;
      z-index: 0;
      margin: auto;
    }

    .menu-item:nth-child(n+3):nth-child(-n+4):hover .sub-menu-item:nth-child(n+1) {
      transition-delay: 0s;
    }
    .menu-item:nth-child(n+3):nth-child(-n+4) .sub-menu-item {
      margin: 0px;
      font-size: 12px;
    }
    .menu-item:nth-child(n+3):nth-child(-n+4) .sub-menu-item:nth-child(n+1) {
      transition-delay: 0s;
    }
  }
</style>
