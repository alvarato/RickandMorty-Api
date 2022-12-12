import { LowerCasePipe } from '@angular/common';
import { IfStmt } from '@angular/compiler';
import { Component,OnInit } from '@angular/core';
import { JsonserviceService } from '../service/jsonservice.service';
import { BusquedaService } from '../servicios/busqueda.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  showInfo: any = null;
  infoBusqueda:any ="";

  constructor(private serviceBusqueda: BusquedaService,private jsonData :JsonserviceService) {}

  ngOnInit():void {
    const random : string = this.randomCharacter();
    const url = "https://rickandmortyapi.com/api/character/"+random;
    if(this.showInfo == null){
      this.jsonData.getCharacter(url).subscribe((res:any) =>{
        this.showInfo = res;
      });
    } 
    this.serviceBusqueda.disparadorBusqueda.subscribe(data => {
    this.infoBusqueda = data.data.toLowerCase();
    let url;
    if(this.infoBusqueda=="") url = "https://rickandmortyapi.com/api/character"
    else url = "https://rickandmortyapi.com/api/character/?name=" + this.infoBusqueda;
    this.jsonData.getCharacter(url).subscribe((res:any) =>{
      this.showInfo = res.results;
    });
    });

    } 

    randomCharacter():string{
      let result = "";
      for (let index = 0; index < 12; index++) {
      const n = Math.trunc(Math.random() * (183 - 1) + 1);
      result +=(index < 11)? n + ",": n;
      }
      return result;
    }

  }

