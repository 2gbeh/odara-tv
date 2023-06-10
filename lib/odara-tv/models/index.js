import parse from "html-react-parser";

import { MONTH } from "../constants";

export default class Model {
  //
  static parseHtml = (text) => parse(text);

  static getUuid = (id) => id.toString();

  static formatDate(dt) {
    const d = new Date(dt);
    let j = d.getDate(),
      n = d.getMonth(),
      Y = d.getFullYear(),
      M = MONTH[n].slice(0, 3);

    return `${M} ${j}, ${Y}`;
  }
}
