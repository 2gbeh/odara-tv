// Kite Controller
class Kite {

  constructor(data = null) {
    this.data = data !== null? data: this.getData();
    this.size = this.data.length;
    this.id = -1;
  }

  getKites () {
    const kites = document.querySelector('main #kites');
    var li = '', n = 1;    
    this.data.map(function(e, i) {
      li += this.strKite(e, i, n);
      n++;
    }, this);
    kites.innerHTML = `<ul data-numrows=${n}>${li}</ul>`;
  }

  getKite (id = -1) {
    const i = id < 0? Math.floor(Math.random() * this.size): id,
    e = this.data[i], 
    n = 1,
    li = this.strKite(e, i, n);
    this.id = i;
    return li;
  }

  strKite (row, id, sn) {
    var li = '<li class="kite" id="k'+ id +'">\
      <a href="'+ row.url +'" target="_blank" title="Visit Advertiser">\
        <div class="thumbnail" style="background-image: url(./'+ Context.dir_kite + row.img +');">\
          <sup>#'+ sn +'</sup>\
          <sub>AD</sub>\
        </div>\
      </a>\
    </li>';
    return li;
  }

  getData() {
    return [
      {
        "img": "kite0.jpg",
        "org": null,
        "who": null,
        "tel": null,
        "url": "https://wa.me/2348169960927",
        "status": 0,
        "date": "2022-01-07"
      }, 
      {
        "img": "arma.png",
        "org": null,
        "who": null,
        "tel": null,
        "url": "https://wa.me/2348169960927",
        "status": 0,
        "date": "2022-01-19"
      },        
      {
        "img": "kesh.jpeg",
        "org": null,
        "who": null,
        "tel": null,
        "url": "tel:+23470022555374",
        "status": 0,
        "date": "2022-01-03"
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
        "img": "namecheap.png",
        "org": null,
        "who": null,
        "tel": null,
        "url": "https://namecheap.com",
        "status": 0,
        "date": "2022-01-02"      
      },
      {
        "img": "aqskill.png",
        "org": null,
        "who": null,
        "tel": null,
        "url": "https://aqskill.com",
        "status": 0,
        "date": "2022-01-03"
      }, 
      {
        "img": "paxful.png",
        "org": null,
        "who": null,
        "tel": null,
        "url": "https://paxful.com",
        "status": 0,
        "date": "2022-01-03"
      },          
      {
        "img": "asidehost.jpg",
        "org": null,
        "who": null,
        "tel": null,
        "url": "https://asidehost.com",
        "status": 0,
        "date": "2022-01-03"      
      },
      {
        "img": "cyberpolice.jpg",
        "org": null,
        "who": null,
        "tel": null,
        "url": "https://wa.me/2347065017110",
        "status": 0,
        "date": "2022-01-03"      
      },
      {
        "img": "datacamp.png",
        "org": null,
        "who": null,
        "tel": null,
        "url": "https://datacamp.com",
        "status": 0,
        "date": "2022-01-03"      
      },
      {
        "img": "edotechpark1.jpg",
        "org": null,
        "who": null,
        "tel": null,
        "url": "https://edotechpark.com",
        "status": 0,
        "date": "2022-01-03"
      }, 
      {
        "img": "edotechpark2.jpg",
        "org": null,
        "who": null,
        "tel": null,
        "url": "https://edotechpark.com",
        "status": 0,
        "date": "2022-01-03"
      },          
      {
        "img": "futureacademy.jpg",
        "org": null,
        "who": null,
        "tel": null,
        "url": "https://futureacademy.africa",
        "status": 0,
        "date": "2022-01-03"      
      },
      {
        "img": "googleux.png",
        "org": null,
        "who": null,
        "tel": null,
        "url": "https://coursera.org/professional-certificates/google-ux-design",
        "status": 0,
        "date": "2022-01-03"      
      },
      {
        "img": "gtbapp.png",
        "org": null,
        "who": null,
        "tel": null,
        "url": "https://gtbank.com/personal-banking/ways-to-bank/mobile-app",
        "status": 0,
        "date": "2022-01-03"      
      },
      {
        "img": "madecorp.jpg",
        "org": null,
        "who": null,
        "tel": null,
        "url": "https://wa.me/2348165406369",
        "status": 0,
        "date": "2022-01-03"
      },          
      {
        "img": "octave.png",
        "org": null,
        "who": null,
        "tel": null,
        "url": "https://octaveanalytics.com",
        "status": 0,
        "date": "2022-01-03"      
      },
      {
        "img": "quickshop.jpg",
        "org": null,
        "who": null,
        "tel": null,
        "url": "tel:+2348122057982",
        "status": 0,
        "date": "2022-01-03"      
      },
      {
        "img": "ubaleo.jpg",
        "org": null,
        "who": null,
        "tel": null,
        "url": "https://ubagroup.com/nigeria/personal-banking/digital-banking/chat-with-leo/",
        "status": 0,
        "date": "2022-01-03"
      },
      {
        "img": "whogohost1.png",
        "org": null,
        "who": null,
        "tel": null,
        "url": "https://whogohost.ng",
        "status": 0,
        "date": "2022-01-03"
      }, 
      {
        "img": "whogohost2.png",
        "org": null,
        "who": null,
        "tel": null,
        "url": "https://whogohost.ng",
        "status": 0,
        "date": "2022-01-03"
      },
      {
        "img": "whogohost3.jpg",
        "org": null,
        "who": null,
        "tel": null,
        "url": "https://whogohost.ng",
        "status": 0,
        "date": "2022-01-07"
      },      
      {
        "img": "worldremit.png",
        "org": null,
        "who": null,
        "tel": null,
        "url": "https://worldremit.com",
        "status": 0,
        "date": "2022-01-03"
      },        
      {
        "img": "kulvix.jpg",
        "org": null,
        "who": null,
        "tel": null,
        "url": "https://wa.me/2348100201257",
        "status": 0,
        "date": "2022-01-03"
      },
      {
        "img": "24thexp.jpg",
        "org": null,
        "who": null,
        "tel": null,
        "url": "https://wa.me/2348058480134",
        "status": 0,
        "date": "2022-01-03"
      },
      {
        "img": "diamondada.jpg",
        "org": null,
        "who": null,
        "tel": null,
        "url": "https://accessbankplc.com",
        "status": 0,
        "date": "2022-01-03"
      },
      {
        "img": "skillsrave.jpg",
        "org": null,
        "who": null,
        "tel": null,
        "url": "https://wa.me/2348033129445",
        "status": 0,
        "date": "2022-01-03"
      },
      {
        "img": "9jacodekids.jpg",
        "org": null,
        "who": null,
        "tel": null,
        "url": "https://wa.me/2348033129445",
        "status": 0,
        "date": "2022-01-07"
      },
      {
        "img": "9jacodekids2.png",
        "org": null,
        "who": null,
        "tel": null,
        "url": "https://wa.me/2348033129445",
        "status": 0,
        "date": "2022-01-19"
      },      
      {
        "img": "ecobank.png",
        "org": null,
        "who": null,
        "tel": null,
        "url": "https://ecobank.com",
        "status": 0,
        "date": "2022-01-03"
      },
      {
        "img": "onusvti.jpeg",
        "org": null,
        "who": null,
        "tel": null,
        "url": "https://wa.me/2348180495451",
        "status": 0,
        "date": "2022-01-07"
      },
      {
        "img": "kube1.png",
        "org": null,
        "who": null,
        "tel": null,
        "url": "https://kube.academy",
        "status": 0,
        "date": "2022-01-08"
      },
      {
        "img": "kube2.png",
        "org": null,
        "who": null,
        "tel": null,
        "url": "https://kube.academy",
        "status": 0,
        "date": "2022-01-08"
      },
      {
        "img": "jobberman.png",
        "org": null,
        "who": null,
        "tel": null,
        "url": "https://jobberman.com",
        "status": 0,
        "date": "2022-01-13"      
      },
      {
        "img": "jobberman2.png",
        "org": null,
        "who": null,
        "tel": null,
        "url": "https://jobberman.com",
        "status": 0,
        "date": "2022-01-19"      
      },      
      {
        "img": "lastingdynamics.png",
        "org": null,
        "who": null,
        "tel": null,
        "url": "https://lastingdynamics.com",
        "status": 0,
        "date": "2022-01-13"      
      },
      {
        "img": "mitedu.png",
        "org": null,
        "who": null,
        "tel": null,
        "url": "https://professional.mit.edu/digital-plus-programs",
        "status": 0,
        "date": "2022-01-19"
      },
      {
        "img": "biuedu.png",
        "org": null,
        "who": null,
        "tel": null,
        "url": "https://biu.edu.ng/admissions",
        "status": 0,
        "date": "2022-01-19"
      },
      {
        "img": "binance.png",
        "org": null,
        "who": null,
        "tel": null,
        "url": "https://binance.com",
        "status": 0,
        "date": "2022-01-19"
      },
      {
        "img": "presloaded.png",
        "org": null,
        "who": null,
        "tel": null,
        "url": "https://wa.me/2349072202582",
        "status": 0,
        "date": "2022-01-19"
      },
      {
        "img": "novoresume.png",
        "org": null,
        "who": null,
        "tel": null,
        "url": "https://novoresume.com",
        "status": 0,
        "date": "2022-01-19"
      },
      {
        "img": "kuda.png",
        "org": null,
        "who": null,
        "tel": null,
        "url": "https://kuda.com",
        "status": 0,
        "date": "2022-01-19"
      },
      {
        "img": "brendan.png",
        "org": null,
        "who": null,
        "tel": null,
        "url": "https://wa.me/2348133846289",
        "status": 0,
        "date": "2022-01-19"
      },
      {
        "img": "ngxgroup.png",
        "org": null,
        "who": null,
        "tel": null,
        "url": "https://ngxgroup.com",
        "status": 0,
        "date": "2022-01-19"
      },
      {
        "img": "codered.png",
        "org": null,
        "who": null,
        "tel": null,
        "url": "https://codered.eccouncil.org",
        "status": 0,
        "date": "2022-01-19"
      },
      {
        "img": "dstvudemy.png",
        "org": null,
        "who": null,
        "tel": null,
        "url": "https://multichoice.com",
        "status": 0,
        "date": "2022-01-19"
      },
      {
        "img": "decagon.png",
        "org": null,
        "who": null,
        "tel": null,
        "url": "https://decagon.institute",
        "status": 0,
        "date": "2022-01-19"
      },
      {
        "img": "msbm1.png",
        "org": null,
        "who": null,
        "tel": null,
        "url": "https://msbm.edu.ng",
        "status": 0,
        "date": "2022-01-19"
      },
      {
        "img": "msbm2.png",
        "org": null,
        "who": null,
        "tel": null,
        "url": "https://msbm.edu.ng",
        "status": 0,
        "date": "2022-01-19"
      },   
      {
        "img": "investa.jpg",
        "org": null,
        "who": null,
        "tel": null,
        "url": "https://investa.ng/interns",
        "status": 0,
        "date": "2022-01-19"
      },   
      {
        "img": "festman.jpg",
        "org": null,
        "who": null,
        "tel": null,
        "url": "https://festman.io/dataschool",
        "status": 0,
        "date": "2022-01-19"
      },
      {
        "img": "payd1.png",
        "org": null,
        "who": null,
        "tel": null,
        "url": "https://payd.ae",
        "status": 0,
        "date": "2022-01-19"
      },
      {
        "img": "payd2.png",
        "org": null,
        "who": null,
        "tel": null,
        "url": "https://payd.ae",
        "status": 0,
        "date": "2022-01-19"
      },
      {
        "img": "5kacademy.jpg",
        "org": null,
        "who": null,
        "tel": null,
        "url": "https://wa.me/2348169960927",
        "status": 0,
        "date": "2022-01-19"
      },
      {
        "img": "arvr.png",
        "org": null,
        "who": null,
        "tel": null,
        "url": "https://interaction-design.org",
        "status": 0,
        "date": "2022-01-19"
      },
      {
        "img": "gigm1.png",
        "org": null,
        "who": null,
        "tel": null,
        "url": "https://gigm.com",
        "status": 0,
        "date": "2022-01-19"
      },  
      {
        "img": "gigm2.png",
        "org": null,
        "who": null,
        "tel": null,
        "url": "https://gigm.com",
        "status": 0,
        "date": "2022-01-19"
      }, 
      {
        "img": "fashionweekend.png",
        "org": null,
        "who": null,
        "tel": null,
        "url": "https://fashionweekend.gtbank.com",
        "status": 0,
        "date": "2022-01-19"
      },                        
      {
        "img": "domestika.png",
        "org": null,
        "who": null,
        "tel": null,
        "url": "https://domestika.org",
        "status": 0,
        "date": "2022-01-26"
      }, 
      {
        "img": "codenga.png",
        "org": null,
        "who": null,
        "tel": null,
        "url": "https://codenga.com",
        "status": 0,
        "date": "2022-01-26"
      },                        
      {
        "img": "alx.png",
        "org": null,
        "who": null,
        "tel": null,
        "url": "https://alxafrica.com",
        "status": 0,
        "date": "2022-02-27"
      }, 
      {
        "img": "mscloud.png",
        "org": null,
        "who": null,
        "tel": null,
        "url": "https://cloudsociety.microsoft.com",
        "status": 0,
        "date": "2022-02-27"
      },                        
      {
        "img": "fairmoney.png",
        "org": null,
        "who": null,
        "tel": null,
        "url": "https://fairmoney.io",
        "status": 0,
        "date": "2022-02-27"
      }, 
      {
        "img": "verticalteams.png",
        "org": null,
        "who": null,
        "tel": null,
        "url": "https://verticalteams.net",
        "status": 0,
        "date": "2022-02-27"
      },                        
      {
        "img": "datacamp2.png",
        "org": null,
        "who": null,
        "tel": null,
        "url": "https://datacamp.com",
        "status": 0,
        "date": "2022-03-03"
      }, 
      {
        "img": "cwryse.png",
        "org": null,
        "who": null,
        "tel": null,
        "url": "https://cowrywise.com",
        "status": 0,
        "date": "2022-03-03"
      },   
      {
        "img": "pirple.png",
        "org": null,
        "who": null,
        "tel": null,
        "url": "https://pirple.com",
        "status": 0,
        "date": "2022-03-09"
      },                              
      {
        "img": "findycode.png",
        "org": null,
        "who": null,
        "tel": null,
        "url": "https://global.findy-code.io",
        "status": 0,
        "date": "2022-03-14"
      },
      {
        "img": "renaissance.png",
        "org": null,
        "who": null,
        "tel": null,
        "url": "https://renaissance.ng/fellowship",
        "status": 0,
        "date": "2022-03-14"
      },
    ];
  }
}

let newKite = new Kite();