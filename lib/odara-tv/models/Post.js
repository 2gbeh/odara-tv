import Model from "./index";

export const STATUS = {
  text: [null, "News", "Movie", "TV Show", "Youtube"],
  icon: [null, "newspaper", "video", "film", "youtube"],
};


export default class Post extends Model {
  //
  static resource_url =
    "https://raw.githubusercontent.com/2gbeh/odara-tv/main/json/Blog.json";

  static media_base_url =
    "https://raw.githubusercontent.com/2gbeh/odara-tv/main/img/";

  static getThumbnail = (thumbnail) => this.media_base_url + thumbnail;

  static getStatusText = (status) => STATUS.text[status];

  static getStatusIcon = (status) => STATUS.icon[status];

  static getUpdatedAt = (date) => this.formatDate(date);

  static getCreatedAt = (posted) => this.formatDate(posted);

  static getUuid = (post) => super.getUuid(post.thumbnail);
}
