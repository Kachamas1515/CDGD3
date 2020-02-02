import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchPageComponent } from './search-page/search-page.component';
import { AddEditPageComponent } from './add-edit-page/add-edit-page.component';



const routes: Routes = [{
  path: 'search',
  component: SearchPageComponent
}, {
  path: 'add',
  component: AddEditPageComponent
}, {
  path: 'edit',
  component: AddEditPageComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
