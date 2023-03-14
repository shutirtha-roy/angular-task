import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubCategoryOneComponent } from './sub-category-one.component';

describe('SubCategoryOneComponent', () => {
  let component: SubCategoryOneComponent;
  let fixture: ComponentFixture<SubCategoryOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubCategoryOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubCategoryOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
