import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubsinkService {

  private capitalizeFirstLetter$ = new Subject();

  constructor() { }

  capitalizeFirstLetter(value: string) {
    if (typeof value === undefined) {
      return;
    }
    let str = value.charAt(0);
    str = str ? str.toUpperCase() + value.slice(1) : '';
    this.capitalizeFirstLetter$.next(str);
  }

  getString() {
    return this.capitalizeFirstLetter$;
  }
}
