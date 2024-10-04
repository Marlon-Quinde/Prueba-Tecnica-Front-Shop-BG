import { Component } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { ListadoProducto } from '../../interfaces/listadoProducto.interface';

@Component({
  selector: 'app-listado-productos',
  templateUrl: './listado-productos.component.html',
  styleUrl: './listado-productos.component.scss'
})
export class ListadoProductosComponent {

  productos: ListadoProducto[] = []
  constructor(private _productoService: ProductoService){
    this.getProductos();
  }

  getProductos(){
    this._productoService.getProducts().subscribe({
      next: (res) => {
        this.productos =  res.data
      }
    })
  }


}
