import { AxiosInstance } from 'axios'
import { CrawlerInterface } from '../index'

export class Requestor implements CrawlerInterface {
  request: AxiosInstance

  constructor (axios: AxiosInstance) {
    this.request = axios
  }

  content(url: String): String {
    return ""
  }
}
