import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IDCardComponent } from './idcard/idcard.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { CatalogComponent } from './catalog/catalog.component';
import { FooterComponent } from './footer/footer.component';
import { ProductThumbComponent } from './product-thumb/product-thumb.component';

@NgModule({
  declarations: [
    AppComponent,
    IDCardComponent,
    HeaderComponent,
    MenuComponent,
    CatalogComponent,
    FooterComponent,
    ProductThumbComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
