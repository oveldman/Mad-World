import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnonymousTopNavComponent } from './anonymous-top-nav.component';

describe('AnonymousTopNavComponent', () => {
  let component: AnonymousTopNavComponent;
  let fixture: ComponentFixture<AnonymousTopNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnonymousTopNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnonymousTopNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
