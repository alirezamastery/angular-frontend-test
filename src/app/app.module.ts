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

@NgModule({
  declarations: [
    AppComponent,
    ProductMainComponent,
    ProductListComponent,
    ProductThumbnailComponent,
    ProductDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
