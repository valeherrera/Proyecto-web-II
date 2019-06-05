import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyfunctionsComponent } from './myfunctions.component';

describe('MyfunctionsComponent', () => {
  let component: MyfunctionsComponent;
  let fixture: ComponentFixture<MyfunctionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyfunctionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyfunctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
