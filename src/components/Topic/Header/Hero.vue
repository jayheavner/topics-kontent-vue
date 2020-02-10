<template>
  <section title="background-image">
    <figure
      class="d-md-none topic-hero__image topic-hero__image-small"
      :style="backgroundStyles(url)"
    ></figure>
    <figure class="d-none d-md-block topic-hero__image" :style="backgroundStyles(url)"></figure>
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-6 col-lg-5 ml-md-auto topic-hero__content-col">
          <div class="topic-hero__content">
            <h1 class="topic-hero__title">{{heroTitle}}</h1>
            <p>{{heroText}}</p>
            <a href="#readmore" class="small topic-hero__cta topic-hero__cta--uppercase">Read more</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Hero",
  props: {
    image: Object,
    heroTitle: String,
    heroText: String
  },
  data: () => ({ url: "" }),
  mounted: function() {
    this.url = this.image.url;
  },
  methods: {
    backgroundStyles(image) {
      return {
        "background-image": `url(${image})`
      };
    }
  }
};
</script>