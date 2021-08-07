import {DataStorage} from '~src/app/storage/DataStorage'

export abstract class AppStorage {
  static get hasAcceptedCookies() {
    return DataStorage.bind('@hasAcceptedCookies').asBoolean()
  }
}
