import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { CardProductoComponent } from './components/card-producto/card-producto.component';
import { ListadoProductosComponent } from './pages/listado-productos/listado-productos.component';


@NgModule({
  declarations: [CardProductoComponent, ListadoProductosComponent],
  imports: [
    CommonModule,
    ProductosRoutingModule
  ]
})
export class ProductosModule { }
