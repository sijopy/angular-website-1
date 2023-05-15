import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeContentComponent } from './home-content/home-content.component';
import { ContuctUsComponent } from './contuct-us/contuct-us.component';
import { ProductComponent } from './product/product.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ProductbgComponent } from './product/productbg/productbg.component';
import { SubmitSucessfullComponent } from './contuct-us/submit-sucessfull/submit-sucessfull.component';

const routes: Routes = [
  {path:"home",component:HomeContentComponent},
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"product", component:ProductComponent},
  {path:"testimonials",component:TestimonialsComponent},
  {path:"conduct",component:ContuctUsComponent},
  {path:"sucess",component:SubmitSucessfullComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
