import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from '../models/Character';
import { JsonserviceService } from '../service/jsonservice.service';

@Component({
  selector: 'app-open-card',
  templateUrl: './open-card.component.html',
  styleUrls: ['./open-card.component.css']
})
export class OpenCardComponent implements OnInit{
  
  life:boolean = false;
  constructor(private json: JsonserviceService,private route: ActivatedRoute ){}
  id:any = 1;
  character:any | Character = [];
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id");
    const url = "https://rickandmortyapi.com/api/character/" + this.id;
    this.json.getCharacter(url).subscribe((c: any) => {
      this.character = new Character(c.id,c.name,c.status,c.species,c.type,c.gender,c.origin,
      c.location,c.image,c.episode,c.url,c.created);
    });
  }
  

}
//new Character(c.id,c.name,c.status,c.species,c.type,c.gender,c.origin,
// c.location,c.image,c.episode,c.url,c.created);
