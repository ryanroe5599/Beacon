import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
//import { AngularFireDatabase } from "angularfire2/database";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database"; //apparently AngularFire has been outdated
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
//import {firebase} from 'firebase';
import { Observable } from 'rxjs/Observable';
import { FeedPage } from '../feed/feed';
/**
 * Generated class for the CreatePostPage page.
 * Created by Ryan Roe for Beacon Capstone Project
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-post',
  templateUrl: 'create-post.html',
})
export class CreatePostPage {

postTitle
postContent
arrData = []
postData =[]
//second firebase messaging try variable
//items: any; //type of any, fetches chat items from fb project
 // name: any;
//  msgVal: string = '';

user: Observable<firebase.User>;

itemsRef: AngularFireList<any>;
  items: Observable<any[]>;
userEmail: Observable<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams, private fdb: AngularFireDatabase,afAuth: AngularFireAuth, public alertCtrl: AlertController) {
  	//
  	this.fdb.list("/posts/").valueChanges().subscribe(_data => {
		this.arrData = _data;

		console.log(this.arrData);
  })

  	this.itemsRef = fdb.list('messages');
    this.items = this.itemsRef.valueChanges();//There are properties, such as valueChanges, that return an RxJS Observable. 

/****Attempting to access logged in user's email
 //this.userEmail = firebase.auth().currentUser;
 //this.userEmail = MyApp.user.email; */
}

//Sends the post information to database
 chatSend(theirMessage: string, theirTitle: string) {
 	const item = {
 		message: theirMessage,
 		title: theirTitle,
 		timestamp: Date.now(),
    //userEmail: this.userEmail attempting retrieve logged in user's information
 	}
    this.itemsRef.push(item); //name: this.user});
    this.navCtrl.setRoot(FeedPage);
  
  }

//functions for future adaptation
 updateItem(key: string, newText: string) {
    this.itemsRef.update(key, { text: newText });
  }
  deleteItem(key: string) {    
    this.itemsRef.remove(key); 
  }
  deleteEverything() {
    this.itemsRef.remove();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreatePostPage');
  }

/* created to view the logged in user's email...which is not working.
 doAlert() {
    let alert = this.alertCtrl.create({
        title: 'New Friend!',
        subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!' + this.userEmail,
        buttons: ['Ok']
      });

    alert.present();
 }*/

}