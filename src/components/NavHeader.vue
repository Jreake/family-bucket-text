<template>
  <div class="header">
    <div class="nav-topbar">
      <div class="container">
        <div class="tapbar-menu">
          <a href="javascript:;">小米商城</a>
          <a href="javascript:;">MUI</a>
          <a href="javascript:;">云服务</a>
          <a href="javascript:;">协议规则</a>
        </div>
        <div class="tapbar-user">
          <a href="javascript:;" v-if="username">{{username}}</a>
          <a href="javascript:;" v-if="!username" @click="login">登录</a>
          <a href="javascript:;">我的订单</a>
          <a href="javascript:;"
             class="my-cart" @click="goToCart"><span class="icon-cart"></span> 购物车</a>
        </div>
      </div>
    </div>
    <div class="nav-header">
      <div class="container">
        <div class="header-logo">
          <a href="/#/index"></a>
        </div>
        <div class="header-menu">
          <div class="item-menu">
            <span>小米手机</span>
            <div class="children">
              <ul>
                <li class="product"
                    v-for="(item,index) in phoneList"
                    :key="index">
                  <a :href="'/#/product/'+item.id"
                     target="_blank">
                    <div class="pro-imgs">
                      <img :src="item.mainImage"
                           :alt="item.subtitle">
                    </div>
                    <div class="pro-name">{{item.name}}</div>
                    <div class="pro-price">{{item.price | currency}}元</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>RedMi红米</span>
            <div class="children"></div>
          </div>
          <div class="item-menu">
            <span>电视</span>
            <div class="children">
              <ul>
                <li class="product"
                    v-for="(item,index) in TVList"
                    :key="index">
                  <a :href="'/#/product/'+item.id"
                     target="_blank">
                    <div class="pro-imgs">
                      <img src="../../public/imgs/nav-img/nav-3-1.jpg"
                           :alt="item.subtitle">
                    </div>
                    <div class="pro-name">{{item.name}}</div>
                    <div class="pro-price">{{item.price}}元</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>

        </div>
        <div class="header-search">
          <div class="wrapper">
            <input type="text"
                   name="keyword"
                   id="">
            <a href="javascript:;"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'nav-header',
  data () {
    return {
      username: '',
      phoneList: [],
      TVList: [{
        id: '1',
        name: '小米壁挂电视',
        subtitle: '3200万+4800万 前后双摄像机',
        price: '6999',
        img: '../../public/imgs/nav-img/nav-3-1.jpg'
      }, {
        id: '2',
        name: '小米壁挂电视',
        subtitle: '3200万+4800万 前后双摄像机',
        price: '6999',
        img: '../../public/imgs/nav-img/nav-3-2.jpg'
      }, {
        id: '3',
        name: '小米壁挂电视',
        subtitle: '3200万+4800万 前后双摄像机',
        price: '6999',
        img: '../../public/imgs/nav-img/nav-3-3.png'
      }, {
        id: '4',
        name: '小米壁挂电视',
        subtitle: '3200万+4800万 前后双摄像机',
        price: '6999',
        img: '../../public/imgs/nav-img/nav-3-4.jpg'
      }, {
        id: '5',
        name: '小米壁挂电视',
        subtitle: '3200万+4800万 前后双摄像机',
        price: '6999',
        img: '../../public/imgs/nav-img/nav-3-5.jpg'
      }, {
        id: '6',
        name: '小米壁挂电视',
        subtitle: '3200万+4800万 前后双摄像机',
        price: '6999',
        img: '../../public/imgs/nav-img/nav-3-6.png'
      }]
    }
  },
  //局部过滤器
  filters: {
    currency (val) {
      if (!val) return '0.00'
      return '￥' + val.toFixed(2) + '元'
    }
  },
  mounted () {
    this.getProductList()
  },
  methods: {
    login(){
       this.$router.push('/login')
    },
    getProductList () {
      this.axios.get('/products', {
        params: {
          categoryId: '100012',
          pageSize: 6
        }
      }).then(res => {
        console.log(res)
        if (res.list.length >= 6) {
          this.phoneList = res.list.slice(0, 6)
        }
      })
    },
    goToCart(){
      this.$router.push('/cart')
    }
  }
}
</script>
<style lang="scss">
@import "../assets/scss/base.scss";
@import "../assets/scss/mixin.scss";
@import "../assets/scss/config.scss";
.header {
  .nav-topbar {
    height: 39px;
    line-height: 39px;
    background-color: #333333;
    color: #b0b0b0;
    .container {
      @include flex();
      a {
        display: inline-block;
        color: #b0b0b0;
        margin-right: 17px;
      }
      .my-cart {
        width: 110px;
        background-color: #ff6600;
        text-align: center;
        color: #ffffff;
        .icon-cart {
          @include bgImg(16px, 12px, "../../public/imgs/icon-cart-checked.png");
          margin-right: 4px;
        }
      }
    }
  }
  .nav-header {
    .container {
      position: relative;
      @include flex();
      height: 112px;
      .header-logo {
        display: inline-block; //定义块级元素
        width: 55px;
        height: 55px;
        background-color: #ff6600;
        a {
          display: inline-block;
          width: 110px;
          height: 55px;
          //  利用伪类设置两张图片
          &:before {
            @include bgImg(55px, 55px, "../../public/imgs/mi-logo.png", 55px);
            content: " ";
            transition: margin 0.4s;
          }
          &:after {
            @include bgImg(55px, 55px, "../../public/imgs/mi-home.png", 55px);
            content: " ";
          }
          &:hover:before {
            margin-left: -55px;
            transition: margin 0.4s; //过度的元素，在某一段时间内进行过度,这里只是控制margin值进行过度
          }
        }
      }
      .header-menu {
        display: inline-block;
        width: 643px;
        padding-left: 209px;
        .item-menu {
          display: inline-block;
          color: #333333;
          font-weight: bold;
          font-size: 16px;
          line-height: 112px;
          margin-right: 20px;
          span {
            cursor: pointer;
          }
          &:hover {
            color: $colorA;
            .children {
              height: 220px;
              opacity: 1;
            }
          }
          .children {
            position: absolute;
            top: 112px;
            height: 0;
            opacity: 0;
            overflow: hidden;
            left: 0;
            width: 1428px;
            border: 1px solid #e5e5e5;
            box-shadow: 0px 7px 6px 0px rgba(0, 0, 0, 0.11);
            z-index: 10;
            transition: all 0.4s;
            background: #ffffff;
            .product {
              position: relative;
              float: left;
              width: 16.6%;
              height: 220px;
              font-size: 12px;
              line-height: 12px;
              text-align: center;
              a {
                display: inline-block;
              }
              img {
                width: auto;
                height: 111px;
                margin-top: 26px;
              }
              .pro-img {
                height: 137px;
              }
              .pro-name {
                font-weight: bold;
                margin-top: 19px;
                margin-bottom: 8px;
                color: $colorB;
              }
              .pro-price {
                color: $colorA;
              }
              &:before {
                content: " ";
                position: absolute;
                top: 28px;
                right: 0;
                border-left: 1px solid $colorF;
                height: 100px;
                width: 1px;
              }
              &:last-child:before {
                display: none;
              }
            }
          }
        }
      }
      .header-search {
        width: 319px;
        .wrapper {
          height: 50px;
          border: 1px solid #e0e0e0;
          display: flex;
          align-items: center;
          input {
            //可以只有width的宽度，至于margin-left的宽度将不计算在内（和模型只包括width）
            box-sizing: border-box;
            border: none;
            border-right: 1px solid #e0e0e0;
            width: 264px;
            height: 50px;
            padding-left: 14px;
          }
          a {
            @include bgImg(18px, 18px, "../../public/imgs/icon-search.png");
            margin-left: 17px;
          }
        }
      }
    }
  }
}
</style>