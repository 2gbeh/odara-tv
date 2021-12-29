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
  return '<li>\
    <div class="thumbnail" style="background-image: url(./img/'+ row.thumbnail +')">\
      <sup>#'+ n +'</sup>\
      <sub title="'+ getSubTooltip(row.status) + '">'+ row.subtitle +'</sub>\
    </div>\
    <article>\
      <div class="headline">\
        <a '+ getAnchorAttrib(row.status, row.url) +'>\
          '+ row.title +'\
        </a>\
      </div>\
      <div class="byline" title="'+ getBylineTooltip(row.status) +'">\
        '+ getByline(row.tags) +'\
      </div>\
      <div class="summary">\
        '+ getSummary(row.summary, row.url) +'\
      </div>\
    </article>\
    <div class="activity">\
      <table border="0" width="100%">\
        <tr>\
          <td>\
            <i class="fi fi-rs-clock" title="Date"></i>\
            <p>'+ getPosted(row.posted) +'</p>\
          </td>\
          <td>\
            '+ getMeta(row.status, row.meta) +'\
          </td>\
          <td>\
            <i '+ getAction1(row.status, row.title) +' class="fi fi-rs-share" title="Share"></i>\
            <p>Share</p>\
          </td>\
          <td>\
            '+ getAction2(row.status) +'\
          </td>\
          <td>\
            '+ getAction3(row.status) +'\
          </td>\
        </tr>\
      </table>\
    </div>\
  </li>';
}

function getSubTooltip(status) {
  const tooltip = ['','Source','Size','Episode','Duration'];
  return tooltip[status];
}

function getBylineTooltip(status) {
  const tooltip = ['','Editor','Cast','Cast','Channel'];
  return tooltip[status];
}

function getByline(tags) {
  let buf = '';
  tags = tags.split(',');
  tags.map((e, i) => {
    buf += '<a class="link">'+ e.trim() +'</a>';
  });
  return buf;
}

function getAnchorAttrib(status, url) {
  const tooltip = ['','Read','Download','Download','Watch'];
  return `href="${url}" target="_blank" title="${tooltip[status]}"`;
}

function getSummary(summary, url) {
  const len = 160;
  buf = '';
  if (summary.length > len)
    return `${summary.substring(0, len)}<a href="${url}" target="_blank">[...]</a>`;
  else
    return `${summary}`;
}

function getPosted(date) {
	const months = ['','Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  let dateArray = date.split('-');
  let m = parseInt(dateArray[1]);
  let d = parseInt(dateArray[2]);
  return `${months[m]} ${d}`;
}

function getMeta(status, meta) {
  let buf = '';
  switch (status) {
    case  1:
      buf = '<i class="fi fi-rs-interlining" title="Average Page Scrolls"></i>';
      break;
    case  4:
      buf = '<i class="fi fi-rs-eye" title="Views"></i>';
      break;
    default:
      buf = '<i class="fi fi-rs-star" title="Rating"></i>';
  }
  return `${buf} <p>${meta}</p>`;
}

function getAction1(status, title) { 
  const DOMAIN = window.location.hostname;
  const STATUS = ['','news','movies','tvshows','youtube'];
  title = title.replaceAll(' ','_');
  return `onClick=prompt('','${DOMAIN}/${STATUS[status]}/${title}')`;
}

function getAction2(status) {
  let buf = '';
  switch (status) {
    case  1:
      buf = '<i class="fi fi-rs-bookmark" title="Bookmark"></i>\
        <p>Bookmark</p>';
      break;
    case  4:
      buf = '<i class="fi fi-rs-bell" title="Subscribe"></i>\
        <p>Subscribe</p>';
      break;
    default:
      buf = '<i class="fi fi-rs-thumbtack" title="Watchlist"></i>\
        <p>Watchlist</p>';
  }
  return buf;
}

function getAction3(status) {
  let buf = '';
  switch (status) {
    case  1:
      buf = '<i class="fi  fi-rs-interactive" title="Read"></i>\
        <p>Read</p>';
      break;
    case  4:
      buf = '<i class="fi fi-rs-play" title="Watch"></i>\
        <p>Watch</p>';
      break;
    default:
      buf = '<i class="fi fi-rs-download" title="Download"></i>\
        <p>Download</p>';
  }
  return buf;
}

