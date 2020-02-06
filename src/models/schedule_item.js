import { ContentItem, Elements } from '@kentico/kontent-delivery';

/**
 * Generated by '@kentico/kontent-model-generator@3.1.0'
 * Timestamp: Tue Feb 04 2020 13:38:01 GMT-0500 (Eastern Standard Time)
 */
export class ScheduleItem extends ContentItem {
  constructor() {
    super({
      propertyResolver: elementName => {
        if (elementName === 'session_id') {
          return 'sessionId';
        }
        return elementName;
      }
    });
  }
}

export function flatten(items) {
  if (!items) return null;

  let schedules = [];

  for (const item of items) {
    schedules.push(item.sessionId.value);

  }
  return schedules;
}