import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavListService {

  constructor() { }

  private listCount = new BehaviorSubject({
    favItems: 0,
    favFood: 0,
    hasFoodInList: true,
    hasTravelInList: false,
  })
  private listCount$ = this.listCount.asObservable();

  getListCount() {
    return this.listCount$;
  }

  setListCount(propName: string, propValue: any) {
    const updatedValue = { ...this.listCount.value, [propName]: propValue };
    return this.listCount.next(updatedValue)
  }
}
