import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';


@NgModule({
  declarations: [ConfirmDialogComponent ],
  imports: [
    CommonModule,
  ],
    exports: [
    ConfirmDialogComponent   // ✅ Export so other modules can use it
  ],
  
  
})
export class SharedModule { }
