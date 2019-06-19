import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getQuery(query: string)
  {
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders
    ({
      'Authorization': 'Bearer BQBS8ZEHQlSf2zsqgkekbYpsTPS7L02YeqxrH-xpItmjfUvFy2PRrgEvjzCvc4Oa2EBn60Q-mVM1WuL4bAbs3gUNKF1cNVY2n2nEDcwPPmzVuowi87A6V2Wvi0lfc33oJqoBFJOlx-bw2ts'
    });

    return this.http.get(url, { headers });
  }

  getNewReleases()
  {
    return this.getQuery('browse/new-releases?limit=20')
          .pipe(map((data: any) =>
          {
            return data['albums'].items;
          }));
  }

  getArtistas(termino: string)
  {
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
          .pipe(map(data => data['artists'].items));
  }

  getArtista(artistaID: string)
  {
    return this.getQuery(`artists/${artistaID}`);
  }

  getTopTracks(id: string)
  {
    return this.getQuery(`artists/${id}/top-tracks?country=us`)
          .pipe(map(data => data['tracks']));
  }
}
