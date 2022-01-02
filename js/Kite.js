// Class
function Kite()
{
  this.get = function(i = -1){
    const data = this.data,
    r = Math.floor(Math.random() * data.length),
    e = i < 0? data[r]: data[i - 1],
    res = '<li class="kite">\
        <a href="'+ e.url +'" target="_blank" title="Visit Advertiser">\
          <div class="thumbnail" style="background-image: url(./'+ Context.dir_kite + e.img +');">\
            <sub>AD</sub>\
          </div>\
        </a>\
      </li>';
    return res;
  };

  this.data = [
    {
      "img": "yung6ix.jpeg",
      "org": null,
      "who": null,
      "tel": null,
      "url": "https://tooxclusive.com",
      "status": 0,
      "date": "2022-01-02"      
    },
    {
      "img": "naijaloaded.jpg",
      "org": null,
      "who": null,
      "tel": null,
      "url": "https://naijaloaded.com",
      "status": 0,
      "date": "2022-01-02"      
    },
    {
      "img": "smartaccess.png",
      "org": null,
      "who": null,
      "tel": null,
      "url": "https://wa.me/2347063270979",
      "status": 0,
      "date": "2022-01-02"      
    },
    {
      "img": "apexloaded.png",
      "org": null,
      "who": null,
      "tel": null,
      "url": "https://wa.me/2348169960927",
      "status": 0,
      "date": "2022-01-02"      
    },
    {
      "img": "codedruns.jpeg",
      "org": null,
      "who": null,
      "tel": null,
      "url": "https://codedruns.com",
      "status": 0,
      "date": "2022-01-02"      
    },  
    {
      "img": "namecheap.png",
      "org": null,
      "who": null,
      "tel": null,
      "url": "https://namecheap.com",
      "status": 0,
      "date": "2022-01-02"      
    }      
  ];
}
const KITE = new Kite();