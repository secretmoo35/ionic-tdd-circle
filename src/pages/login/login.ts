import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, AbstractControl, Validators, FormBuilder } from '@angular/forms';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  credentials: FormGroup;
  username: AbstractControl;
  password: AbstractControl;

  constructor(public navCtrl: NavController, public formBuilder: FormBuilder, ) {

    this.credentials = this.formBuilder.group({
      'username': ['', Validators.compose([Validators.required])],
      'password': ['', Validators.compose([Validators.required])]
    });;
    this.username = this.credentials.controls['username'];
    this.password = this.credentials.controls['password'];

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  onLogin() {
    this.navCtrl.push('HomePage');
  }

}
