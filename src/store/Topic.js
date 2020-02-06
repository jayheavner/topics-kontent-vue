import { Client } from '../Client.js';
import { takeUntil } from 'rxjs/operators';
import BaseStore from './Base';
import KeyLocation from '../models/key_location';

let content = '';

class Topic extends BaseStore {
  constructor() {
    super();
  }

  // Actions
  fetchFromCMS(codeName) {
    console.log(`codName > ${codeName}`);
    let query = Client.item(codeName).depthParameter(5);

    query
      .queryConfig({
        richTextResolver: item => {
          debugger;
          if (item.system.type === 'key_location') {
            //return KeyLocation.richTextResolver(item);
            let html = `<div class="topic-locations__collapsible">
          <h2 class="topic-locations__location-title">${item.title.value}</h2>
          <div class="collapse show" id="topic-locations-0" role="tabpanel">
            <p>
              ${item.description.value}
            </p>
            <h5 class="topic-locations__location-quadrant">LOCATION</h5>
            <p class="topic-locations__location-address">
              <a
                href="${item.location_link.value}"
                target="_blank"
              >
                ${item.location.value}
                <i class="fa fa-external-link"></i>
              </a>
            </p>
            <h5 class="topic-locations__distance-title">
              <i class="fa fa-clock-o"></i>Distance From:
            </h5>
            <ul class="topic-locations__distance-list">
              <li class="topic-locations__distance-list-item">
                <div class="row">
                  <div class="col-8 col-md-7 topic-locations__distance-list-label">${item.distance_1__title.value}</div>
                  <div class="col-4 col-md-5 topic-locations__distance-list-value">
                    <i class="fa fa-map-marker"></i>${item.distance_1__miles.value}.
                  </div>
                </div>
              </li>
              <li class="topic-locations__distance-list-item">
                <div class="row">
                  <div class="col-8 col-md-7 topic-locations__distance-list-label">${item.distance_2__title.value}</div>
                  <div class="col-4 col-md-5 topic-locations__distance-list-value">
                    <i class="fa fa-map-marker"></i>${item.distance_2__miles.value}.
                  </div>
                </div>
              </li>
              <li class="topic-locations__distance-list-item">
                <div class="row">
                  <div class="col-8 col-md-7 topic-locations__distance-list-label">${item.distance_3__title.value}</div>
                  <div class="col-4 col-md-5 topic-locations__distance-list-value">
                    <i class="fa fa-map-marker"></i>${item.distance_3__miles.value}.
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>`;
            return html;
          } else if (item.system.type === 'schedule_item') {
            debugger;
            let html = `<div class="schedule-exhibitors__event-card">
            <p class="eyebrow event-card__date">XXX_DATE_XXX</p>
            <h3 class="event-card__title">
              <a href="XXX_URL_XXX">XXX_TITLE_XXX</a>
            </h3>
            <p class="eyebrow eyebrow--small event-card__track-title">Location</p>
            <p class="small event-card__venue">XXX_LOCATION_XXX</p>
            <button
              class="btn ces-btn ces-btn--round agenda-btn-add"
              data-id="612962"
              data-toggle="modal"
              data-target="#modal-message"
            >
              <i class="fa fa-plus"></i>Add to my agenda
            </button>
          </div>`;
            return html;
          } else {
            console.log(item.system.type);
            return `Non-existing resolver.`;
          }
        }
      })
      .toObservable()
      .pipe(takeUntil(this.observableUnsubscribe))
      .subscribe(response => {
        content = response.item;
        // let l = content.keyLocations.resolveHtml();
        //content.keyLocations = content.keyLocations.resolveHtml();
        //response.item.SectionContent.resolveHtml();
        this.notifyChange();
      });
  }

  // Methods
  get() {
    return content;
  }

  fetchHomePageContent() {
    this.fetchFromCMS('home');
  }
}

let TopicStore = new Topic();

export { TopicStore };
