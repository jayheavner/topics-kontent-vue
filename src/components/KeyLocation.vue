<template>
  <section>
    <div class="topic-locations__collapsible">
      <h2 class="topic-locations__location-title">{{content.title}}</h2>
      <div class="collapse show" id="topic-locations-0" role="tabpanel">
        <p>{{content.description}}</p>
        <h5 class="topic-locations__location-quadrant">LOCATION</h5>
        <p class="topic-locations__location-address">
          <a href="${item.location_link.value}" target="_blank">
            {{content.location}}
            <i class="fa fa-external-link"></i>
          </a>
        </p>
        <h5 class="topic-locations__distance-title">
          <i class="fa fa-clock-o"></i>Distance From:
        </h5>
        <ul class="topic-locations__distance-list">
          <li
            v-for="(location, index) in content.locations"
            :key="index"
            class="topic-locations__distance-list-item"
          >
            <div class="row">
              <div
                class="col-8 col-md-7 topic-locations__distance-list-label"
              >{{location.title}}</div>
              <div class="col-4 col-md-5 topic-locations__distance-list-value">
                <i class="fa fa-map-marker"></i>
                {{location.miles}}.
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import { flatten } from "../models/key_location";

export default {
  name: "KeyLocations",
  props: {
    locationData: Array
  },
  data: () => ({ content: "" }),
  mounted: function() {
    this.content = flatten(this.locationData[0]);
  }
};
</script>