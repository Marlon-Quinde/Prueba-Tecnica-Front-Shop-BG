import { Component, Input } from '@angular/core';
import { ListadoProducto } from '../../interfaces/listadoProducto.interface';

@Component({
  selector: 'app-card-producto',
  templateUrl: './card-producto.component.html',
  styleUrl: './card-producto.component.scss'
})
export class CardProductoComponent {


  @Input({required: true}) producto!: ListadoProducto

  agregarFavorito(){
    const favoritos:string | null = localStorage.getItem('productosFavoritos')
    let productos: ListadoProducto[] = []
    if(favoritos){
      const productos: ListadoProducto[] = JSON.parse(favoritos)
      const existeFavorito = productos.some((product) => product.id == this.producto.id)
      if(existeFavorito) {
        window.alert('Ya existe el producto no se puede agregar a favorito')
        return
      }
      }
    productos.push(this.producto)
    localStorage.setItem('productosFavoritos', JSON.stringify(productos))

    window.alert('Agregado')
  }
}
