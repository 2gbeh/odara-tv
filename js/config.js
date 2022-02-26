// Arrow Function (one-liner)
const cli = args => console.log(args);
const apache = () => window.location.hostname === '127.0.0.1' || window.location.hostname === 'localhost';

// Object Literal (state only)
const Context = {
  domain: window.location.hostname,
  server: apache()? 'odara': 'odara-tv',
  root: apache()? 'http://127.0.0.1:5500/': 'https://2gbeh.github.io/odara-tv/',
  appname: 'Odara TV',
  alias: 'Odara',
  title: 'Odara TV',
  caption: 'Tech News, Movies and TV Shows',
  summary: 'Download Odara TV. HWP Labs\' design-first multimedia tech blog.',
  req: '?req=/',
  dir_blog: apache()? 'img-blog/': 'img/',
  dir_kite: apache()? 'img-kite/': 'img/kite/',
  dir_user: apache()? 'img-user/': 'img/user/',
  db_blog: './json/Blog.json',
  db_kite: './json/Kite.json',
  db_user: './json/User.json',
};

const Enums = {
  status: ['','News','Movies','TV Shows','YouTube'],
  path: ['','news','movies','tvshows','youtube'],  
  navIco: ['fi fi-rs-home','fi fi-rs-browser','fi fi-rs-video-camera','fi fi-rs-film','fi fi-rs-play-alt'],  
  pages: ['home.html','news.html','movies.html','tvshows.html','youtube.html'],
  
  subProp: ['','publisher','size','episode','duration'],
  subTip: ['','Source','Size','Episodes','Duration'],  
  
  bylProp: ['','editor','actor','actor','creator'],
  bylTip: ['','Editor','Cast','Cast','Channel'],  
  
  act2Ico: ['','fi fi-rs-interlining','fi fi-rs-star','fi fi-rs-star','fi fi-rs-eye'],
  act2Tip: ['','Pages','Ratings','Ratings','Views'],

  act3Pfx: ['','[READ]','[DOWNLOAD]','[DOWNLOAD]','[WATCH]'],

  act4Ico: ['','fi fi-rs-bookmark','fi fi-rs-thumbtack','fi fi-rs-thumbtack','fi fi-rs-bell'],
  act4Tip: ['','Bookmark','Watchlist','Watchlist','Subscribe'],  

  act5Ico: ['','fi fi-rs-interactive','fi fi-rs-download','fi fi-rs-download','fi fi-rs-play'],
  act5Tip: ['','Read','Download','Download','Watch'],
};

// Async Function
async function fetchData(directory, callback) {
  // MUST be running on a server
  let fileSystem = await fetch(directory);
  let content = await fileSystem.text();
  callback(content);
};  

async function shareData (title, text, url) {
  // MUST be running on a server
  // const data = {title: 'MDN', text: 'Learn web development on MDN!', url: 'https://developer.mozilla.org'}
  const data = {title: title, text: text, url: url}
  // console.log(data);
  if (navigator.canShare) {
    // remove repeat url after ? (smart)
    data.url = '?' + data.url.split('?')[1];
    navigator.share(data)
    .then((data) => console.log('File share successful!', data))
    .catch((err) => console.log('File share unsuccessful!', err));
  } else {
    prompt(data.text, data.url);
  }
};  

// Constructor Function (class)
function Utils()
{
  // const utils = new Utils();
  const Month = ['','Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];	
  
  this.shortDate = function(date) {
    let arr = date.split('-'),
    m = parseInt(arr[1]),
    d = parseInt(arr[2]); 
    return `${Month[m]} ${d}`;
  };	

  this.urlTitle = function(title) {
    return title.replaceAll('&apos;', '%27').
    replaceAll(' ', '_');
  };  

  this.escTitle = function(title) {
    return title.replaceAll('%20', ' ').
    replaceAll('%27', '\'s').
    replaceAll('_', ' ');
    
  };

  this.bylineCpt = function(tags) {
    let arr = tags.split(','),
    cpt = arr[0].trim();
    return cpt; 
  };

  this.wordWrap = function(article, limit = 70) {
    var res = article, limit = limit - 3;
    if (res.length > limit)
      res = `${article.substr(0, limit)}...`;
    return res;
  };  

  this.googleSearch = function(k) {    
    var attr = `href="https://google.com/search?q=${k.trim()}" target="_blank"`;
    return attr;
  };    
}
const UTILS = new Utils();

