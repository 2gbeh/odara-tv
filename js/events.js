// JavaScript Document
async function fetchBlog (directory, callback) {
		// MUST be running on a server
		let fileSystem = await fetch(directory);
		let content = await fileSystem.text();
		callback(content);
};  

function getBlog (data) {
  const datalist = document.querySelector('header #hint');
  const card = document.querySelector('main #card');
  const pager = document.querySelector('main #pager');
  var blog = JSON.parse(data)['root'], blog = routeSwitch(blog);
  //blog.reverse();

  var n = 0, li = '', dl = '';
  blog.map(function(e, i) {
    n += 1;
    dl += `<option value="${e.title}" />`
    li += getBlogList(e, n);
  });

  datalist.innerHTML = dl;
  card.innerHTML = `<ul data-numrows=${n}>${li}</ul>`;
  if (n <= 25) pager.style.display = 'none';
}

function getBlogList (row, n) {
  return '<li itemscope itemtype="https://schema.org/CreativeWork">\
    <div itemprop="image" class="thumbnail" style="background-image: url(./img/'+ row.thumbnail +')">\
      <sup itemprop="identifier">#'+ n +'</sup>\
      <sub '+ getSubAttrib(row.status) + '>'+ row.subtitle +'</sub>\
    </div>\
    <article>\
      <div class="headline">\
        '+ getHeadline(row) +'\
      </div>\
      <div '+ getBylineAttrib(row.status) +' class="byline">\
        '+ getByline(row.tags) +'\
      </div>\
      <div itemprop="abstract" class="summary">\
        '+ getSummary(row.summary, row.url) +'\
      </div>\
    </article>\
    <div class="activity">\
      <table border="0" width="100%">\
        <tr>\
          <td>\
            '+ getActivity1(row.posted) +'\
          </td>\
          <td>\
            '+ getActivity2(row.status, row.meta) +'\
          </td>\
          <td>\
            '+ getActivity3(row.status, row.title) +'\
          </td>\
          <td>\
            '+ getActivity4(row.status) +'\
          </td>\
          <td>\
            '+ getActivity5(row.status, row.url) +'\
          </td>\
        </tr>\
      </table>\
    </div>\
  </li>';
}

function getSubAttrib(status) {
  const itemprop = ['','publisher','size','episode','duration'];
  tooltip = ['','Source','Size','Episodes','Duration'];
  return `itemprop="${itemprop[status]}" title="${tooltip[status]}"`;
}

function getHeadline(e) {
  const tooltip = ['','Read','Download','Download','Watch'];
  return `<a itemprop="headline" href="${e.url}" target="_blank" title="${tooltip[e.status]}">${e.title}</a>`;
}

function getBylineProp(status) {
  
  return itemprop[status];
}

function getBylineAttrib(status) {
  const itemprop = ['','editor','actor','actor','creator'],
  tooltip = ['','Editor','Cast','Cast','Channel'];
  return `itemprop="${itemprop[status]}" title="${tooltip[status]}"`;
}

function getByline(tags) {  
  let buf = '';
  tags = tags.split(',');
  tags.map((e, i) => {
    buf += '<a itemprop="author" class="link">'+ e.trim() +'</a>';
  });
  return buf;
}

function getSummary(summary, url) {
  const len = 160;  
  if (summary.length > len) {
    let buf = summary.substr(0, len);
    return `${buf}<a href="${url}" target="_blank">[...]</a>`;
  }
  else
    return summary;
}

function getActivity1(posted) {
	const months = ['','Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  let dateArray = posted.split('-'),
  m = parseInt(dateArray[1]),
  d = parseInt(dateArray[2]),
  i = '<i class="fi fi-rs-clock" title="Date"></i>',
  p = `<p><time itemprop="datePublished" datetime="${posted}">${months[m]} ${d}</time><p>`;
  return i + p;
}

function getActivity2(status, meta) {
  let i = p = '';
  switch (status) {
    case  1:
      i = '<i class="fi fi-rs-interlining" title="Average Page Scrolls"></i>';
      break;
    case  4:
      i = '<i class="fi fi-rs-eye" title="Views"></i>';
      break;
    default:
      i = '<i class="fi fi-rs-star" title="Rating"></i>';
  }
  p = '<p>'+ meta +'</p>';
  return i + p;
}

function getActivity3(status, title) { 
  title = title.replaceAll(' ','_');  
  const DOMAIN = window.location.hostname,
  SUBDIR = 'udara-tv/?req=',
  STATUS = ['','news','movies','tvshows','youtube'];
  let uri = `${DOMAIN}/${SUBDIR}${STATUS[status]}/${title}`,
  clk = `onClick="prompt('', '${uri}')"`,
  i = '<i class="fi fi-rs-share" title="Share"></i>',
  p = '<p>Share</p';
  return `<a ${clk}>${i + p}</a>`;
}

function getActivity4(status) {
  let i = p = '';
  switch (status) {
    case  1:
      i = '<i class="fi fi-rs-bookmark" title="Bookmark"></i>';
      p = '<p>Bookmark</p>';
      break;
    case  4:
      i = '<i class="fi fi-rs-bell" title="Subscribe"></i>';
      p = '<p>Subscribe</p>';
      break;
    default:
      i = '<i class="fi fi-rs-thumbtack" title="Watchlist"></i>';
      p = '<p>Watchlist</p>';
  }
  return i + p;
}

function getActivity5(status, url) {
  let i = p = '';
  switch (status) {
    case  1:
      i = '<i class="fi fi-rs-interactive" title="Read"></i>';
      p = '<p>Read</p>';
      break;
    case  4:
      i = '<i class="fi fi-rs-play" title="Watch"></i>';
      p = '<p>Watch</p>';
      break;
    default:
      i = '<i class="fi fi-rs-download" title="Download"></i>';
      p = '<p>Download</p>';
  }

  return `<a itemprop="url" href="${url}" target="_blank">${i + p}</a>`;
}

