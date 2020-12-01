import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AlertComponent } from '../layout/alert/alert.component';

@Injectable({
  providedIn: 'root',
})
export class DialogService {

  constructor(
    public dialog: MatDialog,
  ) {
  }

  public showAlertDialog(data): void {
    const dialog = this.dialog.open(AlertComponent, {
      data,
    });
  }

}
