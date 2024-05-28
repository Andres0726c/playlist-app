import { Component, OnInit } from '@angular/core';
import { PlaylistService } from '../../services/playlist.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-playlist-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './playlist-list.component.html',
  styleUrl: './playlist-list.component.css'
})
export class PlaylistListComponent implements OnInit {
  playlists: any[] = [];

  constructor(private playlistService: PlaylistService) {}

  ngOnInit(): void {
    this.playlistService.getPlaylists().subscribe(data => {
      this.playlists = data;
    });
  }
}
