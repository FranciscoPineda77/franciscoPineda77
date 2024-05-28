import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

  constructor(private alertController: AlertController) { }

  async remedio1() {
    const alert = await this.alertController.create({
      header: 'Remedio 1',
      message: 'Esta es una acción para el Remedio 1.',
      buttons: ['OK']
    });
    await alert.present();
  }

  async remedio2() {
    const alert = await this.alertController.create({
      header: 'Remedio 2',
      message: 'Esta es una acción para el Remedio 2.',
      buttons: ['OK']
    });
    await alert.present();
  }

  async sos() {
    const alert = await this.alertController.create({
      header: 'SOS',
      message: 'Esta es una acción para el SOS.',
      buttons: ['OK']
    });
    await alert.present();
  }

  async ubicacion() {
    const alert = await this.alertController.create({
      header: 'Ubicación',
      message: 'Esta es una acción para la Ubicación.',
      buttons: ['OK']
    });
    await alert.present();
  }

}
