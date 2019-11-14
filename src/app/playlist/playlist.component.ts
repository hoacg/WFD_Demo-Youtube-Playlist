import { Component, OnInit } from '@angular/core';
import {YoutubeService} from '../youtube.service';
import {Video} from '../video';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {

  videoList: Video[];

  constructor(private youtubeService: YoutubeService) { }

  ngOnInit() {
    this.videoList = this.youtubeService.getVideoList();
  }

}
