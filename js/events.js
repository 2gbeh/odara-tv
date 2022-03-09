// Blog Controller
function getBlogs (data) {
  data = JSON.parse(data)['root'];
  asideTile(data);
  noScriptHook(data);
  const datalist = document.querySelector('header #hint'),
  card = document.querySelector('main #card'),
  pager = document.querySelector('main #pager');  
  var blog = routeSwitch(data), li = '', dl = '', n = 1;
  // blog.reverse();
  blog.map(function(e, i) {
    dl += `<option value="${e.title}" />`
    li += getBlog(e, i, n);
    n++;
  });

  datalist.innerHTML = dl;
  card.innerHTML = `<ul data-numrows=${n}>${li}</ul>`;
  if (n <= 25) pager.style.display = 'none';
}

function getBlog (row, id, sn) {
  li = '<li itemscope itemtype="https://schema.org/CreativeWork" id="b'+ id +'">\
    <div itemprop="image" class="thumbnail" style="background-image: url(./'+ Context.dir_blog + row.thumbnail +');">\
      <sup itemprop="identifier">#'+ sn +'</sup>\
      <sub '+ getSubAttrib(row.status) + '>'+ row.subtitle +'</sub>\
    </div>\
    <article>\
      <div class="headline">\
        '+ getHeadline(row) +'\
      </div>\
      <div class="byline">\
        '+ getByline(row) +'\
      </div>\
      <div itemprop="abstract" class="summary">\
        '+ getSummary(row) +'\
      </div>\
    </article>\
    <div class="activity">\
      <table border="0" width="100%">\
        <tr>\
          <td>\
            '+ getActivity1(row.posted) +'\
          </td>\
          <td>\
            '+ getActivity2(row) +'\
          </td>\
          <td>\
            '+ getActivity3(row) +'\
          </td>\
          <td>\
            '+ getActivity4(row.status) +'\
          </td>\
          <td>\
            '+ getActivity5(row) +'\
          </td>\
        </tr>\
      </table>\
    </div>\
  </li>';
  // advert placement
  if (sn % 4 == 0) {
    li +=  newKite.getKite();
    //cli(newKite.id)
  }
  //cli(li);
  return li;
}

function getSubAttrib(status) {
  const Itemprop = Enums.subProp, Tooltip = Enums.subTip;
  var res = `itemprop="${Itemprop[status]}" title="${Tooltip[status]}"`;
  //cli(res);
  return res;
}

function getHeadline(row) {
  const Tooltip = Enums.act5Tip;
  var href = `href="${row.url}" target="_blank"`,
  title = `title="${Tooltip[row.status]}"`,
  res = `<a itemprop="headline" ${href} ${title}>${row.title}</a>`;
  //cli(res);
  return res;
}

function getByline(row) {  
  const Itemprop = Enums.bylProp, Tooltip = Enums.bylTip;
  var attrib = `itemprop="${Itemprop[row.status]}" title="${Tooltip[row.status]}"`, 
  res = '';
  tags = row.tags.split(',');
  tags.map((e) => res += `<a ${UTILS.googleSearch(e)} ${attrib}>${e.trim()}</a>`);
  //cli(res);
  return res;
}

function getSummary(row) {
  var res = row.summary, limit = 160;
  if (res.length > limit)
    res = `${row.summary.substr(0, limit)}<a>...</a>`;
  //cli(res);
  return res;    
}

function getActivity1(posted) {
  var t = `<time itemprop="datePublished" datetime="${posted}">${UTILS.shortDate(posted)}</time>`,
  i = `<i class="fi fi-rs-clock" title="${posted}"></i>`,
  p = `<p title="${posted}">${t}<p>`,
  res = i + p;
  //cli(res);
  return res;  
}

function getActivity2(row) {
  const Icon = Enums.act2Ico, Tooltip = Enums.act2Tip;
  var i = `<i class="${Icon[row.status]}" title="${Tooltip[row.status]}"></i>`,
  p = `<p>${row.meta}</p>`,
  res = i + p;
  //cli(res);
  return res;
}

function getActivity3(row) { 
  const Path = Enums.path, Prefix = Enums.act3Pfx,
  text  = `${Prefix[row.status]} ${row.title.replaceAll('&apos;','%27')}`,
  url = `${Context.root}${Context.req}${Path[row.status]}/${UTILS.urlTitle(row.title)}`,
  data = { title: `${Context.appname}`, text: text, url: url };  
  
  var i = '<i class="fi fi-rs-share" title="Share"></i>', 
  p = '<p>Share</p>',
  res = `<a onClick="shareData('${data.title}', '${data.text}', '${data.url}')">${i}${p}</a>`;
  //cli(res);
  return res;
}

function getActivity4(status) {
  const Icon = Enums.act4Ico, Tooltip = Enums.act4Tip;
  var i = `<i class="${Icon[status]}" title="${Tooltip[status]}"></i>`,
  p = `<p>${Tooltip[status]}</p>`,
  res = i + p;
  //cli(res);
  return res;
}

function getActivity5(row) {
  const Icon = Enums.act5Ico, Tooltip = Enums.act5Tip;
  var i = `<i class="${Icon[row.status]}" title="${Tooltip[row.status]}"></i>`,
  p = `<p>${Tooltip[row.status]}</p>`,
  res = `<a itemprop="url" href="${row.url}" target="_blank">${i}${p}</a>`;
  //cli(res);
  return res;
}

function asideTile(data) {
  const head = document.querySelector('head'),
  tile = document.querySelector('aside #tile'),
  Status = Enums.status,
  Tooltip = Enums.act5Tip,
  Fab = Enums.act5Ico,
  Icon = Enums.navIco,
  Path = Enums.path;  
  
  var picked = [], listItems = '', listItem = '', td = '';
  var j = 0, e = {}, href = '';
  for  (let i = 0; i < data.length; i++) {
    e = data[i];
    if (! picked.includes(e.status)) {
      picked.push(e.status);
      
      j += 1;
      listItem = '{"@type": "ListItem", ';
      listItem += '"position": "'+ j +'", ';
      listItem += '"item": {"@type": "Movie", ';
      listItem += '"url": "'+ Context.root + Context.req + UTILS.urlTitle(e.title) +'", ';
      listItem += '"name": "'+ e.title +'", ';
      listItem += '"image": "'+ Context.root + Context.dir_blog + e.thumbnail +'", ';
      listItem += '"dateCreated": "'+ e.posted +'", ';
      listItem += '"director": {"@type": "Person", "name": "'+ UTILS.bylineCpt(e.tags) +'"}';
      listItem += '}},';
      listItems += listItem;
   
      href = Enums.pages[e.status];
      href = Context.req + Path[e.status];
      td += '<td itemscope itemtype="https://schema.org/CreativeWork">\
        <div itemprop="image" class="thumbnail" style="background-image: url(./'+ Context.dir_blog + e.thumbnail +');">\
          <sub>\
            <a itemprop="url" href="'+ e.url +'" target="_blank" title="'+ Tooltip[e.status] +'">\
              <i class="'+ Fab[e.status] +'"></i>\
            </a>\
          </sub>\
        </div>\
        <article>\
          <div class="activity">\
            <var>\
              <i class="fi fi-rs-clock"></i>\
              <p><time itemprop="datePublished" datetime="'+ e.posted +'">'+ UTILS.shortDate(e.posted) +'</time></p>\
            </var>\
            <var>\
              <a href="'+ href +'">\
                <i class="'+ Icon[e.status] +'"></i>\
                <p itemprop="genre" style="text-decoration: underline;">'+ Status[e.status] +'<p>\
              </a>\
            </var>\
          </div>\
          <div class="headline">\
            <a itemprop="headline" href="'+ e.url +'" target="_blank" title="'+ Tooltip[e.status] +'">\
              '+ UTILS.wordWrap(e.title, 62) +'\
            </a>\
          </div>\
        </article>\
      </td>';

    } 
    if (picked.length == 4) break;
  }
  listItems = listItems.slice(0,-1);
  
  head.innerHTML += `<script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "itemListElement": [${listItems}]
    }
  </script>`; 
  tile.innerHTML = '<table border="0"><tr>'+ td +'</tr></table>';
  //textAreaHook(td);
  //console.dir(listItems, td);
	//return [listItems, td];
}

function noScriptHook (data) {
  return 1;
  const picker = [
    1,16,19,2,13,21,22,24,25,26,
    27,31,32,34,38,39,40,41,42,44,
    47,48,4,11,12,18,23,43,6,20
  ];  
  var li = '', p = 0, n = 1;
  data.map(function(e, i) {
    p = i + 1;
    //if (picker.includes(p)) {
    //if (e.status > 0) {
    //if (e.status == 4) {
    if (e.thumbnail.indexOf('wework') > -1) {
      li += getBlog(e, i, n);
      n++;
    }
  });
  textAreaHook(li);
}

function textAreaHook (value) {  
  const main = document.querySelector('main');
  let = css = 'style="width:100%;height:25em;font-size:12px;"';
  var value_f = value, embed = '';
  
  value_f = value_f.replace(/img-blog/g,'img');
  value_f = value_f.replace(/img-kite/g,'img/kite');
  value_f = value_f.replace('?req=/news','news.html');
  value_f = value_f.replace('?req=/movies','movies.html');
  value_f = value_f.replace('?req=/tvshows','tvshows.html');
  value_f = value_f.replace('?req=/youtube','youtube.html');

  embed = `<textarea ${css}>${value_f}</textarea>`;
  main.innerHTML = embed + main.innerHTML;
}
