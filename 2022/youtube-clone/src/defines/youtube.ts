export interface YoutubeVideo {
  id: string;
  etag: string;
  kind: string;
  snippet: {
    publishedAt: string;
    title: string;
    description: string;
    thumbnails: {
      default: Thumbnail;
      medium: Thumbnail;
      high: Thumbnail;
      standard: Thumbnail;
    };
    channelId: string;
    channelTitle: string;
    tags: string[];
    categoryId: number;
  };
}

export interface Thumbnail {
  url: string;
  width: number;
  height: number;
}

export interface PageInfo {
  totalResults: number;
  resultsPerPage: number;
}
