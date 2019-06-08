import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubsinkComponent } from './subsink.component';

describe('SubsinkComponent', () => {
  let component: SubsinkComponent;
  let fixture: ComponentFixture<SubsinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubsinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubsinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
