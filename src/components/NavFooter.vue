<template>
  <div class="footer">
    <div class="footer-login">
      <div class="footer-logo">
        <img src="../../public/imgs/logo-footer.png"
             alt="">
        <p>小米商城</p>
      </div>
    </div>
    <div class="footer-link">
      <a href="https://youzan.github.io/vant/?source=vuejsorg#/zh-CN/"
         target="_blank">河畔一角主页</a><span>|</span>
      <a href="https://youzan.github.io/vant/?source=vuejsorg#/zh-CN/"
         target="_blank">Vue全栈课程</a><span>|</span>
      <a href="https://youzan.github.io/vant/?source=vuejsorg#/zh-CN/"
         target="_blank">React全家桶课程</a><span>|</span>
      <a href="https://youzan.github.io/vant/?source=vuejsorg#/zh-CN/"
         target="_blank">微信支付专项课程（H5+小程序+Node+Mongo）</a>
    </div>
    <div class="copyright">Copyright @2020 <span>mi.futurefe.com</span> All Rights Reserved.</div>
  </div>
</template>

<script>
export default {
  name: 'nav-footer',
  data () {
    return {

    }
  }
}
</script>
<style lang="scss" scoped>
@import "../assets/scss/base.scss";
@import "../assets/scss/mixin.scss";
@import "../assets/scss/config.scss";
.footer {
  height: 234px;
  border-top: 4px solid $colorA;
  background-color: $colorB;
  color: $colorD;
  font-size: $fontI;
  text-align: center;
  margin-bottom: 13px;
  .footer-logo {
    margin-top: 46px;
    margin-bottom: 31px;
    img {
      width: 53px;
      height: 36px;
      margin-bottom: 13px;
    }
  }
  .footer-link {
    a {
      color: $colorD;
      display: inline-block;
    }
    span {
      margin: 0 10px;
    }
  }
  .copyright {
    span {
      color: $colorA;
    }
  }
}
</style>