<template>
      <div class="container">
        <div class="row">
          <div
            class="col-12 col-lg-6 mr-lg-auto col-xl-6"
            data-sr-id="6"
            style="visibility: visible; -webkit-transform: translateY(0) scale(1); opacity: 1;transform: translateY(0) scale(1); opacity: 1;-webkit-transition: -webkit-transform 0.5s ease 0s, opacity 0.5s ease 0s; transition: transform 0.5s ease 0s, opacity 0.5s ease 0s; "
          >
            <h3 class="topic-about__title" id="readmore">MORE ABOUT SMART CITIES</h3>
            <p>{{about.text}}</p>
          </div>
          <div
            class="col-12 col-lg-5 mr-lg-auto col-xl-5 topic-about__stats-container"
            data-sr-id="7"
            style="visibility: visible;  -webkit-transform: translateY(0) scale(1); opacity: 1;transform: translateY(0) scale(1); opacity: 1;-webkit-transition: -webkit-transform 0.5s ease 0s, opacity 0.5s ease 0s; transition: transform 0.5s ease 0s, opacity 0.5s ease 0s; "
          >
            <p class="topic-about__stats-number">{{about.callout}}</p>
            <p class="italic font-weight-bold">{{about.stat}}</p>
          </div>
        </div>
      </div>

</template>

<script>
export default {
  name: "About",
  props: {
    about: Object
  },
  data: () => ({ content: Object }),
  mounted: function() {
    debugger;
    this.content = this.about;
  }
};
</script>