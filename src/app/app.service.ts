import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  myObservableMethod$(): Observable<number> {
    return from(this.arr);
  }
}

// if i want to emmit each array element one by one then i can use from operator instead of of  operator
// from(this.arr,this,arr2)

//  want to emmit whole array then use of() operator
