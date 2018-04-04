import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ComponentService } from './app.component.service';
import { Product } from './app.interface';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  products: Product[];

  constructor(private productService: ComponentService,public dialog: MatDialog){

  }

  ngOnInit(){
    this.products = this.productService.getProductFromService();
  }

  openDialog() {
    this.dialog.open(DialogDataExampleDialog, {
      data: {
        
      }
    });
  }
}

@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: './app.popup.component.html',
})
export class DialogDataExampleDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}