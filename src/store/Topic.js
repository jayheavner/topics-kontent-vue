import {
  Client
} from '../Client.js';
import {
  takeUntil
} from 'rxjs/operators';
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
    if (localStorage.topic !== undefined) {
      content = JSON.parse(localStorage.topic);
      this.notifyChange();
    } else {
      debugger;

      let query = Client.item(codeName).depthParameter(10);

      query
        .toObservable()
        .pipe(takeUntil(this.observableUnsubscribe))
        .subscribe(response => {
          debugger;
          content = response.item;
          localStorage.topic = JSON.stringify(content);
          this.notifyChange();
        });
    }
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

export {
  TopicStore
};