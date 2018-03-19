import { Component, ViewChild } from '@angular/core';
import { NavController, Content } from 'ionic-angular';
import { FirebaseServiceProvider } from './../../providers/firebase-service/firebase-service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})



export class HomePage {

  @ViewChild(Content) content: Content;

  scoreRange = [];
  scoreMin = 1;
  scoreMax = 15;
  players: Observable<any[]>;

  
  constructor(public navCtrl: NavController, public firebaseService: FirebaseServiceProvider) {
    for (let index = this.scoreMax; index >= this.scoreMin; index--) {
      this.scoreRange.push(index);
    }
    this.players = this.firebaseService.getItems();
    /*this.players = [
      {
        img: './assets/imgs/Michaela.png',
        name: 'Michaela'
      }, {
        img: './assets/imgs/Melanie.png',
        name: 'Melanie'
      }];
     */
  }

}
