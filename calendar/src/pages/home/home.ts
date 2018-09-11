import { Component } from '@angular/core';
import { NavController, ModalController, AlertController, LoadingController } from 'ionic-angular';
import * as moment from 'moment';
 
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 

  event = { startTime: new Date().toISOString(), endTime: new Date().toISOString(), allDay: false };
  minDate = new Date().toISOString();
  
  constructor(public navCtrl: NavController, private modalCtrl: ModalController, private alertCtrl: AlertController, public loadingCtrl: LoadingController) { 

    let preselectedDate = moment(this.minDate).format();
    this.event.startTime = preselectedDate;
    this.event.endTime = preselectedDate;
  }

  onEventSelected(event) {
    let start = moment(event.startTime).format('LLLL');
    let end = moment(event.endTime).format('LLLL');
    
    let alert = this.alertCtrl.create({
      title: '' + event.title,
      subTitle: 'From: ' + start + '<br>To: ' + end,
      buttons: ['OK']
    })
    alert.present();
  }
 
  addEvent() {

    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });   

    let modal = this.modalCtrl.create('EventModalPage', {selectedDay: this.event.startTime, loading: loading});

    loading.present();

    modal.present();
    modal.onDidDismiss(data => {
      if (data) {
        let eventData = data; 
        eventData.startTime = moment(data.selectedDay).format();       
        this.event.startTime = eventData.startTime;      
      }
    });

    loading.dismiss();
    
  }
 
  


}
