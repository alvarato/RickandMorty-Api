import { Component } from '@angular/core';
import { BusquedaService } from '../servicios/busqueda.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

busqueda:string ="";

constructor(private serviceBusqueda: BusquedaService){}

search():void{
  this.serviceBusqueda.disparadorBusqueda.emit({
    data:this.busqueda
  });
}
}
