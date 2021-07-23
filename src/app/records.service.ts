import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Episode {
  id: string;
  name: string;
  characters: string;
  airdate: number;
  url:string;
}

export class RecordsService implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit() {
    let url: string = 'https://rickandmortyapi.com/api/location/2';
    return this.http.get(url);
  }
}
