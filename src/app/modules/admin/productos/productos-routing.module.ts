import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoProductosComponent } from './pages/listado-productos/listado-productos.component';

const routes: Routes = [
  {
    path: 'listado',
    pathMatch: 'full',
    component: ListadoProductosComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }
