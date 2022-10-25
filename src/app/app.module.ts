import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ParametersManagerComponent } from './components/parameters-manager/parameters-manager.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {ParametersService} from "./service/parameters.service";

@NgModule({
  declarations: [
    AppComponent,
    ParametersManagerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [ParametersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
