import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearlyAnalysisCardComponent } from './yearly-analysis-card.component';

describe('YearlyAnalysisCardComponent', () => {
  let component: YearlyAnalysisCardComponent;
  let fixture: ComponentFixture<YearlyAnalysisCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YearlyAnalysisCardComponent]
    });
    fixture = TestBed.createComponent(YearlyAnalysisCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
