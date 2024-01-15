<template>
    <div class="test-page">
      <div class="top">
        <div class="back-button" @click="goBack">
          返回
        </div>
        <div class="button" v-if="!sign" @click="Sign" :class="{ 'successAnimation': showSuccessAnimation }"  >
          <i class=""></i>
          <div>签到</div>
        </div>
        <div class="button" v-if="sign">
          <i class=""></i>
          <div>已签到</div>
        </div>
        <div class="signdays">已连续签到{{ day }}天，继续加油!</div>
      </div>
  
      <div class="content">
        <!-- 年份 月份 -->
        
  
        <!-- 星期 -->
        <ul class="weekdays">
          <li>日</li>
          <li>一</li>
          <li>二</li>
          <li>三</li>
          <li>四</li>
          <li>五</li>
          <li>六</li>
        </ul>
  
        <!-- 日期 -->
        <ul class="days bottom-line">
          <li  v-for="day in days"  :key="day.day.getTime()">
            <!--本月已签到日期-->
            <span v-if="day.isSign && day.day.getMonth()+1 === currentMonth" class="cli">
              <img src="@/assets/img/sign.png">
              {{ day.day.getDate() }}
            </span>
            <!--本月未签到日期-->
            <span v-if="!day.isSign && day.day.getMonth()+1 === currentMonth" class="cli">{{ day.day.getDate() }}</span>
          </li>
        </ul>
      </div>
  
      <div class="role">
        <div class="role-title">签到规则</div>
        <div class="role-content" v-html="role ? role : '暂无内容'"></div>
      </div>
    </div>
  </template>
  <script>
import { Cell, CellGroup, Field, Popup, Button, Icon } from 'vant';

export default {
  components: {
    Cell,
    CellGroup,
    Field,
    Popup,
    Button,
    Icon
  },
  data() {
    return {
      currentDay: 19, // 当前天
      currentMonth: 10, // 当前月
      currentYear: 2023,
      currentWeek: 5, // 一号所在的星期
      days: [], // 当月所有天数
      content: {},
      arrDate: [], // 当月签到日期
      num: 0,
      day: 5,
      sign: false,
      role: "<p>每天签到可获得1-20随机经验</p>"
    };
  },
  //在created钩子函数中读取本地存储的数据并初始化签到日期
  created() {
    this.getSign();
    this.initData(null);
  },
  methods: { 
     goBack() {
      // 使用 Vue Router 返回上一个页面
      this.$router.back();
    },
    /**
     * 获取签到日期
     */
    getSign() {
      let sign_days = localStorage.getItem('sign_days');
      sign_days = sign_days ? JSON.parse(sign_days) : [];
      this.arrDate = [];
      const currentDate = new Date();
      for(let i of sign_days) {
        const tempDate = new Date(i);
        if(currentDate.getFullYear() === tempDate.getFullYear() && currentDate.getMonth() === tempDate.getMonth()) {
          this.arrDate.push(tempDate.getDate());
        }
      }
      this.initData();
    },
    initData(cur) {
      let date;
      if (cur) {
        // 切换日期
        date = new Date(cur);
      } else {
        const now = new Date();
        const d = new Date(this.formatDate(now.getFullYear(), now.getMonth() + 1, 1));
        d.setDate(d.getDate() - 35); // 设置天数为35天
        date = new Date(this.formatDate(d.getFullYear(), d.getMonth(), 1));
      }
      this.currentDay = date.getDate(); // 今日日期 几号
      this.currentYear = date.getFullYear(); // 当前年份
      this.currentMonth = date.getMonth() + 1; // 当前月份

      this.currentWeek = date.getDay(); // 0,1...6 星期
      const str = this.formatDate(this.currentYear, this.currentMonth, this.currentDay); // 2020-01-01
      this.days.length = 0; // 初始化日期
      // 如果今天是周日，放在第一行第7个位置，前面6个 这里默认显示一周，如果需要显示一个月，则第二个循环为 i<= 35- this.currentWeek
      for (let i = this.currentWeek; i > 0; i--) {
        const d = new Date(str);
        d.setDate(d.getDate() - i);
        const dayobject = {}; // 用一个对象包装Date对象 以便为以后预定功能添加属性
        dayobject.day = d;
        this.days.push(dayobject); // 将日期放入data 中的days数组 供页面渲染使用
      }
      // 其他周 // 设置天数为35天,周日设置在第一位，循环从36开始
      this.num = 0;
      for (let j = 0; j <= 36 - this.currentWeek; j++) {
        const d = new Date(str);
        d.setDate(d.getDate() + j);
        const dddd = d.getDate();
        if (dddd === 1) {
          this.num++;
        }
        if (this.num === 2) {
          return;
        }
        const dayobject = { day: d, isSign: this.isVerDate(dddd) };
        this.days.push(dayobject);
      }
    },
    /**
     * 判断该日期是否有签到
     * @param v
     * @returns {boolean}
     */
    isVerDate(v) {
      return this.arrDate.includes(v);
    },
    /**
     * 上一月
     * @param year
     * @param month
     */
    pickPre(year, month) {
      const d = new Date(this.formatDate(year, month, 1));
      d.setMonth(d.getMonth() - 1);
      this.initData(this.formatDate(d.getFullYear(), d.getMonth() + 1, 1));
    },
    /**
     * 下一月
     * @param year
     * @param month
     */
    pickNext(year, month) {
      const d = new Date(this.formatDate(year, month, 1));
      d.setMonth(d.getMonth() + 1);
      this.initData(this.formatDate(d.getFullYear(), d.getMonth() + 1, 1));
    },
    // 返回 类似 2020-01-01 格式的字符串
    formatDate(year, month, day) {
      month = month < 10 ? "0" + month : month;
      day = day < 10 ? "0" + day : day;
      return `${year}-${month}-${day}`;
    },
    /**
     * 点击签到
     * @param index
     */
   
    Sign(index) {
      
      if(!this.isVerDate(this.days[index].day.getDate())) {
        const now = new Date();
        this.arrDate.push(now.getDate());
        localStorage.setItem('sign_days', JSON.stringify(this.arrDate));
        this.days[index].isSign = true;
        this.days[index].animationClass = 'animate-enter';
        setTimeout(() => {
          this.days[index].animationClass += '-active';
          setTimeout(() => {
            this.days[index].animationClass = '';
          }, 3000);
        }, 100);
        this.showSuccessAnimation = true;
        this.$fn.success("签到成功");
      } else {
        this.$fn.error("你已经签到了哦");
      }
    }
    }
  };
</script>
  <style lang="less" scoped>
  .test-page {
    .top {
      background: url() no-repeat 0 0;
      background-size: 100% 100%;
      overflow: hidden;
      color: #333333;
      padding: 15px;
      height: 120px;
      text-align: center;
      .back-button{
        width: 50px;
        height: 20px;
        top: 10px;
        cursor: pointer;
      }
      .button {
        background-color: #5283c4;
        display: flex;
        justify-content: center;
        border: 1px solid #ffffff;
        border-radius: 20px;
        
        font-size: 18px;
        width: 120px;
        margin: 0 auto 10px;
        height: 40px;
        line-height: 40px;
        .calendar-icon {
          display: block;
          width: 40px;
          height: 40px;
          background: url() no-repeat -6px -4px;
          background-size: 114px 45px;
          &.success-animation {
            /* 添加签到成功动画样式 */
            animation: successAnimation 1s ease-in-out;
          }
        }
        @keyframes successAnimation {
          from {
            opacity: 0;
            transform: translate3d(0, 20%, 0);
          }
        
          to {
            opacity: 1;
            transform: none;
          }
        }   
      }
      .button:active {
        background-color: #5283c4;
        opacity: 0.8;
      }
    }
  
    .content {
      margin: 0 15px;
      border-radius: 8px;
      overflow: hidden;
      margin-top: -40px;
      box-shadow: rgba(225,225,225,0.7) 0  10px 20px 0;
    }
    .month {
      background: #ffffff;
      margin: 0;
      padding: 10px 15px;
      display: flex;
      justify-content: space-between;
      li {
        text-transform: uppercase;
        letter-spacing: 0;
      }
      .arrow {
        color: #5283c4;
        font-size: 12px;
        i {
          font-size: 13px;
          top: 2px;
        }
      }
      .year-month { font-size: 17px; }
    }
  
    .weekdays { /*头部星期*/
      margin: 0;
      padding: 10px 0;
      background-color: #ffffff;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      li {
        display: inline-block;
        text-align: center;
      }
    }
  
    .days { /*日期*/
      padding: 0 0 10px;
      background: #FFFFFF;
      margin: 0;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: flex-start;
  
      li {
        list-style-type: none;
        width: 14.2%;
        padding: 1%;
        box-sizing: border-box;
        height: 40px;
        margin-bottom: 4px;
        text-align: center;
        color: #000;
        .cli {
          position: relative;
          width: 100%;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          img {/*签到的日期*/
            height: 40px;
            position: absolute;
          }
        }
      }
    }
  
    .role {
      padding: 20px 15px;
      .role-title {
        margin-bottom: 5px;
        font-weight: bold;
      }
      .role-content {
        font-size: 13px;
        color: #333333;
      }
    }
  }
  
  </style>
  
  