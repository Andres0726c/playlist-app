import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environment';

interface Song {
  titulo: string;
  artista: string;
  album: string;
  anno: string;
  genero: string;
}

interface Playlist {
  nombre: string;
  descripcion: string;
  canciones: Song[];
}

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getPlaylists(): Observable<Playlist[]> {
    return this.http.get<Playlist[]>(`${this.apiUrl}/lists`);
  }

  getPlaylist(name: string): Observable<Playlist> {
    return this.http.get<Playlist>(`${this.apiUrl}/lists/${name}`);
  }

  createPlaylist(playlist: Playlist): Observable<Playlist> {
    return this.http.post<Playlist>(`${this.apiUrl}/lists`, playlist);
  }

  deletePlaylist(name: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/lists/${name}`);
  }
}
