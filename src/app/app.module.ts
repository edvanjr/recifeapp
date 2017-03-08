import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { MuseusPage } from '../pages/museus/museus';
import { InfoMuseuPage } from '../pages/info-museu/info-museu';
import { ShoppingsPage } from '../pages/shoppings/shoppings';
import { InfoShoppingPage } from '../pages/info-shopping/info-shopping';
import { MercadosPage } from '../pages/mercados/mercados';
import { InfoMercadoPage } from '../pages/info-mercado/info-mercado';
import { FeirasPage } from '../pages/feiras/feiras';
import { InfoFeirasPage } from '../pages/info-feiras/info-feiras';
import { TeatrosPage } from '../pages/teatros/teatros';
import { InfoTeatroPage } from '../pages/info-teatro/info-teatro';
import { PontesPage } from '../pages/pontes/pontes';
import { InfoPontePage } from '../pages/info-ponte/info-ponte';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MuseusPage,
    InfoMuseuPage,
    ShoppingsPage,
    InfoShoppingPage,
    MercadosPage,
    InfoMercadoPage,
    FeirasPage,
    InfoFeirasPage,
    TeatrosPage,
    InfoTeatroPage,
    PontesPage,
    InfoPontePage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MuseusPage,
    InfoMuseuPage,
    ShoppingsPage,
    InfoShoppingPage,
    MercadosPage,
    InfoMercadoPage,
    FeirasPage,
    InfoFeirasPage,
    TeatrosPage,
    InfoTeatroPage,
    PontesPage,
    InfoPontePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
