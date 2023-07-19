import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberCardComponent } from './number-card.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Setting } from 'src/app/state/setting/setting.model';
import { settingsSelector } from 'src/app/state/setting/setting.selector';
import { By } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';


describe('NumberCardComponent', () => {
  let component: NumberCardComponent;
  let fixture: ComponentFixture<NumberCardComponent>;

  let mockStore: MockStore<Setting>;
  let mockSelector;

  let title: string = "Cohort Population";

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NumberCardComponent],
      imports: [CommonModule],
      providers: [ provideMockStore() ]
    });
    mockStore = TestBed.inject(MockStore);
    mockSelector = mockStore.overrideSelector(
      settingsSelector,
      {
        layout: 'row',
        cardSize: 'large',
        chartType: 'donut',
        sectionOrder: ['cards', 'charts', 'yearly'],
        cardOrder: ['population', 'ER', 'admission', 'cost', 'specialist'],
        chartOrder: ['age', 'location'],
      }
    );
    fixture = TestBed.createComponent(NumberCardComponent);
    component = fixture.componentInstance;
    component.title = title;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a title', () => {
    const actualTitle = fixture.debugElement.query(By.css('[data-testid="title"]')).nativeElement.textContent;
    expect(actualTitle).toBe(title);
  });

  it('should have totalValue when currentLabel is empty', () => {
    component.totalValue = 500;
    component.currentLabel = "";
    fixture.detectChanges();
    const totalValueElement = fixture.debugElement.query(By.css('[data-testid="totalValue"]'))
    expect(totalValueElement).toBeTruthy();
    const actualTotalValue = totalValueElement.nativeElement.textContent;
    expect(actualTotalValue).toBe('500');
  });

  it('should not have totalValue template when currentLabel is not empty', () => {
    component.totalValue = 500;
    component.currentLabel = "abcd";
    fixture.detectChanges()
    const totalValueElement = fixture.debugElement.query(By.css('[data-testid="totalValue"]'))
    expect(totalValueElement).toBeNull();
  });

  it('should have formatted previous and current values and labels when currentLabel is not empty and currency is provided', () => {
    component.currentLabel = "Hello";
    component.currentValue = 1;
    component.previousLabel = "World";
    component.previousValue = 5.8756;
    component.metricCurrency = 'USD';
    fixture.detectChanges();
    const previousElement = fixture.debugElement.query(By.css('[data-testid="previous"]'))
    expect(previousElement).toBeTruthy();
    expect(previousElement.nativeElement.textContent).toBe("World: $5.88");
    const curentLabelElement = fixture.debugElement.query(By.css('[data-testid="currentLabel"]'))
    expect(curentLabelElement).toBeTruthy();
    expect(curentLabelElement.nativeElement.textContent).toBe('Hello (Till Today)');
    const currentValueElement = fixture.debugElement.query(By.css('[data-testid="currentValue"]'))
    expect(currentValueElement).toBeTruthy();
    expect(currentValueElement.nativeElement.textContent).toBe('$1');
  });

  it('should have normal previous and current values and labels when currentLabel is not empty and currency is not provided', () => {
    component.currentLabel = "Hello";
    component.currentValue = 1;
    component.previousLabel = "World";
    component.previousValue = 5;
    fixture.detectChanges();
    const previousElement = fixture.debugElement.query(By.css('[data-testid="previous"]'))
    expect(previousElement).toBeTruthy();
    expect(previousElement.nativeElement.textContent).toBe("World: 5");
    const curentLabelElement = fixture.debugElement.query(By.css('[data-testid="currentLabel"]'))
    expect(curentLabelElement).toBeTruthy();
    expect(curentLabelElement.nativeElement.textContent).toBe('Hello (Till Today)');
    const currentValueElement = fixture.debugElement.query(By.css('[data-testid="currentValue"]'))
    expect(currentValueElement).toBeTruthy();
    expect(currentValueElement.nativeElement.textContent).toBe('1');
  });

  it('should not have currentValue template when currentLabel is empty', () => {
    component.currentLabel = "";
    fixture.detectChanges()
    const previousElement = fixture.debugElement.query(By.css('[data-testid="previous"]'))
    expect(previousElement).toBeNull();
    const curentLabelElement = fixture.debugElement.query(By.css('[data-testid="currentLabel"]'))
    expect(curentLabelElement).toBeNull();
    const currentValueElement = fixture.debugElement.query(By.css('[data-testid="currentValue"]'))
    expect(currentValueElement).toBeNull();
  });

  describe('CSS classes', () => {
    it('has no class for column layout and large size', () => {
      mockSelector.setResult(
        {
          layout: 'column',
          cardSize: 'large',
          chartType: 'donut',
          sectionOrder: ['cards', 'charts', 'yearly'],
          cardOrder: ['population', 'ER', 'admission', 'cost', 'specialist'],
          chartOrder: ['age', 'location'],
        }
      )

      mockStore.refreshState();
      fixture.detectChanges();

      const hostElement = fixture.debugElement.nativeElement;
      expect(hostElement.classList).not.toContain('large');
      expect(hostElement.classList).not.toContain('small');
      expect(hostElement.classList).not.toContain('column-small');
    });

    it('has "large" class for row layout and large size', () => {
      mockSelector.setResult(
        {
          layout: 'row',
          cardSize: 'large',
          chartType: 'donut',
          sectionOrder: ['cards', 'charts', 'yearly'],
          cardOrder: ['population', 'ER', 'admission', 'cost', 'specialist'],
          chartOrder: ['age', 'location'],
        }
      )

      mockStore.refreshState();
      fixture.detectChanges();

      const hostElement = fixture.debugElement.nativeElement;
      expect(hostElement.classList).toContain('large');
      expect(hostElement.classList).not.toContain('small');
      expect(hostElement.classList).not.toContain('column-small');
    });

    it('has "column-small" class for column layout and small size', () => {
      mockSelector.setResult(
        {
          layout: 'column',
          cardSize: 'small',
          chartType: 'donut',
          sectionOrder: ['cards', 'charts', 'yearly'],
          cardOrder: ['population', 'ER', 'admission', 'cost', 'specialist'],
          chartOrder: ['age', 'location'],
        }
      )

      mockStore.refreshState();
      fixture.detectChanges();

      const hostElement = fixture.debugElement.nativeElement;
      expect(hostElement.classList).not.toContain('large');
      expect(hostElement.classList).not.toContain('small');
      expect(hostElement.classList).toContain('column-small');
    });

    it('has "small" class for row layout and small size', () => {
      mockSelector.setResult(
        {
          layout: 'row',
          cardSize: 'small',
          chartType: 'donut',
          sectionOrder: ['cards', 'charts', 'yearly'],
          cardOrder: ['population', 'ER', 'admission', 'cost', 'specialist'],
          chartOrder: ['age', 'location'],
        }
      )

      mockStore.refreshState();
      fixture.detectChanges();

      const hostElement = fixture.debugElement.nativeElement;
      expect(hostElement.classList).not.toContain('large');
      expect(hostElement.classList).toContain('small');
      expect(hostElement.classList).not.toContain('column-small');
    });
  });
});
