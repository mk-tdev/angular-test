import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDisplayComponent } from './list-display.component';

describe('ListDisplayComponent', () => {
  let component: ListDisplayComponent;
  let fixture: ComponentFixture<ListDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListDisplayComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ListDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should setFavItemsListCount', () => {
    spyOn(component, 'setLimitReached').and.callThrough();
    component.setFavItemsListCount();
    expect(component.setLimitReached).not.toHaveBeenCalled();
    component.setMaxFavItemsListCount();
    expect(component.setLimitReached).toHaveBeenCalled();
  })
});
