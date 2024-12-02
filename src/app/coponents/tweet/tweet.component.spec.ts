import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetComponent } from './tweet.component';

describe('TweetComponent', () => {
  let component: TweetComponent;
  let fixture: ComponentFixture<TweetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TweetComponent]
    });
    fixture = TestBed.createComponent(TweetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();// Triggers change detection
  });

  it('should create', () => {
    expect(component).toBeTruthy(); // Verifies the component was created successfully
  });
});
