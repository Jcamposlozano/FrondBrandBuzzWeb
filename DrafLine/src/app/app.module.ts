import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ServerDraflineSkipTestsService} from './services/server-drafline--skip-tests.service';
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './component/users/users.component';
import { BrandBuzzComponent } from './component/brand-buzz/brand-buzz.component'

//Graficos

import { ChartsModule } from 'ng2-charts';
import { FiltrosBrandComponent } from './component/filtros-brand/filtros-brand.component';
import { DiagTortaComponent } from './component/diag-torta/diag-torta.component';
import { DiagBarrasComponent } from './component/diag-barras/diag-barras.component';
import { LabelDataBRandComponent } from './component/label-data-brand/label-data-brand.component';
import { ControlProgramaComponent } from './component/control-programa/control-programa.component';
import { FooterComponent } from './component/footer/footer.component';

// formularios

import { FormsModule, ReactiveFormsModule } from '@angular/forms'


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    BrandBuzzComponent,
    FiltrosBrandComponent,
    DiagTortaComponent,
    DiagBarrasComponent,
    LabelDataBRandComponent,
    ControlProgramaComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ChartsModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [
    ServerDraflineSkipTestsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
