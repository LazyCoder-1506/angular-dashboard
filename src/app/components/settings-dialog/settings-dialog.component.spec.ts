import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsDialogComponent } from './settings-dialog.component';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { settingsSelector } from 'src/app/state/setting/setting.selector';
import { MatRadioModule } from '@angular/material/radio';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { updateSettings } from 'src/app/state/setting/setting.action';
import { Setting } from 'src/app/state/setting/setting.model';
import { DragDropEventFactory } from '../../utils/drag-drop-event-factory';

describe('SettingsDialogComponent', () => {
  let component: SettingsDialogComponent;
  let fixture: ComponentFixture<SettingsDialogComponent>;

  let mockStore: MockStore;

  const dialogMock = {
    close: () => { }
  };

  const dragDropEventFactory = new DragDropEventFactory<string>();

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SettingsDialogComponent],
      imports: [MatDialogModule, MatRadioModule, DragDropModule],
      providers: [provideMockStore({
        selectors: [
          {
            selector: settingsSelector,
            value: {
              layout: 'row',
              cardSize: 'large',
              chartType: 'column',
              sectionOrder: ['cards', 'charts', 'yearly'],
              cardOrder: ['population', 'ER', 'admission', 'cost', 'specialist'],
              chartOrder: ['age', 'location'],
            }
          }
        ]
      }), {
        provide: MatDialogRef,
        useValue: dialogMock
      }]
    });
    mockStore = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(SettingsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch action and then close dialog on save', () => {
    const dispatchSpy = spyOn(mockStore, 'dispatch').and.callThrough();
    const closeSpy = spyOn(component.dialogRef, 'close').and.callThrough();

    component.layout = 'column';
    component.cardSize = 'small';
    component.chartType = 'column';
    component.sectionOrder = ['yearly', 'charts', 'cards'];
    component.cardOrder = ["population", "ER", "admission", "cost", "specialist"];
    component.chartOrder = ['location', 'age'];

    const newSetting: Setting = {
      layout: 'column',
      cardSize: 'small',
      chartType: 'column',
      cardOrder: ["population", "ER", "admission", "cost", "specialist"],
      sectionOrder: ['yearly', 'charts', 'cards'],
      chartOrder: ['location', 'age'],
    }

    component.onSave();

    expect(dispatchSpy).toHaveBeenCalledWith(updateSettings({ newSetting }));
    expect(closeSpy).toHaveBeenCalled();
  });

  it('should close dialog on cancel', () => {
    const closeSpy = spyOn(component.dialogRef, 'close').and.callThrough();

    component.onCancel();

    expect(closeSpy).toHaveBeenCalled();
  });

  describe('drag drop events', () => {
    it('should update order of sections array on drag drop', () => {
      const initialOrder: string[] = ['cards', 'charts', 'yearly'];
      component.sectionOrder = [...initialOrder];
      const finalOrder: string[] = ['yearly', 'cards', 'charts'];
      const dragDropEvent = dragDropEventFactory.createInContainerEvent('sectionList', initialOrder, 2, 0);

      component.sectionDrop(dragDropEvent);
      fixture.detectChanges();

      expect(component.sectionOrder).toEqual(finalOrder);
    });

    it('should update order of cards array on drag drop', () => {
      const initialOrder: string[] = ['population', 'ER', 'admission', 'cost', 'specialist'];
      component.cardOrder = [...initialOrder];
      const finalOrder: string[] = ['ER', 'admission', 'cost', 'population', 'specialist'];
      const dragDropEvent = dragDropEventFactory.createInContainerEvent('cardList', initialOrder, 0, 3);

      component.cardDrop(dragDropEvent);
      fixture.detectChanges();

      expect(component.cardOrder).toEqual(finalOrder);
    });

    it('should update order of charts array on drag drop', () => {
      const initialOrder: string[] = ['age', 'location'];
      component.chartOrder = [...initialOrder];
      const finalOrder: string[] = ['location', 'age'];
      const dragDropEvent = dragDropEventFactory.createInContainerEvent('chartList', initialOrder, 0, 1);

      component.chartDrop(dragDropEvent);
      fixture.detectChanges();

      expect(component.chartOrder).toEqual(finalOrder);
    });
  });

});
