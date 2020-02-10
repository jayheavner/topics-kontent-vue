<template>
  <section v-if="!loaded">
    <span>loading...</span>
  </section>
  <section v-else>
    <header class="topic-hero">
      <Hero
        v-bind:image="topic.backgroundImage"
        v-bind:heroTitle="topic.title"
        v-bind:heroText="topic.heroText"
      />
    </header>

    <div class="topic-locations">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-6 col-lg-5 ml-lg-auto order-md-2 schedule-exhibitors-col">
            <Agenda v-bind:agenda="content.schedule_and_exhibitor_items" />
          </div>
        </div>
        <KeyLocation v-bind:location="topic.keyLocations" />
      </div>
    </div>

    <section class="flexible-promo">
      <Promo v-bind:promo="topic.promo" />
    </section>

    <section class="topic-about" id="about">
      <About v-bind:about="about"/>
    </section>
  </section>
</template>

<script>
import { ErrorBoundary } from "vue-error-boundary";
import TopicError from "../components/TopicError";
import { TopicStore } from "../store/Topic";

import Hero from "../components/Topic/Header/Hero";
import Agenda from "@/components/Topic/Agenda/index";

import KeyLocation from "../components/KeyLocation";
// import ScheduleItem from "../components/ScheduleItem";
import Promo from "../components/Topic/Promo";
import About from "../components/Topic/About";
import SuccessStory from "../components/SuccessStory";
import Video from "../components/Video";

import { flatten } from "../models/topic";

export default {
  name: "Topic",
  components: {
    ErrorBoundary,
    TopicError,
    Hero,
    Agenda,
    KeyLocation,
    // ScheduleItem,
    Promo,
    About,
    SuccessStory,
    Video
  },
  props: {
    url: String,
    pageType: String
  },
  data: () => ({
    content: Object,
    topic: Object,
    about: Object
  }),
  computed: {
    loaded() {
      return this.content === undefined ||
        this.content === "" ||
        Object.keys(this.content).length === 0
        ? false
        : true;
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
    onChange: function() {
      const page = TopicStore.get();
      if (page) {
        this.topic = flatten(page);
        this.content = page;
        // this content is not modeled well 
        this.about = {
          text: this.topic.about,
          callout: this.topic.calloutText,
          stat: this.topic.calloutStatistic
        };
        debugger;
      }
    }
  },
  errorCaptured(err, vm, info) {
    console.log(`cat EC: ${err.toString()}\ninfo: ${info}`);
    return false;
  }
};
</script>