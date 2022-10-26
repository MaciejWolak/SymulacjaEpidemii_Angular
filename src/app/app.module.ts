import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ParametersManagerComponent } from './components/parameters-manager/parameters-manager.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {ParametersService} from "./service/parameters.service";
import { HeaderComponent } from './shered/header/header.component';
import { ResultComponent } from './components/result/result.component';
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app-routing/app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    ParametersManagerComponent,
    HeaderComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [ParametersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
