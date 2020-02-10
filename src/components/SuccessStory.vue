<template>
  <section class="case-study-promo">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-6 col-lg-5">
          <p class="eyebrow">CES Success Story</p>
          <h2 class="heading-2-5">{{content.title}}</h2>
          <p class="case-study-promo__text">{{content.summary}}</p>
          <a class="arrow-link" :href="content.url">
            Learn more
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
        <div class="col-12 col-md-6 col-lg-5 offset-lg-2">
          <div class="case-study-promo__img-container">
            <img class="case-study-promo__img" :src="content.topicsImage" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { flatten } from "../models/success_story";

export default {
  name: "SuccessStory",
  props: {
    storyData: Array
  },
  data: () => ({ content: "" }),
  mounted: function() {
    this.content = flatten(this.storyData[0]);
    debugger;
  },
  errorCaptured(err, vm, info) {
    console.log(`cat EC: ${err.toString()}\ninfo: ${info}`);
    return false;
  }
};
</script>