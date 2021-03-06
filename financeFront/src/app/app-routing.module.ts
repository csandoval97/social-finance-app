import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {MyPieChartComponent} from './my-pie-chart/my-pie-chart.component';
import {SavingComponent} from './saving/saving.component';
import {LoansComponent} from './loans/loans.component';
import {CreditComponent} from './credit/credit.component';
import {PurchasesComponent} from './purchases/purchases.component';
import {EducationalComponent} from './educational/educational.component'
import {SettingComponent} from './setting/setting.component'; 


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path: 'pie-chart', component: MyPieChartComponent},
  {path: 'savings', component: SavingComponent},
  {path: 'credits', component: CreditComponent},
  {path: 'loans', component: LoansComponent},
  {path: 'purchases', component: PurchasesComponent},
  {path: 'educational', component: EducationalComponent},
  {path: 'setting', component: SettingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
