import { Component, Input, OnInit } from '@angular/core';
import { PlaylistService } from '../../services/playlist.service';

@Component({
  selector: 'app-playlist-detail',
  standalone: true,
  imports: [],
  templateUrl: './playlist-detail.component.html',
  styleUrl: './playlist-detail.component.css'
})
export class PlaylistDetailComponent implements OnInit {
  @Input() playlistName: string | null = null;
  playlist: any = null;

  constructor(private playlistService: PlaylistService) {}

  ngOnInit(): void {
    if (this.playlistName) {
      this.playlistService.getPlaylist(this.playlistName).subscribe(data => {
        this.playlist = data;
      });
    }
  }
}