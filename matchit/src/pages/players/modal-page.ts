import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'modal-page',
  templateUrl: 'modal-page.html'
  })
export class PlayerModalPage {
    buttonText = "Add Player";
    newPlayer = {
      key: null,
      img: './assets/imgs/avatar.png',
      name: '',
      groupID: ''
    };
    currentGroup: any;
    private options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      allowEdit: true,
      saveToPhotoAlbum: false,
      targetWidth: 600,
      targetHeight: 600
    }
    

  constructor(public navParams: NavParams, public viewCtrl: ViewController, private camera: Camera, private storage: Storage) {
    
    //get currentGroup from local storage
    this.getCurrentGroup();
    
    if(this.navParams.get('key') != null){
      //player modal opend with player to edit
      this.buttonText = "Update Player";
      this.newPlayer = {
        key: this.navParams.get('key'),
        img: this.navParams.get('img'),
        name: this.navParams.get('name'),
        groupID: this.navParams.get('groupID')
      };
    }else{
      //player modal opend with no player (to create a new one) with currentGroupID
      this.newPlayer = {
        key: null,
        img: './assets/imgs/avatar.png',
        name: '',
        groupID: this.currentGroup.groupID
      };
    }
  }
  closeModal() {
    this.viewCtrl.dismiss();
  }

  saveModal(newPlayer) {
    this.viewCtrl.dismiss(this.newPlayer);
  }

//read local storage for currentGroup
getCurrentGroup(){
  this.currentGroup = this.storage.get('group').then((val) => val);
}

  takePicture() {
    this.camera.getPicture(this.options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.newPlayer.img = base64Image;
    }, (err) => {
      // Handle error
      console.log("failed on taking picture");
    });
  }

}