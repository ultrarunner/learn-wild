export interface Feed {
  status: string;
  feed: FeedInfo;
  items: Array<FeedEntry>;
}

export interface FeedInfo {
  title: string;
  link: string;
  author: string;
  description: string;
  image: string;
}

export interface FeedEntry {
  title: string;
  link: string;
  guid: string;
  pubDate: Date;
  categories: Array<string>;
  author: string;
  thumbnail: string;
  description: string;
  content: string;
  enclosure: FeedEnclosure;
  today: boolean;
}

export interface FeedEnclosure {
    duration: Number;
    length: Number;
    link: string;
    type: string;
}
