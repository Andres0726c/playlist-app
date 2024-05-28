import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaylistListComponent } from './components/playlist-list/playlist-list.component';
import { PlaylistDetailComponent } from './components/playlist-detail/playlist-detail.component';
import { PlaylistFormComponent } from './components/playlist-form/playlist-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/playlists', pathMatch: 'full' },
  { path: 'playlists', component: PlaylistListComponent },
  { path: 'playlists/:name', component: PlaylistDetailComponent },
  { path: 'new-playlist', component: PlaylistFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
