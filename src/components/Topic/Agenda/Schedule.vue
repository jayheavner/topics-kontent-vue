<template>
  <section>
    <div class="schedule-exhibitors__event-card" v-for="(item, index) in content" :key="index">
      <h2>Session Id: {{item}}</h2>
      <p class="eyebrow event-card__date">XXXXXX</p>
      <h3 class="event-card__title">
        <a href="/conference/29401/612962">XXXXX</a>
      </h3>
      <p class="eyebrow eyebrow--small event-card__track-title">Location</p>
      <p class="small event-card__venue">XXXXXXXX</p>
      <button
        class="btn ces-btn ces-btn--round agenda-btn-add"
        data-id="612962"
        data-toggle="modal"
        data-target="#modal-message"
      >
        <i class="fa fa-plus"></i>Add to my agenda
      </button>
    </div>
  </section>
</template>

<script>
export default {
  name: "Schedule",
  props: {
    schedule: [Object, Array]
  },
  data: () => ({ content: "" }),
  watch: {
    schedule() {
      this.content = this.schedule;
    }
  },
};
</script>