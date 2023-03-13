import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoFormComponent } from './components/contacto-form/contacto-form.component';
import { ContactoListComponent } from './components/contacto-list/contacto-list.component';

const routes: Routes = [
  {
    path: '',
    component: ContactoListComponent
  },
  {
    path: 'new',
    component: ContactoFormComponent
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
