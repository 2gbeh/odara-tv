function lightMode(directory = './css/moonlite.css') {
  const hr = new Date().getHours(),
  oldHead = document.querySelector('head').innerHTML,
	newHead = oldHead.replace(directory, '');
  if (hr >= 7 && hr <= 17) {
    document.querySelector('head').innerHTML = newHead;
    document.querySelector('aside #svgg img').src = 'typeface-b.png';
    return true;
  }
}

async function shareData (title, text, url) {
  // MUST be running on a server
  
  var href = window.location.href,
  noreq = href.split('?')[0],
  nohash = noreq.split('#')[0],
  dir = nohash.split('/').pop(),
  url = 'https://2gbeh.github.io/odara-tv/' + dir;

  const data = {title: title, text: text, url: url};
  // console.log(data);
  if (navigator.canShare) {
    // remove repeat url after ? (smart)
    //data.url = '?' + data.url.split('?')[1];
    navigator.share(data)
    .then((data) => console.log('File share successful!', data))
    .catch((err) => console.log('File share unsuccessful!', err));
  } else {
    prompt(data.text, data.url);
  }
};
