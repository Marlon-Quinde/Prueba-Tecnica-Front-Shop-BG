import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Environments } from '../../../../environments/env';
import { ResponseBack } from '../../../../shared/interfaces/responseBack.interface';
import { ListadoProducto } from '../interfaces/listadoProducto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private baseUrl: string = Environments.baseUrl
  constructor(private _http: HttpClient) { }


  getProducts(){
    const url = `${this.baseUrl}/productos/listado-producto`
    return this._http.get<ResponseBack<ListadoProducto[]>>(url)
  }
}
