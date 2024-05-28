import { Component, OnInit } from '@angular/core';
import { PlaylistService } from '../../services/playlist.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-playlist-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './playlist-form.component.html',
  styleUrl: './playlist-form.component.css'
})
export class PlaylistFormComponent {
  playlist = {
    nombre: '',
    descripcion: '',
    canciones: []
  };

  constructor(private playlistService: PlaylistService, private router: Router) {}

  onSubmit(): void {
    this.playlistService.createPlaylist(this.playlist).subscribe(() => {
      this.router.navigate(['/playlists']);
    });
  }
}
