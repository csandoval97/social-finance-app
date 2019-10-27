import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ChartsModule } from 'ng2-charts';
import { Routes, RouterModule } from '@angular/router';
import { MyPieChartComponent } from './my-pie-chart/my-pie-chart.component';
import { SavingComponent } from './saving/saving.component';
import { CreditComponent } from './credit/credit.component';
import { LoansComponent } from './loans/loans.component';
import { PurchasesComponent } from './purchases/purchases.component';
import { EducationalComponent } from './educational/educational.component';
import { SettingComponent } from './setting/setting.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MyPieChartComponent,
    SavingComponent,
    CreditComponent,
    LoansComponent,
    PurchasesComponent,
    EducationalComponent,
    SettingComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
