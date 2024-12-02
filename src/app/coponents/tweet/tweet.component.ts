import { Component, Input } from '@angular/core';


interface Message {
  name: string;
  message: string;
  img: string;
  date: Date;
}
@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent {

  @Input() message: Message = { name: '', message: '', img: '', date: new Date() };

}
