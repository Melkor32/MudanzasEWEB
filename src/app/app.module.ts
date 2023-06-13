import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListInvoiceComponent } from './modules/list-invoice/list-invoice.component';
import { HttpClientModule } from "@angular/common/http";
import { ApiService } from './services/api.service';
import { RouterModule } from '@angular/router';
import { MenuBarComponent } from './modules/menu-bar/menu-bar.component';
import {MenubarModule} from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ClientsFormComponent } from './modules/clients-form/clients-form.component';
import {CheckboxModule} from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import {CardModule} from 'primeng/card';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ListInvoiceComponent,
    MenuBarComponent,
    ClientsFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    RouterModule,
    MenubarModule,
    BrowserAnimationsModule,
    InputTextModule,
    ButtonModule,
    CheckboxModule,
    RadioButtonModule,
    CardModule,
    FormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
