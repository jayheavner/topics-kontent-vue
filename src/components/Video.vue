<template>
  <section class="featured-article">
    <div
      class="container"
      data-sr-id="8"
      style="; visibility: visible;  -webkit-transform: translateY(50px) scale(1); opacity: 0;transform: translateY(50px) scale(1); opacity: 0;"
    >
      <h4 class="dashed-heading">The latest on Smart Cities</h4>
      <div class="row">
        <div class="col-12 col-lg-5 col-xl-4">
          <!-- Video/Image Section Start -->
          <figure
            class="featured-article__graphic"
            style="background-image: url('https://cdn.ces.tech/ces/media/video-still/public-private-partnerships_video-still_770x616.jpg?ext=.jpg');"
          ></figure>
          <!-- Video/Image Section End -->
        </div>
        <div class="col-12 col-lg-7 col-xl-8 featured-article__content">
          <h2 class="heading-2-5 featured-article__title">{{content.video.title}}</h2>
          <p>{{content.video.summary}}</p>
          <a id="buttonUrl" class="arrow-link" :href="content.video.url">
            Watch now
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 11">
              <title>arrow-black</title>
              <path
                d="M16.18,1A0.28,0.28,0,0,0,16,1.5L21,5.73H1.3A0.29,0.29,0,0,0,1,6a0.28,0.28,0,0,0,.3.25H21L16,10.51a0.28,0.28,0,0,0,0,.39,0.28,0.28,0,0,0,.39,0L21.9,6.21a0.28,0.28,0,0,0,0-.43L16.38,1.07A0.27,0.27,0,0,0,16.18,1Z"
                transform="translate(-0.5 -0.5)"
                fill
                stroke
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { flatten } from "../models/video";

export default {
  name: "Video",
  props: {
    videoData: Array
  },
  data: () => ({ content: "" }),
  mounted: function() {
    this.content = flatten(this.videoData[0]);
    debugger;
  },
  errorCaptured(err, vm, info) {
    console.log(`cat EC: ${err.toString()}\ninfo: ${info}`);
    return false;
  }
};
</script>