import { Component, OnInit } from '@angular/core';
import {YoutubeService} from '../youtube.service';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {

  videoList: any[];

  constructor(private youtubeService: YoutubeService) { }

  ngOnInit() {
    this.videoList = this.youtubeService.getVideoList();
  }

}
