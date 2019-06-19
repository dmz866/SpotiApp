import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent
{
  nuevasCanciones: any = []
  loading: boolean;

  constructor(private spotify: SpotifyService)
  {
    this.loading = true;
    this.spotify.getNewReleases()
    .subscribe((data:any) =>
      {
        this.nuevasCanciones = data;
        this.loading = false;
      });
  }

  /*
  paises = [];

   constructor(private http: HttpClient)
  {
    this.http.get('https://restcountries.eu/rest/v2/lang/es')
    .subscribe((respuesta: any) =>
    {
      this.paises = respuesta;
    });
  } */
}
