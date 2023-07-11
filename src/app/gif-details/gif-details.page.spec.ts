import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GifDetailsPage } from './gif-details.page';

describe('GifDetailsPage', () => {
  let component: GifDetailsPage;
  let fixture: ComponentFixture<GifDetailsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GifDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
