import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './text.page.html',
  styleUrls: ['./text.page.scss'],
})
export class TextPage {
  
  gifURL = "./assets/babae.gif";
  gifName= "Babae";

  gifList = [
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
      gifURL : "./assets/magandang gabi.gif",
      gifName : "Magandang Gabi"
    },
    {
      gifURL : "./assets/magandang tanghali.gif",
      gifName : "Magandang Tanghali"
    },
    {
      gifURL : "./assets/magandang umaga.gif",
      gifName : "Magandang Umaga"
    },
    {
      gifURL : "./assets/magkano.gif",
      gifName : "Magkano"
    },
    {
      gifURL : "./assets/maligayang kaarawan.gif",
      gifName : "Maligayang Kaarawan"
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


  constructor() { }
}
