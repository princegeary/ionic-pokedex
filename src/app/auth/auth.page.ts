import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss']
})
export class AuthPage implements OnInit {
  defaultUserName = "prince";
  defaultPassword = "interactive";
  isLoading = false;
  isLogin = true;

  constructor(
    private authService: AuthService,
    private router: Router,
    private loadingCtrl: LoadingController,
    public alertController: AlertController,
  ) { }

  ngOnInit() { }

  onLogin(username: string, password: string) {
    this.isLoading = true;
    this.loadingCtrl
      .create({ keyboardClose: true, message: 'Logging in...' })
      .then(loadingEl => {
        loadingEl.present();
        if (this.authService.login(username, password)) {
          setTimeout(() => {
            this.isLoading = false;
            loadingEl.dismiss();
            this.router.navigateByUrl('/pokemons');
          }, 1500);
        } else {
          setTimeout(() => {
            this.isLoading = false;
            loadingEl.dismiss();
            this.router.navigateByUrl('/auth');
            this.presentAlert();
          }, 1500);
        };
      });
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Login failed',
      message: 'Invalid username or password',
      buttons: ['OK'],
    });

    await alert.present();
    let result = await alert.onDidDismiss();
  }
}
