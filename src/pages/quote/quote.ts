import { Component } from '@angular/core';
import {NavParams, ViewController} from "ionic-angular";

@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html',
})
export class QuotePage {
  //
  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad QuotePage');
  // }
  person: string;
  text: string;

  constructor(private viewCtrl: ViewController,
              private navParams: NavParams) {}

  ionViewDidLoad() {
    this.person = this.navParams.get('person');
    this.text = this.navParams.get('text');
  }

  onClose(remove = false) {
    this.viewCtrl.dismiss(remove);
  }
}
