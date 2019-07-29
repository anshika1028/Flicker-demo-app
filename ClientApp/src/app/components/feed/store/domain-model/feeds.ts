export class Feeds {
        author: string;
        link: string;
        media: {
            m: string
        };
        tags: any;
}
export class FeedsWrapper {
  title: string;
  description: string;
  items: Feeds[];
}
