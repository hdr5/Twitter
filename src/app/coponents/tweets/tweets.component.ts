import { Component,Input } from '@angular/core';
import { TweetService } from 'src/app/services/tweet.service';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css']
})
export class TweetsComponent {

  public list = [
    {
      name: 'Hw1',
      message: 'We support israel ❤️',
      img:'assets/backiee-14485.jpg',
      date: new Date(),
    },
    {
      name: 'Gili',
      message: 'Hi jhjbnm jkjjvk jkni ,m uhuig gfyu kjbn b dyhjb uyhjkjjkmnnds jj,;kn jhhjcygfop;l., wjasjokm0qwp;. kopl,mekjaxol,.[eo;x jiujbewdygsikmewvguryuscioxk',
      img: 'assets/backiee-14485.jpg',
      date: new Date(),
    },
      {
      name: 'Alon',
      message: 'Hi jhjbnm jkjjvk jkni ,m uhuig gfyu kjbn b dyhjb uyhjkjjkmnnds jj,;kn jhhjcygfop;l., wjasjokm0qwp;. kopl,mekjaxol,.[eo;x jiujbewdygsikmewvguryuscioxk',
      img: 'assets/backiee-14485.jpg',
      date: new Date(),
    },
      {
      name: 'Mor',
      message: 'Hi gfyu kjbn b dyhjb uyhjkjjkmnnds jj,;kn jhhjcygfop;l., wjasjokm0qwp;. kopl,mekjaxol,.[eo;x jiujbewdygsikmewvguryuscioxk',
      img: 'assets/backiee-14485.jpg',
      date: new Date(2024, 4, 3),
    },
 
  ]

  @Input() user: any;
  
  constructor(private tweetService: TweetService){}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.tweetService.getTweets()
}
}
