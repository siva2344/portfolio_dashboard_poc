import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { provideCharts, BaseChartDirective,withDefaultRegisterables } from 'ng2-charts';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InvestmentFormComponent } from './investment-form/investment-form.component';
import { AppRoutingModule } from './app-routing.module';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    InvestmentFormComponent,
    DialogBoxComponent
  ],
  imports: [
    BaseChartDirective,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    AppRoutingModule,
  ],
  providers: [provideCharts(withDefaultRegisterables())],
  bootstrap: [AppComponent]
})
export class AppModule { }
