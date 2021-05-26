import { NavController, AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  usuario  = {
    email: '',
    password: ''
  };

  constructor(private navCtrl : NavController,
    private alertCtrl : AlertController) { }

  ngOnInit() {
  }

  returnPageHome(){
    this.navCtrl.navigateBack("home");
  }

  onSubmitTemplate(){
    console.log('Form submit');
    console.log(this.usuario);
    this.alert();
  }

  async alert(){
    const alert = await this.alertCtrl.create({
      header: 'Informação',
      message: 'No momento essa pagina está em construção !',
      mode: "ios",
      buttons: [
        {
          text: 'OK',
          handler: (blah) => {
            this.navCtrl.navigateForward('home')
          }
        }]
    });
    await alert.present();

  }
}
