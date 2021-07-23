import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RickandmortyinfoComponent } from './rickandmortyinfo.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'RecordsService' },
  { path: 'RecordsService', component: 'rickandmortyinfoComponent' }
];

@NgModule({
  declarations: [AppComponent, RickandmortyinfoComponent],
  exports: [RouterModule],
  imports: [
    BrowserModule,
    FormsModule,
    // import HttpClientModule after BrowserModule.
    HttpClientModule,
    [RouterModule.forRoot(routes)]
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
