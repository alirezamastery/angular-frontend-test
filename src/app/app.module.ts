import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductMainComponent } from './products/product-main/product-main.component';

import { FormsModule } from '@angular/forms';   // <-- NgModel lives here
import { HttpClientModule } from '@angular/common/http';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductThumbnailComponent } from './products/product-thumbnail/product-thumbnail.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// material:
import { MatGridListModule } from '@angular/material/grid-list';

import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderMainComponent } from './header/header-main/header-main.component';
import { FooterMainComponent } from './footer/footer-main/footer-main.component';
import { SearchComponent } from './products/filter/search/search.component';
import { OrderingButtonsComponent } from './products/filter/ordering-buttons/ordering-buttons.component'

@NgModule({
  declarations: [
    AppComponent,
    ProductMainComponent,
    ProductListComponent,
    ProductThumbnailComponent,
    ProductDetailComponent,
    HeaderMainComponent,
    FooterMainComponent,
    SearchComponent,
    OrderingButtonsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatGridListModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
