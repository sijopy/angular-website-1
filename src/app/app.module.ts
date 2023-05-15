import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSliderModule} from '@angular/material/slider';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { HomeContentComponent } from './home-content/home-content.component';
import { ProductComponent } from './product/product.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ProductbgComponent } from './product/productbg/productbg.component';
import { ContentComponent } from './home-content/content/content.component';
import { FooterComponent } from './home-content/footer/footer.component';
import { IconsComponent } from './home-content/icons/icons.component';
import { FormsModule } from '@angular/forms';
import { ContuctUsComponent } from './contuct-us/contuct-us.component';

import { ReactiveFormsModule } from '@angular/forms';
import { StickyComponent } from './home-content/sticky/sticky.component';
import { SubmitSucessfullComponent } from './contuct-us/submit-sucessfull/submit-sucessfull.component';



@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    HomeContentComponent,
    ProductComponent,
    TestimonialsComponent,
    ProductbgComponent,
    ContentComponent,
    FooterComponent,
    IconsComponent,
    ContuctUsComponent,
    StickyComponent,
    SubmitSucessfullComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    MatSliderModule,
    MatTabsModule,
    MatButtonToggleModule,
    MatSidenavModule,
    MatMenuModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
