import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private alertController: AlertController) {}

  remedio1() {
    // Lógica para el remedio 1
  }

  remedio2() {
    // Lógica para el remedio 2
  }

  sos() {
    // Lógica para el botón SOS
  }

  ubicacion() {
    // Lógica para el botón de ubicación
  }

  llamarHijo() {
    // Lógica para llamar a un hijo
    this.presentAlert('Llamar a Hijo', 'Se ha solicitado llamar a un hijo.');
  }

  async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }

}
