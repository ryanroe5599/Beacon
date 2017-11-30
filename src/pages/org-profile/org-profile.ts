import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ListPage} from '../list/list';
import {HomePage} from '../home/home';
/**
 * Generated class for the OrgProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-org-profile',
  templateUrl: 'org-profile.html',
})
export class OrgProfilePage {
  listPage = ListPage;
  homePage = HomePage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrgProfilePage');
  }

}
