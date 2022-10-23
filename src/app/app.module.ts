import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { NavbarComponent } from './navbar/navbar.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { PricemodalComponent } from './pricemodal/pricemodal.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import { SpinerComponent } from './spiner/spiner.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PricemodalComponent,
    SpinerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
MatToolbarModule,
MatIconModule,
MatButtonModule,
MatTableModule,
MatPaginatorModule,
MatSortModule,
MatFormFieldModule,
MatInputModule,
MatCardModule,
HttpClientModule,
MatDialogModule,
MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
