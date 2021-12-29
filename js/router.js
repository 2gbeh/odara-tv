"use strict";

function routeTo(path) {
  location.href = `?req=${path}`;
}

function routeMatch (str, substr) {
  var x = str.toLowerCase(), y = substr.toLowerCase();
  if (x.indexOf(y) > -1)
    return true;
}

function routeSwitch(data) {
  const STATUS = ['','news','movies','tvshows','youtube'];
  var href = window.location.href, blog = [];
  if (href.indexOf('?') > 0) {
    var q = href.split('?'), p = q[1].split('/'), param = p[1].trim(), subParam = '';    
    var i = STATUS.indexOf(param);
    if (i == 0) {// req=/
      blog = data;
    } else if (i > 0) { // req=/news
      blog = data.filter((e) => e.status == i);
      if (p.length == 3) { // req=/news/:title
        subParam = p[2].trim();
        blog = data.filter((e) => e.status == i && routeMatch(e.title, subParam));
      }
    } else {// req=/:title
      blog = data.filter((e) => routeMatch(e.title, param));
    }
  }
  else
    blog = data;

  //console.dir(blog, href, p, i);
  return blog;
}

// var data = [
//   {title: "Apple", status: 1, date: "2021-12-24", id: 1},
//   {title: "Ball", status: 2, date: "2021-12-24", id: 2},
//   {title: "Cat", status: 3, date: "2021-12-27", id: 3},
//   {title: "Dog", status: 4, date: "2021-12-27", id: 4}
// ];
// routeSwitch(data);