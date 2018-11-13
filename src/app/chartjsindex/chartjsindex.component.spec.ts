import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartjsindexComponent } from './chartjsindex.component';

describe('ChartjsindexComponent', () => {
  let component: ChartjsindexComponent;
  let fixture: ComponentFixture<ChartjsindexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartjsindexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartjsindexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
