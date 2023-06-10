import Model from "./index";

export default class Ad extends Model {
  //
  static media_base_url =
    "https://raw.githubusercontent.com/2gbeh/odara-tv/main/img/kite/";

  static getUuid = (ad) => super.getUuid(ad.img);
}
