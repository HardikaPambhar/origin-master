var loaded = 0;
var app = {
  initialize: function () {
    this.bindEvents();
  },
  bindEvents: function () {
    document.addEventListener('deviceready', this.onDeviceReady, false);
    document.addEventListener('admob.banner.events.LOAD_FAIL', function (event) {
      // alert(JSON.stringify(event));
    })
    document.addEventListener('admob.interstitial.events.LOAD_FAIL', function (event) {
      // alert(JSON.stringify(event));
    })
    document.addEventListener('admob.interstitial.events.LOAD', function (event) {
      //  alert('Load');
      loaded = 1;
      admob.interstitial.show();
    })
    document.addEventListener('admob.interstitial.events.CLOSE', function (event) {
      //  alert('Close');
      //  admob.interstitial.prepare();
    })
  },
  onDeviceReady: function () {
    var admobid = {};
    if (/(android)/i.test(navigator.userAgent)) {  // for android & amazon-fireos
      admobid = {
        //  //Test IDs
        //  banner: 'ca-app-pub-3940256099942544/6300978111',
        //  interstitial: 'ca-app-pub-3940256099942544/1033173712',

        //Production Ids
        banner: 'ca-app-pub-4033027753708953/8333603942',
        interstitial: 'ca-app-pub-4033027753708953/5179104798',
      }
    } else if (/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {  // for ios
      admobid = {
        banner: 'ca-app-pub-8326262079687481/5195708904',
        interstitial: 'ca-app-pub-8326262079687481/3404361846',
      }
    }
     admob.banner.config({
       id: admobid.banner,
      //  isTesting: true,
      //  autoShow: true,
     })
     admob.banner.prepare();
    admob.interstitial.config({
      id: admobid.interstitial,
      //  isTesting: true,
      //  autoShow: true,
    })
    admob.interstitial.prepare();
    // var p = setInterval(function () {
    //   if (loaded == 1) {
    //     clearInterval(p);
    //     admob.interstitial.show(); 
    //   }
    // }, 500);
	
  }
};
