import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-text',
  templateUrl: './text.page.html',
  styleUrls: ['./text.page.scss'],
})
export class TextPage {
  searchQuery: string = '';
  gifURL = "./assets/babae.gif";
  gifName= "Babae";

  gifList_Words = [
    {
      gifURL : "./assets/babae.gif",
      gifName : "Babae"
    },
    {
      gifURL :  "./assets/galit.gif",
      gifName : "Galit"
    },
    {
      gifURL :  "./assets/gulay.gif",
      gifName : "Gulay"
    },
    {
      gifURL :  "./assets/iyak.gif",
      gifName : "Iyak"
    },
    {
      gifURL : "./assets/hello.gif",
      gifName : "Hello"
    },
    {
      gifURL : "./assets/kaibigan.gif",
      gifName : "Kaibigan"
    },
    {
      gifURL : "./assets/lalaki.gif",
      gifName : "Lalaki"
    },
    {
      gifURL : "./assets/lola.gif",
      gifName : "Lola"
    },
    {
      gifURL : "./assets/lolo.gif",
      gifName : "Lolo"
    },
    {
      gifURL : "./assets/magkano.gif",
      gifName : "Magkano"
    },
    {
      gifURL : "./assets/masaya.gif",
      gifName : "Masaya"
    },
    {
      gifURL : "./assets/paalam.gif",
      gifName : "Paalam"
    },
    {
      gifURL : "./assets/pinsan.gif",
      gifName : "Pinsan"
    },
    {
      gifURL : "./assets/prutas.gif",
      gifName : "Prutas"
    },
    {
      gifURL : "./assets/salamat.gif",
      gifName : "Salamat"
    },
    {
      gifURL : "./assets/sanggol.gif",
      gifName : "Sanggol"
    },
  ]
  gifList_Phrases = [
    {
      gifURL : "./assets/anong pangalan mo.gif",
      gifName : "Anong pangalan mo"
    },
    {
      gifURL :  "./assets/hanggang sa muli.gif",
      gifName : "Hanggang sa Muli"
    },
    {
      gifURL :  "./assets/humingi ng tulong.gif",
      gifName : "Humingi ng tulong"
    },
    {
      gifURL :  "./assets/kamusta ka.gif",
      gifName : "Kamusta ka"
    },
    {
      gifURL : "./assets/kinagagalak kitang makilala.gif",
      gifName : "Kinagagalak kitang makilala"
    },
    {
      gifURL : "./assets/mabuti ako.gif",
      gifName : "Mabuti ako"
    },
    {
      gifURL : "./assets/magandang umaga.gif",
      gifName : "Magandang umaga"
    },
    {
      gifURL : "./assets/magandang tanghali.gif",
      gifName : "Magandang tanghali"
    },
    {
      gifURL : "./assets/magandang gabi.gif",
      gifName : "Magandang gabi"
    },
    {
      gifURL : "./assets/maligayang kaarawan.gif",
      gifName : "Maligayang kaarawan"
    },
    {
      gifURL : "./assets/naiintindihan ko.gif",
      gifName : "Naiintindihan ko"
    },
    {
      gifURL : "./assets/okay ako.gif",
      gifName : "Okay ako"
    },
    {
      gifURL : "./assets/san ka nagmula.gif",
      gifName : "San ka nagmula"
    },
    {
      gifURL : "./assets/sino ka.gif",
      gifName : "Sino ka"
    },
  ]

  filterGIFs(event: any) {
    // Convert the search query to lowercase for case-insensitive search
    const query = event.target.value.toLowerCase();

    // Filter gifList_Words
    this.gifList_Words = this.filterGIFByName(this.gifList_Words, query);

    // Filter gifList_Phrases
    this.gifList_Phrases = this.filterGIFByName(this.gifList_Phrases, query);
  }

  filterGIFByName(gifList: any[], query: string): any[] {
    return gifList.filter(gif => gif.gifName.toLowerCase().includes(query));
  }
  
  

  constructor() {
    

   }
  
   refreshPage() {
    window.location.reload();
  }
}
