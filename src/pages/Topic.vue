<template>
  <section v-if="!loaded">
    <span>loading...</span>
  </section>
  <section v-else>
    <div class="cols-12">
      <header class="topic-hero">
        <figure
          class="d-md-none topic-hero__image topic-hero__image-small"
          :style="backgroundStyles(this.content.backgroundImage.value[0].url)"
        ></figure>
        <figure
          class="d-none d-md-block topic-hero__image"
          :style="backgroundStyles(this.content.backgroundImage.value[0].url)"
        ></figure>

        <div class="container">
          <div class="row">
            <div class="col-12 col-md-6 col-lg-5 ml-md-auto topic-hero__content-col">
              <div class="topic-hero__content">
                <h1 class="topic-hero__title">{{content.title.value}}</h1>
                <p>{{content.introduction.value}}</p>
                <a
                  href="#readmore"
                  class="small topic-hero__cta topic-hero__cta--uppercase"
                >Read more</a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div class="topic-locations">
        <div class="container">
          <div class="row">
            <div class="col-12 col-md-6 col-lg-5 ml-lg-auto order-md-2 schedule-exhibitors-col">
              <div class="schedule-exhibitors">
                <ul class="nav nav-tabs" role="tablist">
                  <li class="nav-item text-center">
                    <a
                      class="nav-link active"
                      id="topic-schedule-tab"
                      data-toggle="tab"
                      href="#topic-schedule-content"
                      role="tab"
                      aria-controls="topic-schedule-content"
                      aria-expanded="true"
                    >Schedule</a>
                  </li>
                  <li class="nav-item text-center">
                    <a
                      class="nav-link"
                      id="topic-exhibitors-tab"
                      data-toggle="tab"
                      href="#exhibitors"
                      role="tab"
                      aria-controls="exhibitors"
                    >Exhibitors</a>
                  </li>
                </ul>
                <ScheduleItem v-bind:scheduleData="content.scheduleItems.value" />
              </div>
            </div>

            <div
              class="col-12 col-md-5 mr-md-auto col-lg-6 order-md-1 topic-locations__location-wrapper"
              data-sr-id="1"
              style="; visibility: visible;  -webkit-transform: translateY(0) scale(1); opacity: 1;transform: translateY(0) scale(1); opacity: 1;-webkit-transition: -webkit-transform 0.5s ease 0s, opacity 0.5s ease 0s; transition: transform 0.5s ease 0s, opacity 0.5s ease 0s; "
            >
              <h4 class="dashed-heading">Key Locations</h4>
              <KeyLocation v-bind:locationData="content.keyLocations.value" />
              <div
                class="topic-locations__collapsible-wrapper"
                id="topic-locations"
                role="tablist"
                data-children=".topic-locations__collapsible"
                v-html="content.linkedTopicContent"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flexible-promo">
      <LinkedTopContent v-bind:linkedTopContentData="content.linkedTopContent.value" />
    </div>

    <section class="topic-about" id="about">
      <div class="container">
        <div class="row">
          <div
            class="col-12 col-lg-6 mr-lg-auto col-xl-6"
            data-sr-id="6"
            style="; visibility: visible;  -webkit-transform: translateY(0) scale(1); opacity: 1;transform: translateY(0) scale(1); opacity: 1;-webkit-transition: -webkit-transform 0.5s ease 0s, opacity 0.5s ease 0s; transition: transform 0.5s ease 0s, opacity 0.5s ease 0s; "
          >
            <h3 class="topic-about__title" id="readmore">MORE ABOUT SMART CITIES</h3>
            <p>
              {{content.body}}
            </p>
          </div>
          <div
            class="col-12 col-lg-5 mr-lg-auto col-xl-5 topic-about__stats-container"
            data-sr-id="7"
            style="; visibility: visible;  -webkit-transform: translateY(0) scale(1); opacity: 1;transform: translateY(0) scale(1); opacity: 1;-webkit-transition: -webkit-transform 0.5s ease 0s, opacity 0.5s ease 0s; transition: transform 0.5s ease 0s, opacity 0.5s ease 0s; "
          >
            <p class="topic-about__stats-number">$34B</p>
            <p class="italic font-weight-bold">Global smart cities spending by 2020</p>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import { TopicStore } from "../store/Topic";
import KeyLocation from "../components/KeyLocation";
import ScheduleItem from "../components/ScheduleItem";
import LinkedTopContent from "../components/LinkedTopContent";

export default {
  name: "Topic",
  components: {
    KeyLocation,
    ScheduleItem,
    LinkedTopContent
  },
  props: {
    url: String,
    pageType: String
  },
  data: () => ({ content: "" }),
  computed: {
    loaded() {
      return this.content === undefined || this.content === "" ? false : true;
    }
  },
  created() {},
  mounted: function() {
    TopicStore.subscribe();
    TopicStore.addChangeListener(this.onChange);
    TopicStore.fetchFromCMS("smart_cities");
  },
  beforeDestroy: function() {
    TopicStore.unsubscribe();
  },
  destroyed: function() {
    TopicStore.removeChangeListener(this.onChange);
  },
  methods: {
    backgroundStyles(image) {
      return {
        "background-image": `url(${image})`
      };
    },
    onChange: function() {
      const page = TopicStore.get();
      if (page) this.content = page;
    }
  }
};
</script>