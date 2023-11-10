import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

// Singleton
export class TweetService {

  private tweetSubject$: Subject<any> = new Subject()
  private _tweets: any[] = []

  // constructor(private httpClient: HttpClient) { }

constructor() {}

  // public getTweets(): Observable<Array<any>>{
  //   
  //   // return this.httpClient.get<Array<any>>("https://fakestoreapi.com/products/1");
  // }
  public getTweets(): any[]{
    return this._tweets
  }
  public setTweets(tweets:any[]):void{
    this._tweets = [...this._tweets, ...tweets]
  }
}
