import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubCategoryTwoComponent } from './sub-category-two.component';

describe('SubCategoryTwoComponent', () => {
  let component: SubCategoryTwoComponent;
  let fixture: ComponentFixture<SubCategoryTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubCategoryTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubCategoryTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
