import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'popup-root',
  templateUrl: './popup.component.html',
})
export class PopupComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

}