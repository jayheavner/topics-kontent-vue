<template>
  <section>
    <div class="container">
      <div class="row">
        <div
          class="col-12 col-lg-10 ml-lg-auto mr-lg-auto col-xl-6 ml-xl-0"
          data-sr-id="3"
          v-html="content.videoHtml"
        ></div>
        <div
          class="col-12 col-lg-10 ml-lg-auto mr-lg-auto col-xl-5 ml-xl-0 event-card"
          data-sr-id="4"
        >
          <p class="eyebrow flexible-promo__type">Video</p>
          <h3 class="event-card__title">
            <a :href="content.url">{{content.title}}</a>
          </h3>
          <div class="small event-card__venue" style="white-space: normal;">
            {{content.summary}}
            <br />
            <br />
            <a :href="content.url" class="arrow-link">
              Watch Now
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
    </div>
  </section>
</template>

<script>
export default {
  name: "Promo",
  props: {
    promo: Object
  },
  data: () => ({ content: Object }),
  mounted: function() {
    this.content = this.promo;
  }
};
</script>