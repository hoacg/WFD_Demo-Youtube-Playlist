import { Injectable } from '@angular/core';
import {Video} from './video';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  getVideoList(): Video[] {
    return [
      {
        title: 'Hay trao cho anh',
        id: 'knW7-x7Y7RE'
      },
      {
        title: 'Lac troi',
        id: 'Llw9Q6akRo4'
      },
      {
        title: 'Hong nhan',
        id: '8x2NjwwHUbQ'
      },
      {
        title: 'Tu tam',
        id: '4GuR_g75ufY'
      }
    ];
  }
}
