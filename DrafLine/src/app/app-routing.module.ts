import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrandBuzzComponent } from './component/brand-buzz/brand-buzz.component';
import { LogErroresComponent } from './component/log-errores/log-errores.component';


const routes: Routes = [
  {path: 'brandBuzz', component: BrandBuzzComponent},
  {path: 'LogErrores', component: LogErroresComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'brandBuzz' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
