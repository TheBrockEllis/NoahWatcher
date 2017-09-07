import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public productivity:any; // should be an Interface 

  constructor(public navCtrl: NavController, public http: Http) {

  }

  ionViewDidLoad(){
    this.getProductivity();
  }

  getProductivity(){
    this.http.get('https://api.noahkoch.com/v1/activities/productivity').map(res => res.json()).subscribe(data => {
      this.productivity = data;
    });
  }

  refresh(){
    this.getProductivity();
  }

}
