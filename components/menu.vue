<template>
  <div class="menu__container">
    <div class="menu">
      <a href="javascript:;">Home</a>
      <a href="javascript:;">About</a>
      <a href="javascript:;">Contact</a>
      <a href="javascript:;">Faq</a>
    </div>
  </div>
</template>

<style>
  .menu__container {
    width: 100%;
    height: 60px;
    box-shadow: 0 10px 40px rgba(0,0,0,0.1);
    background-image: linear-gradient(to top, #a7a6cb 0%, #8989ba 52%, #8989ba 100%);
    -webkit-transform-origin: center center 0px;
    transform-origin: center center 0px;
    transition: all 0.5s ease-out;
  }
  .menu__container .menu {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    max-width: 100%;
    height: 100%;
  }
  .menu__container .menu a {
    text-decoration: none;
    color: #fff;
    font-size: 17px;
    margin: 15px;
  }
  .menu__container .menu a:hover {
    -webkit-transform: scale(1.1, 1.1);
    transform: scale(1.1, 1.1);
  }

  .menu__container .menu a:after {
    background-color: #41b883;
  }
</style>
