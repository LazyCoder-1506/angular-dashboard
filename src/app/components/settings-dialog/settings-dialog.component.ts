import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog'
import { CdkDragDrop, CdkDropList, CdkDrag, moveItemInArray } from '@angular/cdk/drag-drop'
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { settingsSelector } from 'src/app/state/setting/setting.selector';
import { Setting } from 'src/app/state/setting/setting.model';
import { updateSettings } from '../../state/setting/setting.action'

@Component({
  selector: 'app-settings-dialog',
  templateUrl: './settings-dialog.component.html',
  styleUrls: ['./settings-dialog.component.css']
})
export class SettingsDialogComponent implements OnInit, OnDestroy {
  settings$: Observable<Setting>;
  private subscription: Subscription;
  layout: "row" | "column";
  cardSize: "small" | "large";
  chartSize: "small" | "large";
  sectionOrder: string[];
  cardOrder: string[];
  chartOrder: string[];

  constructor(public dialogRef: MatDialogRef<SettingsDialogComponent>, private store: Store) {
    this.settings$ = this.store.select(settingsSelector)
  }

  ngOnInit(): void {
    this.subscription = this.settings$.subscribe(value => {
      this.layout = value.layout;
      this.cardSize = value.cardSize;
      this.chartSize = value.chartSize;
      this.sectionOrder = [...value.sectionOrder];
      this.cardOrder = [...value.cardOrder];
      this.chartOrder = [...value.chartOrder];
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    const newSetting: Setting = {
      layout: this.layout,
      cardSize: this.cardSize,
      chartSize: this.chartSize,
      cardOrder: this.cardOrder,
      sectionOrder: this.sectionOrder,
      chartOrder: this.chartOrder,
    }
    this.store.dispatch(updateSettings({ newSetting }))

    this.onCancel()
  }

  updateLayout(value): void {
    this.layout = value
  }
  updateCardSize(value): void {
    this.cardSize = value
  }
  updateChartSize(value): void {
    this.chartSize = value
  }

  sectionDrop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.sectionOrder, event.previousIndex, event.currentIndex);
  }
  cardDrop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.cardOrder, event.previousIndex, event.currentIndex);
  }
  chartDrop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.chartOrder, event.previousIndex, event.currentIndex);
  }
}
