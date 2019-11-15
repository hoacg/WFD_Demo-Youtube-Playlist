import { Injectable } from '@angular/core';
import {Video} from './video';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  API_URL = 'http://localhost:5000/';

  constructor(private httpClient: HttpClient) { }

  getVideoList(): Observable<Video[]> {
    return this.httpClient.get<Video[]>(this.API_URL + 'playlist');
  }

  addVideo(video: Video): Observable<Video> {
    return this.httpClient.post<Video>(this.API_URL + 'video', video);
  }
}
