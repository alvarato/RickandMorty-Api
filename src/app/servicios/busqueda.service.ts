import { Injectable, Output,EventEmitter } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class BusquedaService {
  @Output() disparadorBusqueda: EventEmitter<any> = new EventEmitter();
    constructor() { }
}
