// Kentico Kontent
import { DeliveryClient, TypeResolver } from '@kentico/kontent-delivery';

const projectId = process.env.VUE_APP_PROJECT_ID;

// models
// eslint-disable-next-line no-unused-vars
import { Topic } from './models/topic';
import { KeyLocation, KeyLocationDistance } from './models/key_location';
import { ScheduleItem } from './models/schedule_item';
import {Video} from './models/video';
import { Speaker } from './models/speaker';
import { SuccessStory } from './models/success_story';

// configure type resolvers
let typeResolvers = [
  new TypeResolver('topic', () => new Topic()),
  new TypeResolver('key_location', () => new KeyLocation()),
  new TypeResolver('key_location_distance', () => new KeyLocationDistance()),
  new TypeResolver('schedule_item', () => new ScheduleItem()),
  new TypeResolver('video', () => new Video()),
  new TypeResolver('schedule_and_exhibitor_items', () => new Speaker()),
  new TypeResolver('success_story', () => new SuccessStory()),
];

let Client = new DeliveryClient({
  projectId: projectId,
  typeResolvers: typeResolvers
});


export {
  Client
};