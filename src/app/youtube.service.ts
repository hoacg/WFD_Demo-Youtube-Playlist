import { Injectable } from '@angular/core';
import {Video} from './video';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  constructor(private httpClient: HttpClient) { }

  getVideoList(): Observable<Video[]> {
    return this.httpClient.get<Video[]>('http://localhost:5000/playlist');
  }

  addVideo(video: Video): Observable<Video> {
    return this.httpClient.post<Video>('http://localhost:5000/video', video);
  }
}
