<template>
  <div class="index">
    <div class="container">
      <div class="swiper-box">
        <div class="nav-menu">
          <ul class="menu-wrap">
            <li class="menu-item">
              <a href="javascript:;">手机 电话卡</a>
              <div class="children">
                <ul v-for="(item,index) in menuList"
                    :key="index">
                  <li v-for="(sub ,subIndex) in item"
                      :key="subIndex">
                    <a :href="sub ? '/#/product/'+ sub.id: ''">
                      <img v-lazy="sub ? sub.img: '/imgs/item-box-1.png'">
                      {{sub ? sub.name :'小米9'}}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">电视 盒子</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">笔记本 平板</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">家电 插线板</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">出行 穿戴</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">智能 路由器</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">电源 配件</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">生活 箱包</a>
            </li>
          </ul>
        </div>
        <swiper :options="swiperOption">
          <swiper-slide v-for="(item,index) in slideList"
                        :key="index">
            <a :href="'/#/product/'+item.id">
              <img v-lazy="item.img">
            </a>
          </swiper-slide>
          <div class="swiper-pagination"
               slot="pagination"></div>
          <div class="swiper-button-prev"
               slot="button-prev"></div>
          <div class="swiper-button-next"
               slot="button-next"></div>
          <!-- <div class="swiper-scrollbar" slot="scrollbar"></div> -->
        </swiper>
      </div>
      <div class="ads-box">
        <a :href="'/#/product/'+ item.id"
           v-for="(item,addIndex) in adsList"
           :key="addIndex">
          <img v-lazy="item.img">
        </a>
      </div>
      <div class="banner">
        <a href="/#/product/30">
          <img v-lazy="'/imgs/banner-1.png'">
        </a>
      </div>
    </div>
    <div class="product-box">
      <div class="container">
        <h2>手机</h2>
        <div class="wrapper">
          <div class="banner-left">
            <a href="/#/product/35">
              <img v-lazy="'/imgs/mix-alpha.jpg'">
            </a>
          </div>
          <div class="list-box">
            <div class="list"
                 v-for="(arr,i) in phoneList"
                 :key="i">
              <div class="item"
                   v-for="(item,j) in arr"
                   :key="j">
                <span :class="{'new-pro': j%2 == 0}">新品</span>
                <div class="item-img">
                  <img v-lazy="item.mainImage">
                </div>
                <div class="item-info">
                  <h3>{{item.name}}</h3>
                  <p>{{item.subtitle}}</p>
                  <p class="price"
                     @click="addCart(item.id)">{{item.price|currency }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <service-bar></service-bar>
    <modal title="提示"
           sureText="查看购物车"
           btnType="1"
           modalType="middle"
           :showModal="showModal"
           @submit="goToCart"
           @cancel="showModal=false">
      <template v-slot:body>
        <p>商品添加成功</p>
      </template>
    </modal>
  </div>
</template>

<script>
import ServiceBar from '../components/ServiceBar'
import Modal from '../components/Modal'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
  name: 'index',
  components: {
    Swiper,
    SwiperSlide,
    ServiceBar,
    Modal
  },
  data () {
    return {
      swiperOption: {
        autoplay: true,
        loop: true,
        effect: 'cube',
        cubeEffect: {
          slideShadows: true,
          shadow: true,
          shadowOffset: 100,
          shadowScale: 0.6
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'

        }
      },
      slideList: [{
        id: '42',     //动态路由中的id是从后台获取的id
        img: '/imgs/slider/slide-1.jpg'
      }, {
        id: '45',
        img: '/imgs/slider/slide-2.jpg'
      }, {
        id: '46',
        img: '/imgs/slider/slide-3.jpg'
      }, {
        id: '',
        img: '/imgs/slider/slide-4.jpg'
      }, {
        id: '',
        img: '/imgs/slider/slide-5.jpg'
      }],
      menuList: [
        [
          { id: '30', img: '/imgs/item-box-1.png', name: '小米CC9' },
          { id: '31', img: '/imgs/item-box-2.png', name: '小米8青春版' },
          { id: '32', img: '/imgs/item-box-3.jpg', name: 'Redmi K20 Pro' },
          { id: '33', img: '/imgs/item-box-4.jpg', name: '移动4G专区' }
        ],
        [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]
      ],
      adsList: [
        { id: '33', img: '/imgs/ads/ads-1.png' },
        { id: '48', img: '/imgs/ads/ads-2.jpg' },
        { id: '45', img: '/imgs/ads/ads-3.png' },
        { id: '47', img: '/imgs/ads/ads-4.jpg' }
      ],
      phoneList: [],
      showModal: false
    }
  },
  filters: {
    currency (val) {
      if (!val) return '0.00'
      return '￥' + val.toFixed(2) + '元'
    }
  },
  mounted () {
    this.init();
  },
  methods: {
    init () {
      this.axios.get('/products', {
        params: {
          categoryId: 100012,
          pageSize: 14
        }
      }).then((res) => {
        // splice和slice的区别，slice不会改变原数组，splice 会改变原数组的对象
        res.list = res.list.slice(6, 14);
        this.phoneList = [res.list.slice(0, 4), res.list.slice(4, 8)]
      })
    },
    addCart (id) {
      this.showModal = true;
      console.log(id)
      // this.axios.post('/carts', {
      //   categoryId: id,
      //   selected: true
      // }).then((res) => {
      //   console.log(res);
      // }).catch(() => {
      //   this.showModal = true;
      // })
    },
    goToCart () {
      this.$router.push('/cart');
    }
  }
}
</script>
<style lang="scss">
@import "./../assets/scss/mixin.scss";
@import "./../assets/scss/config.scss";

.index {
  .swiper-box {
    .nav-menu {
      position: absolute;
      width: 264px;
      height: 451px;
      z-index: 9;
      padding: 25px 0;
      background-color: #55585a7a;
      box-sizing: border-box; //添加和模型可以不让padding不占据空间
      .menu-wrap {
        .menu-item {
          height: 50px;
          line-height: 50px;
          a {
            position: relative;
            font-size: $fontI;
            color: $colorG;
            padding-left: 30px;
            display: block;
            &:after {
              position: absolute;
              right: 30px;
              top: 17.5px;
              content: " ";
              @include bgImg(10px, 15px, "/imgs/icon-arrow.png");
            }
          }
          &:hover {
            background-color: $colorA;
            .children {
              display: block;
            }
          }
          .children {
            display: none;
            position: absolute;
            top: 0;
            left: 264px;
            width: 1164px;
            height: 451px;
            background-color: $colorG;
            border: 1px solid $colorH;
            ul {
              display: flex;
              justify-content: space-between;
              height: 75px;
              li {
                height: 75px;
                line-height: 75px;
                flex: 1;
                padding-left: 23px;
              }
              a {
                color: $colorB;
                font-size: 14px;
              }
              img {
                width: 42px;
                height: 35px;
                vertical-align: middle;
                margin-right: 15px;
              }
            }
          }
        }
      }
    }
    .swiper-container {
      height: 451px;
      .swiper-button-prev {
        left: 274px;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .ads-box {
    @include flex();
    margin-top: 14px;
    margin-bottom: 31px;
    a {
      width: 346px;
      height: 167px;
    }
  }
  .banner {
    margin-bottom: 50px;
  }
  .product-box {
    background-color: $colorJ;
    padding: 30px 0 50px;
    h2 {
      font-size: $fontF;
      height: 21px;
      line-height: 21px;
      color: $colorB;
      margin-bottom: 20px;
    }
    .wrapper {
      display: flex;
      .banner-left {
        margin-right: 16px;
        img {
          width: 224px;
          height: 619px;
        }
      }
    }
    .list-box {
      .list {
        @include flex();
        width: 1188px;
        margin-bottom: 14px;
        &:last-child {
          margin-bottom: 0;
        }
        .item {
          width: 287px;
          height: 302px;
          background-color: $colorG;
          text-align: center;
          span {
            display: inline-block;
            width: 67px;
            height: 24px;
            font-size: $fontJ;
            line-height: 24px;
          }
          .new-pro {
            background-color: #7ecf68;
            color: $colorG;
          }
          .kill-pro {
            background-color: #e82626;
            color: $colorG;
          }
          .item-img {
            img {
              height: 195px;
              width: 100%;
            }
          }
          .item-info {
            h3 {
              font-size: $fontJ;
              color: $colorB;
              line-height: $fontJ;
              font-weight: bold;
            }
            p {
              color: $colorD;
              line-height: 13px;
              margin: 6px auto 13px;
            }
            .price {
              color: #f20a0a;
              font-size: $fontJ;
              font-weight: bold;
              cursor: pointer;
              &:after {
                @include bgImg(22px, 22px, "/imgs/icon-cart-hover.png");
                content: " ";
                margin-left: 5px;
                vertical-align: middle;
              }
            }
          }
        }
      }
    }
  }
}
</style>