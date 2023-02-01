import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {path :'',component:HomeComponent},
  {path :'product/:productId',component :ProductComponent},
  {path :'search/:query',component : SearchComponent},
  {path :'search',component : SearchComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
