import { SiteMap} from '../domain'

export class SiteMapStorage {
  SiteMap: Array<SiteMap>

  static instance(): SiteMapStorage {
    return new this
  }
}
