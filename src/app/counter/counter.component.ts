import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { Increment, Decrement, Reset } from '../reducers/counter.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  count$: Observable<number>;

  constructor(private readonly store: Store<{count: number}>) {
    this.count$ = store.pipe(select('count'));
  }

  ngOnInit() {
  }

  public increment(): void {
    this.store.dispatch(new Increment());
  }

  public decrement(): void {
    this.store.dispatch(new Decrement());
  }

  public reset(): void {
    this.store.dispatch(new Reset());
  }
}
