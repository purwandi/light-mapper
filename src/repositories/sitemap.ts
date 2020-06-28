import { SiteMap } from '../domain'
import { SiteMapStorage } from '../storage'

export class SiteMapRepositories {
  storage: SiteMapStorage

  constructor(storage: SiteMapStorage) {
    this.storage = storage
  }

  save(sitemap: SiteMap): Error {
    return null
  }

  get(): Array<SiteMap> {
    return this.storage.SiteMap
  }
}
