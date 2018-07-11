<template>
  <nav class="menu" @click="handleClick">
    <svg t="1531215919090" class="icon" style="" viewBox="0 0 4371 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3667" width="128" height="30">
      <defs>
        <style type="text/css"></style>
      </defs>
      <path
        d="M1605.757111 0 1514.658213 94.734437 1205.517989 94.734437 1081.410834 218.286579 1395.770514 218.286579 1142.675048 481.317696 1270.229623 590.548409 1580.610267 591.009366 1580.610267 739.437246 1110.085645 739.437246 1099.066785 728.930624 963.248066 590.882205 970.352331 590.882205 1075.691983 481.587911 106.54786 481.587911 0 590.882205 269.027707 590.882205 269.027707 996.825624 527.48762 996.825624 527.48762 590.882205 651.997508 590.882205 904.335832 851.560856 1007.532926 851.560856 1184.221303 851.560856 1580.610267 851.560856 1580.610267 1001.244445 1818.611182 1001.244445 1818.611182 851.560856 2172.036279 851.560856 2275.555547 739.437246 1818.611182 739.437246 1818.611182 591.37495 2142.411008 591.804118 2251.085312 481.587911 1818.611182 481.587911 1818.611182 295.584157 1605.273838 295.584157 1679.377262 218.286579 2128.234697 218.286579 2250.63424 94.734437 1797.910546 94.734437 1888.687269 0 1605.757111 0ZM1580.610267 321.508968 1580.610267 481.587911 1426.910062 481.587911 1580.610267 321.508968ZM261.688889 0 261.688889 432.355555 520.429729 432.355555 520.429729 212.80209 1005.705882 212.80209 1126.4 90.458986 520.429729 90.458986 520.429729 0 261.688889 0ZM2560.446775 0 2560.446775 100.961337 2300.956946 100.961337 2184.369499 226.78665 2939.531026 226.78665 2510.919387 701.678866 2440.470528 640.150241 2119.68 1001.244445 2404.577883 1001.244445 2509.9648 891.137179 2642.414391 998.50876 3145.213714 998.50876 3257.457774 878.867067 2709.983561 878.867067 2680.152576 854.262091 3181.392731 301.556639 3181.392731 226.78665 3181.392731 124.303689 3181.392731 100.961337 2820.509367 100.961337 2820.509367 0 2560.446775 0ZM3672.679973 0 3672.679973 99.926914 3224.214473 99.926914 3224.214473 110.463426 3224.214473 224.600872 3224.214473 316.241006 3367.137006 316.241006 3367.137006 369.66808 3505.651749 369.66808 3368.364087 505.720174 3315.954853 505.720174 3218.773339 602.070177 3445.718583 602.070177 3364.69899 689.048998 3315.954853 689.048998 3218.773339 788.894987 3443.296713 788.894987 3355.124535 875.517734 3315.954853 875.517734 3218.773339 984.281723 3235.225893 984.281723 3456.390949 984.281723 3471.858615 984.281723 3678.734647 783.052158 3678.734647 921.548208 3577.629696 1024 3669.579977 1024 3761.078181 1024 3838.416512 1024 3915.012151 942.669786 3915.012151 803.591073 4076.631534 973.923248 4356.551113 973.923248 4052.299813 652.146931 4275.757568 426.251249 4092.470546 426.251249 3915.012151 613.124613 3915.012151 369.66808 4184.985929 369.66808 4184.985929 316.241006 4330.394935 316.241006 4330.394935 224.600872 4330.394935 110.463426 4330.394935 99.926914 3917.014235 99.926914 3917.014235 0 3672.679973 0ZM3462.122697 224.600872 4092.438254 224.600872 4092.438254 287.480053 3462.122697 287.480053 3462.122697 224.600872ZM3678.734647 380.512108 3678.734647 503.130556 3554.331319 503.130556 3678.734647 380.512108ZM3678.734647 541.262693 3678.734647 689.048998 3537.039177 689.048998 3678.734647 541.262693Z"
        p-id="3668"
        fill="#9575CD"
      >
      </path>
    </svg>
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
    padding-left: 40px;
  }

  .menu .icon {
    position: absolute;
    top: 27px;
    left: 60px;
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
    .menu .icon {
      display: none;
    }
  }
</style>
