import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicbuttonComponent } from './dynamicbutton.component';

describe('DynamicbuttonComponent', () => {
  let component: DynamicbuttonComponent;
  let fixture: ComponentFixture<DynamicbuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicbuttonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
