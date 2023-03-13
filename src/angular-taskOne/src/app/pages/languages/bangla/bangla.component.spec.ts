import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BanglaComponent } from './bangla.component';

describe('BanglaComponent', () => {
  let component: BanglaComponent;
  let fixture: ComponentFixture<BanglaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BanglaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BanglaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
