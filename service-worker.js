/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "171877a8768ab848e70a76d7bd482de9"
  },
  {
    "url": "assets/css/0.styles.66d684e8.css",
    "revision": "9e79f2ae8329ebab3e41ebe1b62e79f1"
  },
  {
    "url": "assets/img/1653118922924.72d846fb.png",
    "revision": "72d846fb69746976a4d772fb9e591d71"
  },
  {
    "url": "assets/img/1653119053628.69b5bb13.png",
    "revision": "69b5bb133d2236a6f2c6c21ddda32313"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.f65d2169.js",
    "revision": "0025e163d2d9789e7708bd4d6269e60d"
  },
  {
    "url": "assets/js/10.6e071061.js",
    "revision": "ca28a5c551a846846c95f2e8915c4288"
  },
  {
    "url": "assets/js/14.58c34c1f.js",
    "revision": "520f82df5d45ecd2b5864e192cf5be1b"
  },
  {
    "url": "assets/js/15.c4398cb7.js",
    "revision": "610b7cb9db75ad609af315bc08d4d56b"
  },
  {
    "url": "assets/js/16.fb352b01.js",
    "revision": "62c00fa74bb836c41347d4371bf78955"
  },
  {
    "url": "assets/js/17.bc5c91e0.js",
    "revision": "26387e289e247650a67392ceea52947e"
  },
  {
    "url": "assets/js/18.9da6b551.js",
    "revision": "42673be34290eb490bf0090e03c42c6f"
  },
  {
    "url": "assets/js/19.5b5d5f78.js",
    "revision": "5ae1a4bac0444da958bbe5ba2e8f95cb"
  },
  {
    "url": "assets/js/2.1adff2f9.js",
    "revision": "e6698e851c6fb06c762000b7dd026808"
  },
  {
    "url": "assets/js/20.4c5a7bbf.js",
    "revision": "f3baff87af788696b4b7a14b72d10753"
  },
  {
    "url": "assets/js/21.b373e2e0.js",
    "revision": "8fb0ed13b370c223b1fea6084f0ddd58"
  },
  {
    "url": "assets/js/22.999c47d8.js",
    "revision": "1d4c7200fc5828a33f237728ab928ef8"
  },
  {
    "url": "assets/js/23.56095149.js",
    "revision": "b4fe5c2a0b1b8135edf113f2ee710cd5"
  },
  {
    "url": "assets/js/24.20caa42c.js",
    "revision": "97ca5a2d9dd366702063a37967ca47bc"
  },
  {
    "url": "assets/js/25.0d9cbe12.js",
    "revision": "311d443ea63d45595b7f1ae1ec9863ba"
  },
  {
    "url": "assets/js/26.f8e24076.js",
    "revision": "7787ab3254f3efb8fc97ad8a05b5c1f6"
  },
  {
    "url": "assets/js/27.ec50571a.js",
    "revision": "815f8f9a7a0b5a3198a18ab849fd5457"
  },
  {
    "url": "assets/js/28.800ce331.js",
    "revision": "bfa2678bd7a901722e8dd6befa64e0fa"
  },
  {
    "url": "assets/js/29.54545733.js",
    "revision": "a95a0bb3b9c01d3bbbe16caf7646aad1"
  },
  {
    "url": "assets/js/3.15265a4c.js",
    "revision": "b326195172eae3d8a496b031adf3c70a"
  },
  {
    "url": "assets/js/30.76e12d6a.js",
    "revision": "e2537f922d89029a9f25ab76a0f32f1d"
  },
  {
    "url": "assets/js/31.715cd18b.js",
    "revision": "74e6762921991aeb8f365be50431109a"
  },
  {
    "url": "assets/js/32.7527cf2d.js",
    "revision": "204ae51eb2055932f216b14a092769cb"
  },
  {
    "url": "assets/js/33.b4e02e0c.js",
    "revision": "9eb2a06e7598b8c04ba27db7e263f799"
  },
  {
    "url": "assets/js/34.1c866000.js",
    "revision": "f73b03d9c250049aa937cee31febdd8f"
  },
  {
    "url": "assets/js/35.bba59a96.js",
    "revision": "fd132f6ad5ab3701617d26c38b339ea7"
  },
  {
    "url": "assets/js/36.5c16cfe3.js",
    "revision": "08934e3edb81fc90d7449efb3529f7a3"
  },
  {
    "url": "assets/js/37.bb5fe0f9.js",
    "revision": "acf509314080070f6e293d23eb4728ed"
  },
  {
    "url": "assets/js/38.88f26815.js",
    "revision": "ea5c7e20f2cf123d2c939eb6edeaa498"
  },
  {
    "url": "assets/js/39.2e692aae.js",
    "revision": "2e47c686614d847e993da55e15f20573"
  },
  {
    "url": "assets/js/4.bd72f0fc.js",
    "revision": "1ec79bf42479596ae68ab8aaec921a75"
  },
  {
    "url": "assets/js/40.670a2a78.js",
    "revision": "5ac1a8b4ae5810aa7a5e49ac4e17a747"
  },
  {
    "url": "assets/js/41.5df1efb5.js",
    "revision": "393ca71f2227e1f9672b79ed3c935bf2"
  },
  {
    "url": "assets/js/42.10863dd6.js",
    "revision": "e9d5bc08c35883e7f0cb38bd9f472883"
  },
  {
    "url": "assets/js/43.4887a085.js",
    "revision": "0e22c34b81d7b0913f149be0147cf49c"
  },
  {
    "url": "assets/js/44.66325c70.js",
    "revision": "4dbd1cb1d9c8e13d7fb804c89646dd99"
  },
  {
    "url": "assets/js/45.dff3d1d9.js",
    "revision": "35bc945db70be7accdb2d2b10ca9ac53"
  },
  {
    "url": "assets/js/5.ee22af32.js",
    "revision": "cc6ee74b0a528408ad40412e82415756"
  },
  {
    "url": "assets/js/6.787b6e9e.js",
    "revision": "780b822012e841a32f1d1642f3b9e29d"
  },
  {
    "url": "assets/js/7.1d05d7ab.js",
    "revision": "064646ebe69114f06d8e40af1176f953"
  },
  {
    "url": "assets/js/8.d470bcc3.js",
    "revision": "be5c43568e9d20ec1f653b595c41b2e9"
  },
  {
    "url": "assets/js/9.7a138c51.js",
    "revision": "884a439b7bb2fa3918d78a30e8e458db"
  },
  {
    "url": "assets/js/app.c9bc1856.js",
    "revision": "bf8945a10437a60d72403a97319c51a1"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~docsearch.733c4411.js",
    "revision": "0a6c922abd855057b663f8c5581acc66"
  },
  {
    "url": "assets/js/vendors~flowchart.ed64bfec.js",
    "revision": "bd267d5696890fed7f370b7d4d7fea66"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/index.html",
    "revision": "6bef45ecb3694694cf5b3b7e62404a04"
  },
  {
    "url": "categories/java/index.html",
    "revision": "2ddea4e0bac8f338aaefb9ef761fe173"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "014f1343a31834522ecf9eafd5e4862b"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "e376a66cec72c27a332bd8bea6655f90"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "1d958c766cfcafa1062c76e5081be04e"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "fc177c3e9a10a6d5f25c98be00b4c8f5"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/5.jpg",
    "revision": "c48683b7627396b02eb4a7df386431f5"
  },
  {
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "img/logo.png",
    "revision": "b35e54e85218c085de994fdcdd7726bf"
  },
  {
    "url": "img/sidebar_280140.png",
    "revision": "30e2bf90705fc32e783f29a833736c17"
  },
  {
    "url": "img/sidebar_2801401.png",
    "revision": "0c2331a84c22028e9d50010be4c9b71f"
  },
  {
    "url": "img/sidebar_28014022.png",
    "revision": "67ed912a57fe22a89c7ef25bfa3d6c74"
  },
  {
    "url": "index.html",
    "revision": "ecf62ac4991a39c6c9db23dd108519b9"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "a9b494c4ae8721b7fd2484a6218a8718"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "5c651625bb724ba60da5f7c292956da7"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "ba1ab590585a1f328d081f8a6427d730"
  },
  {
    "url": "tags/js/index.html",
    "revision": "0a9df3afea36353584e73e9a5dffe5c8"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "7d4023c531e3549adc341d209ee46e4f"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "8e61a69275a491c2954f3b1c20e883ac"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "4436a0441e16819f2c4d204c60c79be6"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "8aeeb8d25388d860808a0c5700fc8f5c"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "da70dfd485830d7048b74126f1ba6e15"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "ef5c4cffe430cfefd65ea42946f52622"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "2a6ad7fd85fdd9c4acf3c670d8ba1d3b"
  },
  {
    "url": "timeline/index.html",
    "revision": "0f4f42e20a058ec5d76e802ad876b431"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "e5e2a43754e06652334355c53d2c453a"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "507d426e01c363004437c6edc06f5a0c"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "ba1f5c4c0a982ff0c7970986bcb7e4ad"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "75c4e52764af98bd1006b28af05befc6"
  },
  {
    "url": "生活分享/life.html",
    "revision": "78db5c2a002f91649c00e3dc18ba7e52"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
