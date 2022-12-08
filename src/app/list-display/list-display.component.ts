import { Component, OnInit } from '@angular/core';
import { FavListService } from '../fav-list.service';

@Component({
  selector: 'app-list-display',
  templateUrl: './list-display.component.html',
  styleUrls: ['./list-display.component.scss']
})
export class ListDisplayComponent implements OnInit {
  public favoriteItems: number = 0;
  public limitReached = false;

  constructor(private _favListService: FavListService) { }

  ngOnInit(): void {
    this.favoriteItems = 1;

    this._favListService.getListCount().subscribe((lData) => {
      this.favoriteItems = lData.favItems;

      if (lData.favItems > 10) {
        this.setLimitReached(true);
      }
    })
  }

  setLimitReached(flag: boolean) {
    this.limitReached = flag;
  }


  setFavItemsListCount() {
    this._favListService.setListCount('favItems', 10)
  }

  setMaxFavItemsListCount() {
    this._favListService.setListCount('favItems', 15)
  }
}
