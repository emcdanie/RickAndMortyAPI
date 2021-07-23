import { Component, OnInit } from '@angular/core';
import { RecordsService } from '../records.service'
import { RestApiService } from "../shared/rest-api";
@Component({
  selector: 'app-rickandmortyinfo',
  templateUrl: './rickandmortyinfo.component.html',
  styleUrls: ['./rickandmortyinfo.component.css'],
  providers: [RecordsService]
})
export class RickAndMortyInfoComponent implements OnInit {
  Records: any = [];

  constructor(
    public restApi: RestApiService
  ) { }

  ngOnInit() {
    this.loadRecords()
  }

  // Get employees list
  loadRecords() {
    return this.restApi.getEmployees().subscribe((data: {}) => {
      this.Records = data;
    })
  }
