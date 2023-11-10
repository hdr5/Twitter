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
      message: 'we support israel',
      date: new Date(),
    },
    {
      name: 'Moriya',
      message: 'Hi jhjbnm jkjjvk jkni ,m uhuig gfyu kjbn b dyhjb uyhjkjjkmnnds jj,;kn jhhjcygfop;l., wjasjokm0qwp;. kopl,mekjaxol,.[eo;x jiujbewdygsikmewvguryuscioxk',
      date: new Date(),
    },
    {
      name: 'Moriya',
      message: 'Hi jhjbnm jkjjvk jkni ,m uhuig gfyu kjbn b dyhjb uyhjkjjkmnnds jj,;kn jhhjcygfop;l., wjasjokm0qwp;. kopl,mekjaxol,.[eo;x jiujbewdygsikmewvguryuscioxk',
      date: new Date(),
    },
    {
      name: 'Hadar',
      message: 'בעזרת הקב"ה כל החיילים והחטופים יחזרו בריאים ושלמים בגוף ובנפש',
      date: new Date(2021,2,23),
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
