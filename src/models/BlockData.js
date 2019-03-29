// class BlockData
export class BlockData {
  constructor({title, titleUrl, subtitle, subtitleUrl, items, time, timeText}) {
    this.title = title;
    this.titleUrl = titleUrl;
    this.subtitle = subtitle;
    this.subtitleUrl = subtitleUrl;
    this.items = (Array.isArray(items)) ? items : [];	// BlockItem Array
    this.time = time;		// DateTime
    this.timeText = timeText;		// DateTime
    // if (new.target === BlockData) {
    // 	throw new TypeError("Cannot construct Abstract instances directly");
    // }
  }
}

// export class BlockItem {
// 	constructor({title, titleUrl, subtitle, subtitleUrl, items}) {
// 		this.title = title;
// 		this.titleUrl = titleUrl;
// 		this.subtitle = subtitle;
// 		this.subtitleUrl = subtitleUrl;
// 	}
// }

// export class BlockItem {
// 	constructor({title, titleUrl, subtitle, subtitleUrl, items}) {
// 		this.title = title;
// 		this.subtitle = subtitle;
// 		this.profiles = profiles;	//ProfileData Array
// 	}
// }