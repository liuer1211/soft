<template>
  <div class="qrcode" v-show="flag">
    <div id="reader"></div>
    <div class="close"><span @click="close">X</span></div>
  </div>
</template>
 
<script>
	import { Html5Qrcode } from "html5-qrcode";
	export default {
    props: {
      flag:{
        type: Boolean,
        default: false,
      }
    },
		created() {
			// this.getCameras();
		},
		beforeDestroy() {
      // this.stop();
		},
		methods:{
			getCameras() {
        Html5Qrcode.getCameras()
          .then((devices) => {
            if (devices && devices.length) {
              this.html5QrCode = new Html5Qrcode("reader");
              this.start();
            }
          })
          .catch((err) => {
            // handle err 
            this.html5QrCode = new Html5Qrcode("reader");
            this.error = "ERROR: 您需要授予相机访问权限"
            this.$emit("err",this.error)
          });
      },
      start() {
        //environment后置 user前置
        this.html5QrCode 
        .start(
          {facingMode: "environment" },
          {
            fps: 2,
            qrbox: { width: 250, height: 250 }, 
          },
          (decodedText, decodedResult) => {
            this.$emit("ok",decodedText)
          }
        )
        .catch((err) => {
            this.$emit("err",err)
        });
      },
      stop() {
        this.html5QrCode.stop().then((ignore) => {
          // QR Code scanning is stopped.
          console.log("QR Code scanning stopped.");
        })
        .catch((err) => {
          // Stop failed, handle it.
          console.log("Unable to stop scanning.");
        });
      },
      close() {
        try{
          this.$emit('closeModel')
          this.stop();
        } catch(e){
          console.log(e)
        }
      }
		},
    watch: {
      flag:{
        handler(newVal,oldVal) {
          if(newVal){
            this.getCameras();
          }
        }
      }
    }
	}
</script>
 
<style lang="less" scoped>
	.qrcode{
    position: fixed;
    height: 100%;
    width: 100%;
    background: #000;
    z-index: 100;
    top: 0;
	}
	#reader{
    top: 50%;
    left: 0;
    transform: translateY(-50%);
	}
  .close{
    position: fixed;
    bottom: 60px;
    color: #fff;
    text-align: center;
    width: 100%;
  }
</style>