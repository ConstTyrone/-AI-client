<template>
  <div>
    <div id="fullpage">
      <div class="section waitpage">
        <div class="item1 item"></div>
        <div class="item2 item">
          <p class="item_p">
            <span class="leftfz">
              <!-- <span class="span_zh">熠</span><span class="span_en">AI</span> -->
              <img src="./img/logo1.png" alt="" />
            </span>
            <span class="line"></span>
            <span class="ss_txt ss_txt1"
              >操作简便，一键生成并预览你所需要的网站
            </span>
            <span class="ss_txt ss_txt2 dn"> 鼠标悬停在此处以显示更多信息</span>
          </p>
        </div>
        <div class="item3 item"></div>
        <div class="waitpage_right">
          <div class="posa_top">
            <span class="arrow_span"></span>
            <span class="arrow_span_txt">登陆您的账号</span>
          </div>
          <div class="main_center">
            <div class="title">
              <img src="./img/logo.png" alt="" />
              <span>是什么?</span>
            </div>
            <p class="sub_title">WHAT IS YI AI</p>
            <div class="line_l"></div>
            <p class="p_desc">
              熠AI旨在通过大模型与AI生成技<br />术，极大幅度地缩减少个人定制网页所<br />需的时间并为每一位用户量身定做AI生<br />成的网页，仅用数个关键词和一连串语<br />句就能生成高度客制化的网页及代码，<br />让初学者也能轻松搭建属于自己的网<br />站！
            </p>
            <p class="p_desc">
              向上滚动鼠标滚轮或点击对应区域<br />登录并绑定您的账号
            </p>
            <p class="p_desc">
              向下滚动鼠标滚轮或点击对应区域<br />立刻尝试生成并查看您的网页
            </p>
          </div>
          <div class="posa_bottom">
            <span class="arrow_span"></span>
            <span class="arrow_span_txt">输入您的prompt</span>
          </div>
        </div>
      </div>
      <div class="section">
        <div id="login">
          <el-row>
            <el-col :span="8" :offset="8">
              <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="用户名">
                  <el-input  v-model="form.username" @input="change($event)"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                  <el-input v-model="form.password" @input="change($event)"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button @click="onSubmit">登录</el-button>
                  <el-button @click="reset">重置</el-button>
                </el-form-item>
              </el-form>
            </el-col>
          </el-row>
        </div>
      </div>
      <div class="section" id="section3">
        <input class="input" type="text" v-model="prompt" placeholder="请输入prompt">
        <button class="login-button" @click="sendMsg">数据传输</button>
      </div>
    </div>
  </div>
</template>

<script>
import PubSub from 'pubsub-js';
import $ from "jquery";
import fullpage from "fullpage.js";
export default {
  name:'index',
  data() {
    return {
      prompt: '',
      form: {
        username: "xiaohao",
        password: "123456",
        
      },
    };
  },
  mounted() {
    this.init();
    this.changetxt();
  },
  methods: {
    // sendMsg() {
    //   console.log(this.prompt);
    //   PubSub.publish('userEvent', this.prompt) // 发布消息
    //   this.$router.push({
    //     path: '/SeriousMod'
    //   })
    // },
    change(e) {
      this.$forceUpdate();
      console.log(e);
    },
    onSubmit() {
      console.log("submit!");
      this.$router.push('/home').then(() => {
        console.log(this.$router);
      });
    },
    init() {
      var myFullpage = fullpage("#fullpage", {});
      $(".item2").mousemove(function (event) {
        $(".waitpage_right").css({
          width: "300px",
        });
        $(".posa_top").css({
          width: "350px",
        });
        $(".posa_bottom").css({
          width: "350px",
        });
        $(".arrow_span").css({
          right: "350px",
        });
        // }
      });
      $(".item1").mousemove(function (event) {
        $(".waitpage_right").css({
          width: "0px",
        });
        $(".posa_top").css({
          width: "0",
        });
        $(".posa_bottom").css({
          width: "0",
        });
        $(".arrow_span").css({
          right: "-30px",
        });
      });
      $(".item3").mousemove(function (event) {
        $(".waitpage_right").css({
          width: "0px",
        });
        $(".posa_top").css({
          width: "0",
        });
        $(".posa_bottom").css({
          width: "0",
        });
        $(".arrow_span").css({
          right: "-30px",
        });
      });
      $(".waitpage").click(function (e) {
        var x = e.pageX;
        var y = e.pageY;
        console.log(x, y);
        let w = $(window).width();
        let h = $(window).height();
        if (y < h * 0.33) {
          myFullpage.moveTo(2);
        }
        if (y > (h * 2) / 3) {
          myFullpage.moveTo(3);
        }
      });
    },
    reset() {
      this.form.username = "";
      this.form.password = "";
    },
    changetxt() {
      let that = this;
      let i = 0;
      setInterval(() => {
        i++;
        that.$nextTick(() => {
          if (i % 2 == 0) {
            $(".ss_txt1").fadeOut(1000, function () {
              $(".ss_txt2").fadeIn();
            });
          } else {
            // $(".ss_txt").text("操作简便，一键生成并预览你所需要的网站");
            $(".ss_txt2").fadeOut(1000, function () {
              $(".ss_txt1").fadeIn();
            });
          }
        });
      }, 5000);
    },
  },
};
</script>

<style scoped>
 .input{
    background-color: #212121;
    max-width: 190px;
    height: 40px;
    padding: 10px;
    /* text-align: center; */
    border: 2px solid white;
    border-radius: 5px;
  }
  .input:focus {
    color: rgb(0, 255, 255);
    background-color: #212121;
    outline-color: rgb(0, 255, 255);
    box-shadow: -3px -3px 15px rgb(0, 255, 255);
    transition: .1s;
    transition-property: box-shadow;
  }
  .prompt{
    position:absolute;
    left:100px;
    top:50%;
    /* justify-content: center;
    align-items: center;
     */
  }

html.fp-enabled,
.fp-enabled body {
  margin: 0;
  padding: 0;
  overflow: hidden;

  /*Avoid flicker on slides transitions for mobile phones #336 */
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
.fp-section {
  position: relative;
  -webkit-box-sizing: border-box; /* Safari<=5 Android<=3 */
  -moz-box-sizing: border-box; /* <=28 */
  box-sizing: border-box;
  height: 100%;
  display: block;
}
.fp-slide {
  float: left;
}
.fp-slide,
.fp-slidesContainer {
  height: 100%;
  display: block;
}
.fp-slides {
  z-index: 1;
  height: 100%;
  overflow: hidden;
  position: relative;
  -webkit-transition: all 0.3s ease-out; /* Safari<=6 Android<=4.3 */
  transition: all 0.3s ease-out;
}
.fp-table {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
}
.fp-slidesContainer {
  float: left;
  position: relative;
}
.fp-controlArrow {
  -webkit-user-select: none; /* webkit (safari, chrome) browsers */
  -moz-user-select: none; /* mozilla browsers */
  -khtml-user-select: none; /* webkit (konqueror) browsers */
  -ms-user-select: none; /* IE10+ */
  position: absolute;
  z-index: 4;
  top: 50%;
  cursor: pointer;
  margin-top: -38px;
  -webkit-transform: translate3d(0, 0, 0);
  -ms-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}
.fp-prev {
  left: 15px;
}
.fp-next {
  right: 15px;
}
.fp-arrow {
  width: 0;
  height: 0;
  border-style: solid;
}
.fp-arrow.fp-prev {
  border-width: 38.5px 34px 38.5px 0;
  border-color: transparent #fff transparent transparent;
}
.fp-arrow.fp-next {
  border-width: 38.5px 0 38.5px 34px;
  border-color: transparent transparent transparent #fff;
}
.fp-notransition {
  -webkit-transition: none !important;
  transition: none !important;
}
#fp-nav {
  position: fixed;
  z-index: 100;
  top: 50%;
  opacity: 1;
  transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  -webkit-transform: translate3d(0, -50%, 0);
}
#fp-nav.fp-right {
  right: 17px;
}
#fp-nav.fp-left {
  left: 17px;
}
.fp-slidesNav {
  position: absolute;
  z-index: 4;
  opacity: 1;
  -webkit-transform: translate3d(0, 0, 0);
  -ms-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
  left: 0 !important;
  right: 0;
  margin: 0 auto !important;
}
.fp-slidesNav.fp-bottom {
  bottom: 17px;
}
.fp-slidesNav.fp-top {
  top: 17px;
}
#fp-nav ul,
.fp-slidesNav ul {
  margin: 0;
  padding: 0;
}
#fp-nav ul li,
.fp-slidesNav ul li {
  display: block;
  width: 14px;
  height: 13px;
  margin: 7px;
  position: relative;
}
.fp-slidesNav ul li {
  display: inline-block;
}
#fp-nav ul li a,
.fp-slidesNav ul li a {
  display: block;
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
}
#fp-nav ul li a.active span,
.fp-slidesNav ul li a.active span,
#fp-nav ul li:hover a.active span,
.fp-slidesNav ul li:hover a.active span {
  height: 12px;
  width: 12px;
  margin: -6px 0 0 -6px;
  border-radius: 100%;
}
#fp-nav ul li a span,
.fp-slidesNav ul li a span {
  border-radius: 50%;
  position: absolute;
  z-index: 1;
  height: 4px;
  width: 4px;
  border: 0;
  background: #333;
  left: 50%;
  top: 50%;
  margin: -2px 0 0 -2px;
  -webkit-transition: all 0.1s ease-in-out;
  -moz-transition: all 0.1s ease-in-out;
  -o-transition: all 0.1s ease-in-out;
  transition: all 0.1s ease-in-out;
}
#fp-nav ul li:hover a span,
.fp-slidesNav ul li:hover a span {
  width: 10px;
  height: 10px;
  margin: -5px 0px 0px -5px;
}
#fp-nav ul li .fp-tooltip {
  position: absolute;
  top: -2px;
  color: #fff;
  font-size: 14px;
  font-family: arial, helvetica, sans-serif;
  white-space: nowrap;
  max-width: 220px;
  overflow: hidden;
  display: block;
  opacity: 0;
  width: 0;
  cursor: pointer;
}
#fp-nav ul li:hover .fp-tooltip,
#fp-nav.fp-show-active a.active + .fp-tooltip {
  -webkit-transition: opacity 0.2s ease-in;
  transition: opacity 0.2s ease-in;
  width: auto;
  opacity: 1;
}
#fp-nav ul li .fp-tooltip.fp-right {
  right: 20px;
}
#fp-nav ul li .fp-tooltip.fp-left {
  left: 20px;
}
.fp-auto-height.fp-section,
.fp-auto-height .fp-slide {
  height: auto !important;
}

.fp-responsive .fp-is-overflow.fp-section {
  height: auto !important;
}

/* Used with autoScrolling: false */
.fp-scrollable.fp-responsive .fp-is-overflow.fp-section,
.fp-scrollable .fp-section,
.fp-scrollable .fp-slide {
  /* Fallback for browsers that do not support Custom Properties */
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
}

.fp-scrollable.fp-responsive
  .fp-is-overflow.fp-section:not(.fp-auto-height):not([data-percentage]),
.fp-scrollable .fp-section:not(.fp-auto-height):not([data-percentage]),
.fp-scrollable .fp-slide:not(.fp-auto-height):not([data-percentage]) {
  /* Fallback for browsers that do not support Custom Properties */
  min-height: 100vh;
  min-height: calc(var(--vh, 1vh) * 100);
}

/* Disabling vertical centering on scrollable elements */
.fp-overflow {
  justify-content: flex-start;
  max-height: 100vh;
}

/* No scrollable when using auto-height */
.fp-scrollable .fp-auto-height .fp-overflow {
  max-height: none;
}

.fp-is-overflow .fp-overflow.fp-auto-height-responsive,
.fp-is-overflow .fp-overflow.fp-auto-height,
.fp-is-overflow > .fp-overflow {
  overflow-y: auto;
}
.fp-overflow {
  outline: none;
}

.fp-overflow.fp-table {
  display: block;
}

.fp-responsive .fp-auto-height-responsive.fp-section,
.fp-responsive .fp-auto-height-responsive .fp-slide,
.fp-responsive .fp-auto-height-responsive .fp-overflow {
  height: auto !important;
  min-height: auto !important;
}

/*Only display content to screen readers*/
.fp-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

/* Customize website's scrollbar like Mac OS
 Not supports in Firefox and IE */
.fp-scroll-mac .fp-overflow::-webkit-scrollbar {
  background-color: transparent;
  width: 9px;
}
.fp-scroll-mac .fp-overflow::-webkit-scrollbar-track {
  background-color: transparent;
}
.fp-scroll-mac .fp-overflow::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 16px;
  border: 4px solid transparent;
}
.fp-warning,
.fp-watermark {
  z-index: 9999999;
  position: absolute;
  bottom: 0;
}
.fp-warning,
.fp-watermark a {
  text-decoration: none;
  color: #000;
  background: rgba(0, 0, 0, 0.6);
  padding: 5px 8px;
  font-size: 14px;
  font-family: arial;
  color: black;
  display: inline-block;
  border-radius: 3px;
  margin: 12px;
}
.fp-noscroll .fp-overflow {
  overflow: hidden;
}

/* Backgrounds colors for sections */
.fp-section:nth-child(1) {
  /* background: url(./img/1.jpg) no-repeat center center; */
  background: url(./img/16.png) no-repeat center center;
  /* background-size: 45% auto; */
  background-size: 100% auto;
}

.fp-section:nth-child(2) {
  /* background: url(./img/1.jpg) no-repeat center 33vh; */
  background: url(./img/16.png) no-repeat center 0vh;
  background-size: 100% auto;
}

.fp-section:nth-child(3) {
  /* background: url(./img/1.jpg) no-repeat center -66vh; */
  background: url(./img/16.png) no-repeat center 0vh;
  /* background-size: 75% auto; */
  background-size: 100% auto;
}

/* ================================================================================================================= */

body {
  overflow-x: hidden;
  background: #000;
}
.waitpage {
  position: relative;
  right: -2px;
}
.waitpage_right {
  position: absolute;
  width: 0px;
  height: 100vh;
  border: 1px solid #ccc;
  border-left: none;
  transition: all ease 0.3s;
  /* overflow: hidden; */
  right: 0;
  top: 0;
  z-index: 9999;
  background: linear-gradient(to right, #333, #eee);
}
.item {
  width: 100%;
  height: 33.3vh;
}
#login .el-form-item__label {
  color: #fff;
}
#section3 {
  position: relative;
}
.item2 {
  position: relative;
}
.item_p {
  font-size: 22px;
  color: #fff;
  line-height: 50px;
  height: 50px;
  padding-left: 40px;
  width: 50%;
  position: absolute;
  left: 40%;
  margin-top: 5%;
  background: transparent;
  border-radius: 10px;
  padding-left: 50px;
  box-sizing: border-box;
  /* border: 1px solid #ccc; */
}
.item_p .line {
  position: absolute;
  left: 20px;
  width: 3px;
  background: #fff;
  top: -25px;
  height: 100px;
}
.leftfz {
  position: absolute;
  left: -200px;
  height: 100px;
  top: -25px;
  width: 15vw;
  line-height: 100px;
}
.leftfz img {
  height: 100px;
  width: 200px;
  display: block;
}
.span_zh {
  color: #0c98d8;
  font-size: 100px;
}
.span_en {
  font-size: 100px;
  color: #fff;
}
.dn {
  display: none;
}
.posa_top,
.posa_bottom {
  height: 60px;
  line-height: 60px;
  position: absolute;
  width: 0px;
  background: #409eff;
  right: 0;
  top: 20px;
  border-left: none;
  transition: all ease 0.3s;
}
.posa_bottom {
  top: auto;
  bottom: 30px;
}
.arrow_span {
  position: absolute;
  /* right: 350px; */
  right: -30px;
  height: 80px;
  top: 0px;
  display: block;
  width: 0;
  height: 0;
  border-left: 30px solid transparent;
  border-right: 30px solid #409eff;
  border-top: 30px solid transparent;
  border-bottom: 30px solid transparent;
  transition: all ease 0.3s;
}
body {
  overflow-x: hidden;
}

.arrow_span_txt {
  font-size: 20px;
  margin-left: 60px;
  width: 8em;
  white-space: nowrap;
}
.main_center {
}
.main_center .title {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: 30px;
  margin-right: 50px;
}
.main_center .title img {
  display: block;
  width: 100px;
  height: auto;
}
.waitpage_right {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.main_center .title span {
  font-size: 20px;
  font-weight: bold;
  position: relative;
  top: 8px;
  margin-left: 10px;
}
.sub_title {
  margin-left: 50px;
  font-size: 14px;
  color: #000;
}
.line_l {
  margin-left: 20px;
  margin-top: 10px;
  border-bottom: 2px dashed #000;
}
.p_desc {
  margin-top: 20px;
  text-indent: 2em;
  font-size: 14px;
  line-height: 25px;
  color: #000;
  padding-left: 20px;
  padding-right: 30px;
  white-space: nowrap;
}
.fp-watermark {
  display: none;
}
.el-input__inner {
  color: #fff;
  background-color: transparent;
  border: 1px solid #ccc;
}
.el-button,
.el-button:hover {
  background-color: transparent;
  color: #fff;
  border: 1px solid #ccc;
}
</style>
