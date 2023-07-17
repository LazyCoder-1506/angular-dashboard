import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog'
import { CdkDragDrop, CdkDropList, CdkDrag, moveItemInArray } from '@angular/cdk/drag-drop'
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { settingsSelector } from 'src/app/state/setting/setting.selector';
import { Setting } from 'src/app/state/setting/setting.model';

@Component({
  selector: 'app-settings-dialog',
  templateUrl: './settings-dialog.component.html',
  styleUrls: ['./settings-dialog.component.css']
})
export class SettingsDialogComponent implements OnInit, OnDestroy {
  settings$: Observable<Setting>;
  private subscription: Subscription;
  layout: string;
  cardSize: string;
  chartSize: string;
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
