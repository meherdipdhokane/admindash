import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MBoardComponent } from './m-board.component';

describe('MBoardComponent', () => {
  let component: MBoardComponent;
  let fixture: ComponentFixture<MBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
