import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatBadgeModule } from "@angular/material/badge";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatToolbarModule } from "@angular/material/toolbar";
import { RecipeCardComponent } from './components/recipe-card/recipe-card.component';
import { RecipiesListComponent } from './components/recipies-list/recipies-list.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeCardComponent,
    RecipiesListComponent,
    ShoppingListComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    MatBadgeModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatToolbarModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
