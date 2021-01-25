import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CarComponent } from './component/car/car.component';
import {RouterModule} from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { CarsComponent } from './component/cars/cars.component';
import { FullCarsComponent } from './component/full-cars/full-cars.component';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    HomeComponent,
    CarsComponent,
    FullCarsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{
      path: 'link/home', component: HomeComponent
    },
      {
      path: 'link/car', component: CarsComponent, children: [{
        path: ':id', component: FullCarsComponent
        }]
    }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
