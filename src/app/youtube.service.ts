import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  getVideoList() {
    return [
      {
        title: 'Hay trao cho anh',
        id: '..'
      },
      {
        title: 'Lac troi',
        id: '..'
      }
    ];
  }
}
