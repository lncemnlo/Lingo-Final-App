import { Component, OnInit } from '@angular/core';
import { AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';
import { SpeechRecognition } from '@awesome-cordova-plugins/speech-recognition/ngx';
import { NavController } from '@ionic/angular';
import { TextPage } from '../text/text.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-voice',
  templateUrl: './voice.page.html',
  styleUrls: ['./voice.page.scss'],
})
export class VoicePage implements OnInit {

  vWord:string="Press the button and start speaking";
  words : string = '';
  constructor(private speechRecognition: SpeechRecognition, private router: Router) { }

  ngOnInit() {

    this.speechRecognition.hasPermission()
    .then((hasPermission: boolean) => {

      if (!hasPermission){
        this.speechRecognition.requestPermission()
          .then(
            () => console.log('Granted'),
            () => console.log('Denied')
          )
      }
    })
  }

  start() {


this.speechRecognition.startListening()
.subscribe(
  (matches: Array<string>) =>{
    console.log(matches);
    this.words = matches[0];
    this.vWord = this.words
    if (this.words.toLowerCase() == "babae"){
      const gifContainer = document.getElementById('gifContainer');
      gifContainer!.innerHTML = '<img src="./assets/babae.gif" alt="Babae GIF">';
    } else if (this.words.toLowerCase() == "babae"){
      const gifContainer = document.getElementById('gifContainer');
      gifContainer!.innerHTML = '<img src="./assets/babae.gif" alt="Babae GIF">';
    } else if (this.words.toLowerCase() == "babae"){
      const gifContainer = document.getElementById('gifContainer');
      gifContainer!.innerHTML = '<img src="./assets/babae.gif" alt="Babae GIF">';
    } else if (this.words.toLowerCase() == "babae"){
      const gifContainer = document.getElementById('gifContainer');
      gifContainer!.innerHTML = '<img src="./assets/babae.gif" alt="Babae GIF">';
    } else if (this.words.toLowerCase() == "babae"){
      const gifContainer = document.getElementById('gifContainer');
      gifContainer!.innerHTML = '<img src="./assets/babae.gif" alt="Babae GIF">';
    } else if (this.words.toLowerCase() == "babae"){
      const gifContainer = document.getElementById('gifContainer');
      gifContainer!.innerHTML = '<img src="./assets/babae.gif" alt="Babae GIF">';
    } else if (this.words.toLowerCase() == "babae"){
      const gifContainer = document.getElementById('gifContainer');
      gifContainer!.innerHTML = '<img src="./assets/babae.gif" alt="Babae GIF">';
    } else if (this.words.toLowerCase() == "babae"){
      const gifContainer = document.getElementById('gifContainer');
      gifContainer!.innerHTML = '<img src="./assets/babae.gif" alt="Babae GIF">';
    } else if (this.words.toLowerCase() == "babae"){
      const gifContainer = document.getElementById('gifContainer');
      gifContainer!.innerHTML = '<img src="./assets/babae.gif" alt="Babae GIF">';
    } else if (this.words.toLowerCase() == "babae"){
      const gifContainer = document.getElementById('gifContainer');
      gifContainer!.innerHTML = '<img src="./assets/babae.gif" alt="Babae GIF">';
    } else if (this.words.toLowerCase() == "babae"){
      const gifContainer = document.getElementById('gifContainer');
      gifContainer!.innerHTML = '<img src="./assets/babae.gif" alt="Babae GIF">';
    } else if (this.words.toLowerCase() == "babae"){
      const gifContainer = document.getElementById('gifContainer');
      gifContainer!.innerHTML = '<img src="./assets/babae.gif" alt="Babae GIF">';
    } else if (this.words.toLowerCase() == "babae"){
      const gifContainer = document.getElementById('gifContainer');
      gifContainer!.innerHTML = '<img src="./assets/babae.gif" alt="Babae GIF">';
    } else if (this.words.toLowerCase() == "babae"){
      const gifContainer = document.getElementById('gifContainer');
      gifContainer!.innerHTML = '<img src="./assets/babae.gif" alt="Babae GIF">';
    } else if (this.words.toLowerCase() == "babae"){
      const gifContainer = document.getElementById('gifContainer');
      gifContainer!.innerHTML = '<img src="./assets/babae.gif" alt="Babae GIF">';
    } else if (this.words.toLowerCase() == "babae"){
      const gifContainer = document.getElementById('gifContainer');
      gifContainer!.innerHTML = '<img src="./assets/babae.gif" alt="Babae GIF">';
    } else if (this.words.toLowerCase() == "babae"){
      const gifContainer = document.getElementById('gifContainer');
      gifContainer!.innerHTML = '<img src="./assets/babae.gif" alt="Babae GIF">';
    } else if (this.words.toLowerCase() == "babae"){
      const gifContainer = document.getElementById('gifContainer');
      gifContainer!.innerHTML = '<img src="./assets/babae.gif" alt="Babae GIF">';
    } else if (this.words.toLowerCase() == "babae"){
      const gifContainer = document.getElementById('gifContainer');
      gifContainer!.innerHTML = '<img src="./assets/babae.gif" alt="Babae GIF">';
    } else if (this.words.toLowerCase() == "babae"){
      const gifContainer = document.getElementById('gifContainer');
      gifContainer!.innerHTML = '<img src="./assets/babae.gif" alt="Babae GIF">';
    } else if (this.words.toLowerCase() == "babae"){
      const gifContainer = document.getElementById('gifContainer');
      gifContainer!.innerHTML = '<img src="./assets/babae.gif" alt="Babae GIF">';
    } else if (this.words.toLowerCase() == "babae"){
      const gifContainer = document.getElementById('gifContainer');
      gifContainer!.innerHTML = '<img src="./assets/babae.gif" alt="Babae GIF">';
    } else if (this.words.toLowerCase() == "babae"){
      const gifContainer = document.getElementById('gifContainer');
      gifContainer!.innerHTML = '<img src="./assets/babae.gif" alt="Babae GIF">';
    } else if (this.words.toLowerCase() == "babae"){
      const gifContainer = document.getElementById('gifContainer');
      gifContainer!.innerHTML = '<img src="./assets/babae.gif" alt="Babae GIF">';
    } else if (this.words.toLowerCase() == "babae"){
      const gifContainer = document.getElementById('gifContainer');
      gifContainer!.innerHTML = '<img src="./assets/babae.gif" alt="Babae GIF">';
    } else if (this.words.toLowerCase() == "babae"){
      const gifContainer = document.getElementById('gifContainer');
      gifContainer!.innerHTML = '<img src="./assets/babae.gif" alt="Babae GIF">';
    } else if (this.words.toLowerCase() == "babae"){
      const gifContainer = document.getElementById('gifContainer');
      gifContainer!.innerHTML = '<img src="./assets/babae.gif" alt="Babae GIF">';
    } else if (this.words.toLowerCase() == "babae"){
      const gifContainer = document.getElementById('gifContainer');
      gifContainer!.innerHTML = '<img src="./assets/babae.gif" alt="Babae GIF">';
    } else if (this.words.toLowerCase() == "babae"){
      const gifContainer = document.getElementById('gifContainer');
      gifContainer!.innerHTML = '<img src="./assets/babae.gif" alt="Babae GIF">';
    } else if (this.words.toLowerCase() == "babae"){
      const gifContainer = document.getElementById('gifContainer');
      gifContainer!.innerHTML = '<img src="./assets/babae.gif" alt="Babae GIF">';
    } else {
      this.vWord = "Can you please repeat? I didn't hear anything."
    }
    
  }
)
  }
}
