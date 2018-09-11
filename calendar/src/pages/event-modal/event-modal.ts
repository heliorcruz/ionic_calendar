import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController, ViewController, NavParams } from 'ionic-angular';
import * as moment from 'moment';
 
@IonicPage()
@Component({
  selector: 'page-event-modal',
  templateUrl: 'event-modal.html',
})
export class EventModalPage {

  eventSource = [];
  viewTitle: string;
  selectedDay = new Date();
   
  calendar = {
    mode: 'month',
    currentDate: new Date(),
    locale: 'pt-BR',
    //showEventDetail: false,
    noEventsLabel: "* dias indisponíveis"
  };  
 
  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public navParams: NavParams) {    
    
    //let loading = this.navParams.get('loading');
    // loading.dismiss();
    
  }

  ionViewDidLoad() {
    /*
    let preselectedDate = this.navParams.get('selectedDay');  
    let events = this.eventSource;   
    events.push(preselectedDate);
    this.eventSource = [];
    setTimeout(() => {
      this.eventSource = events;
    }); */

  }
 
  select() {
    this.viewCtrl.dismiss({ selectedDay: this.selectedDay });
  }

  onViewTitleChanged(title) {
    this.viewTitle = title;
  }
 
  onEventSelected(event) {

    /*
    let start = moment(event.startTime).format('LLLL');
    let end = moment(event.endTime).format('LLLL');
    
    let alert = this.alertCtrl.create({
      title: '' + event.title,
      subTitle: 'From: ' + start + '<br>To: ' + end,
      buttons: ['OK']
    })
    alert.present(); */
  }
 
  onTimeSelected(ev) {
    this.selectedDay = ev.selectedTime;
  }

  markDisabled = (date: Date) => {
    let listDate = [new Date()]
    let today = new Date()
    let disabled = false
    for(var item in listDate){
      if(date.getTime() <= today.getTime())
         disabled = true;
      if(listDate[item].getFullYear() == date.getFullYear() && listDate[item].getMonth() == date.getMonth() && listDate[item].getDate() == date.getDate())
         disabled = true;
    }
    //var current = new Date();
    //return date < current;
    return disabled;
  }
 
}