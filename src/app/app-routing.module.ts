import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DocumentComponent } from './document/document.component';

const routes: Routes = [
  { path: 'documents', component: DocumentComponent },
  {
    path: '**',
    redirectTo: '/documents',
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: '/documents',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
