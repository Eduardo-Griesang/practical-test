import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './components/tool-bar/tool-bar.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { ButtonComponent } from './components/button/button.component';
import { PokemomComponent } from './components/pokemom/pokemom.component';
import { PokemonInputComponent } from './components/pokemon-input/pokemon-input.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    ButtonComponent,
    PokemomComponent,
    PokemonInputComponent,
  ],
  imports: [
    ToolbarComponent,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
