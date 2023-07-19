import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'
import { SettingsDialogComponent } from '../settings-dialog/settings-dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(SettingsDialogComponent, {
      panelClass: 'setting-dialog'
    })
  }
}
