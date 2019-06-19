import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent
{
  artista: any = {};
  topTracks: any[] = [];
  loading: boolean;

  constructor(private router: ActivatedRoute, private spotify: SpotifyService)
  {
    this.loading = true;
    this.router.params.subscribe(params =>
    {
      this.getArtista(params['id']);
      this.getTopTracks(params['id']);
    });
  }

  getArtista(artistaID: string)
  {
    this.spotify.getArtista(artistaID)
    .subscribe(artista =>
    {
      this.artista = artista;
      this.loading = false;
    });
  }

  getTopTracks(artistaID: string)
  {
    this.spotify.getTopTracks(artistaID)
    .subscribe(topTracks =>
      {
        this.topTracks = topTracks;
      });
  }
}
