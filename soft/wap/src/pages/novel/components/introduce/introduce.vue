<template>
  <div class="introduce-main">
    <div class="introduce-model">
      <div class="in-left">
        <img src="#" alt=""/>
        <i @click="toShow">
          <!-- <van-icon name="play-circle-o" /> -->
          <i class="iconfont icon-play"></i>
        </i>
      </div>
      <div class="in-right">
        <div>夜灵犀传奇</div>
        <div>作者：夜灵犀</div>
        <div>更新于：2020-02-02</div>
        <p>
          江湖纷争几时休，笑看痴人坠其中。江湖纷争几时休，笑看痴人坠其中。
        </p>
      </div>
    </div>
    <van-popup v-model="show" @close="closeModel" :close-on-click-overlay="false" closeable close-icon="close" teleport="#introduce-main" :style="{ width: '80%',height: '80%' }">
      <div class="pop-main"> 
        <div>
          <video-player 
            class="video-player vjs-custom-skin"
            ref="videoPlayer"
            :playsinline="true"
            :options="playerOptions"
            @pause="onPlayerPause($event)"
            @play="onPlayerPlay($event)" 
            @timeupdate="onPlayerTimeupdate($event)"
          >
            <!-- 
            @ended="onPlayerEnded($event)"
            @waiting="onPlayerWaiting($event)"
            @playing="onPlayerPlaying($event)"
            @loadeddata="onPlayerLoadeddata($event)"
            @canplay="onPlayerCanplay($event)"
            @canplaythrough="onPlayerCanplaythrough($event)"
            @statechanged="playerStateChanged($event)"
            @ready="playerReadied" -->
          </video-player>
        </div>
        <div>
          简介
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
// import video from '../../../../assets/video/video.mp4'
export default {
  data() {
    return {
      show: false,
      playerOptions: {
        playbackRates: [0.5, 1.0, 1.5, 2.0], // 可选的播放速度
        autoplay: false, // 如果为true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 是否视频一结束就重新开始。
        preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: 'zh-CN',
        aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [{
          type: "video/mp4", // 类型
          src: 'https://liuer1211.github.io/soft/soft/wap/src/assets/video/video.mp4' // url地址
        }],
        poster: '', // 封面地址
        notSupportedMessage: '此视频暂无法播放，请稍后再试', // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true, // 当前时间和持续时间的分隔符
          durationDisplay: true, // 显示持续时间
          remainingTimeDisplay: false, // 是否显示剩余时间功能
          fullscreenToggle: true // 是否显示全屏按钮
        }
      }
    }
  },
  mounted() {
    // this.$refs.videoPlayer.player.play() // 播放
    // this.$refs.videoPlayer.player.pause() // 暂停
    // this.$refs.videoPlayer.player.src(src) // 重置进度条
  },
  methods:{
    // 展示弹框
    toShow() {
      this.show = true;
    },

    // 关闭弹出层
    closeModel() {
      this.$refs.videoPlayer.player.pause();
    },

    // 播放回调
    onPlayerPlay(player) {
      console.log('player play!', player)
    },

    // 暂停回调
    onPlayerPause(player) {
      console.log('player pause!', player)
    },

    // // 视频播完回调
    // onPlayerEnded($event) {
    //   console.log(player)
    // },

    // // DOM元素上的readyState更改导致播放停止
    // onPlayerWaiting($event) {
    //   console.log(player)
    // },

    // // 已开始播放回调
    // onPlayerPlaying($event) {
    //   console.log(player)
    // },

    // // 当播放器在当前播放位置下载数据时触发
    // onPlayerLoadeddata($event) {
    //   console.log(player)
    // },

    // 当前播放位置发生变化时触发。
    onPlayerTimeupdate($event) {
      console.log(player)
    },

    // //媒体的readyState为HAVE_FUTURE_DATA或更高
    // onPlayerCanplay(player) {
    //   // console.log('player Canplay!', player)
    // },

    // //媒体的readyState为HAVE_ENOUGH_DATA或更高。这意味着可以在不缓冲的情况下播放整个媒体文件。
    // onPlayerCanplaythrough(player) {
    //   // console.log('player Canplaythrough!', player)
    // },

    // //播放状态改变回调
    // playerStateChanged(playerCurrentState) {
    //   console.log('player current update state', playerCurrentState)
    // },

    // //将侦听器绑定到组件的就绪状态。与事件监听器的不同之处在于，如果ready事件已经发生，它将立即触发该函数。。
    // playerReadied(player) {
    //   console.log('example player 1 readied', player);
    // }
  }
}
</script>

<style lang="less" scoped>
  .introduce-main{
    padding: 12px;
    box-sizing: border-box;
    .introduce-model {
      font-size: 16px;
      display: flex;
      background-color: #3399ff;
      border-radius: 4px;
      padding: 12px;
      box-sizing: border-box;
      box-shadow: 1px 1px 2px 1px #ebedf0;
      .in-left {
        width: 100px;
        min-width: 100px;
        height: 120px;
        background-color: 6633cc;
        border-radius: 4px;
        overflow: hidden;
        position: relative;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        >i {
          position:absolute;
          bottom: 6px;
          right: 6px;
          width: 16px;
          height: 16px;
          .iconfont {
            &.icon-play{
              font-size: 20px;
              color: #fff;
            }
          } 
        }
      }
      .in-right {
        flex: 1;
        padding: 2px 0 0 12px;
        overflow: hidden;
        >div {
          padding: 0 0 6px 0;
          &:nth-child(1) {
            font-weight: 600;
          }
          &:nth-child(2) {
            font-size: 14px;
          }
          &:nth-child(3) {
            font-size: 12px;
          }
        }
        p {
          font-size: 14px;
          overflow: hidden;
          text-overflow: ellipsis;
          word-break: break-all;
          width: 200px;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          text-indent: 12px;
          line-height: 18px;
        }
      }
    }
    /deep/ .van-popup {
      &.van-popup--center {
        border-radius: 4px;
        .van-popup__close-icon--top-right{
          top: 0;
          right: 0;
          color: #000;
        }
      }
    }
    .pop-main {
      font-size: 16px;
      padding: 16px 12px 12px 12px;
      >div:last-child {
        padding: 12px 0 0 0;
      }
    }
  }
</style>