<template>
  <div class="footer">
    <div class="footer1">
      footer1
    </div>
    <div class="footer2">
      Copyright © 2013-2018
    </div>
    <div class="footer3">
      footer3
    </div>
  </div>
</template>

<style>
  .footer {
    height: 200px;
    width: 100%;
    padding: 40px;
    background-color: #cac0dd;
    box-shadow: 0px -4px 24px 2px rgba(0, 0, 0, 0.15);
    display: flex;
    align-items: center;
  }

  .footer1 {
    background-color: #41b883;
    flex: 1;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .footer2 {
    background-color: #efc14e;
    flex: 2;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .footer3 {
    background-color: #9575cd;
    flex: 1;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 640px) {
    .footer1 {
      display: none;
    }

    .footer2 {
      background-color: #efc14e;
      flex: 2;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .footer3 {
      display: none;
    }

  }


</style>


