import { Component, OnInit } from '@angular/core';
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
    if (this.words == "text"){
      this.router.navigate(['/text'])
    }
    
  }
)
  }
}
