
import { ContentItem, Elements } from '@kentico/kontent-delivery';

/**
 * Generated by '@kentico/kontent-model-generator@3.1.0'
 * Timestamp: Tue Feb 04 2020 13:38:01 GMT-0500 (Eastern Standard Time)
 */
export class SuccessStory extends ContentItem {
        constructor() {
        super({
            propertyResolver: ((elementName) => {
                if (elementName === 'topics_image') {
                    return 'topicsImage';
                }
                if (elementName === 'callout_text') {
                    return 'calloutText';
                }
                if (elementName === 'callout_stat') {
                    return 'calloutStat';
                }
                return elementName;
            })
        });
    }
}

export function flatten(item) {
    if (!item) return null;
    debugger;
    return {
      title: item.title.value,
      summary: item.summary.value,
      calloutStat: item.calloutStat.value,
      calloutText: item.calloutText.value,
      body: item.body.value,
      url: item.url.value,
      topicsImage: item.topicsImage.value[0].url,
    };
  }