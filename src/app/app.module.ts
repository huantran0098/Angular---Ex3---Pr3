import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FontSizeEditorComponent } from './components/font-size-editor/font-size-editor.component';
import { PetComponent } from './components/pet/pet.component';

import { FormsModule, ReactiveFormsModule} from "@angular/forms";

import { ProductComponent } from './components/product/product.component';

import { SimpleCaculatorComponent } from './components/simple-caculator/simple-caculator.component';
import { ColorPickerComponent } from './components/color-picker/color-picker.component';
import {ColorPickerModule} from "ngx-color-picker";
import { ArticleComponent } from './components/article/article.component';
import { LikeComponent } from './components/like/like.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { NameCardComponent } from './components/name-card/name-card.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { RatingBarComponent } from './components/rating-bar/rating-bar.component';
import { CountdownTimerAppComponent } from './components/countdown-timer-app/countdown-timer-app.component';
import { TodoComponent } from './components/todo/todo.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    FontSizeEditorComponent,
    PetComponent,
    ProductComponent,
    SimpleCaculatorComponent,
    ColorPickerComponent,
    ArticleComponent,
    LikeComponent,
    NavbarComponent,
    FooterComponent,
    NameCardComponent,
    ProgressBarComponent,
    RatingBarComponent,
    CountdownTimerAppComponent,
    TodoComponent,
    RegisterComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ColorPickerModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
