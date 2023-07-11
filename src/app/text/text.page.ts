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
      "gifURL" : "./assets/babae.gif",
      "gifName" : "Babae"
    },
    {
      "gifURL" :  "./assets/galit.gif",
      "gifName" : "Galit"
    },
    {
      "gifURL" :  "./assets/gulay.gif",
      "gifName" : "Gulay"
    },
    {
      "gifURL" : "./assets/hello.gif",
      "gifName" : "Hello"
    },
    {
      "gifURL" : "./assets/iyak.gif",
      "gifName" : "Iyak"
    }
    
    
  ]

  constructor() { }
}
