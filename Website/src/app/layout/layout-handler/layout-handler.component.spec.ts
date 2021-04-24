import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutHandlerComponent } from './layout-handler.component';

describe('LayoutHandlerComponent', () => {
  let component: LayoutHandlerComponent;
  let fixture: ComponentFixture<LayoutHandlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutHandlerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
