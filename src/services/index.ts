interface PageInterface {
  code: Number
  content: String
}

export interface CrawlerInterface {
  content(url: String): String
}
