import { Component, inject, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { filter, map, reduce } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  appService = inject(AppService);

  ngOnInit(): void {
    this.appService
      .myObservableMethod$()
      .pipe(map((num) => num * num))
      .subscribe({
        next: (val) => console.log('map operator: ', val),
      });

    this.appService
      .myObservableMethod$()
      .pipe(filter((num) => num % 2 === 0))
      .subscribe({
        next: (val) => console.log('filter operator: ', val),
      });

    this.appService
      .myObservableMethod$()
      .pipe(reduce((acc, curr) => acc + curr, 0))
      .subscribe({
        next: (val) => console.log('reduce operator: ', val),
      });
  }
}
