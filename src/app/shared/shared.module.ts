import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './modules/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmptyDataComponent } from './components/empty-data/empty-data.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import {AsyncPipe} from '@angular/common';
import { StepsComponent } from './components/steps/steps.component';
import { InformationCardComponent } from './components/information-card/information-card.component';
import { CardComponent } from './components/card/card.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { NextDirective } from '../directives/next.directive';
import { PrevDirective } from '../directives/prev.directive';


const components = [EmptyDataComponent, HeaderComponent, FooterComponent, SearchbarComponent,StepsComponent,InformationCardComponent, CardComponent, CarouselComponent, NextDirective, PrevDirective];

const modules = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  MaterialModule,
  TranslateModule,
  RouterModule,
  AsyncPipe
];

@NgModule({
  declarations: components,
  imports: modules,
  exports: [...components, ...modules],
})
export class SharedModule {}
