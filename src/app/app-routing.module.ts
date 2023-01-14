import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesModule } from './pages/pages.module';

const routes: Routes = [
  { 
    path: '',
    pathMatch: 'full',
		redirectTo: 'pages'
  },
  { 
    path: 'pages', 
    loadChildren: 
      () => import('./pages/pages.module').then(m => m.PagesModule) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
