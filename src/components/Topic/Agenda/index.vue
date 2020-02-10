<template>
  <section>
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
        <Schedule v-bind:schedule="schedule" />
      </div>
    </div>
  </section>
</template>

<script>
import Exhibitors from "./Exhibitors";
import Schedule from "./Schedule";
export default {
  name: "Agenda",
  components: {
    Exhibitors,
    Schedule
  },
  props: {
    agenda: Object
  },
  data: () => ({ schedule: {} }),
  mounted: function() {
    this.schedule = this.agenda.linkedItemCodenames;
  },
};
</script>