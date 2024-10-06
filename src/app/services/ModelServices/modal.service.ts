import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../../Components/Admin/Masters/modal/modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  constructor(private dialog: MatDialog) { }

  openModal(header: string, fieldName: string, sequenOrder: string, tableName: string) {
    this.dialog.open(ModalComponent, {
      data: {
        header,
        fieldName,
        sequenOrder,
        tableName
      },
      width: '100%',
      height: 'auto',
      panelClass: 'custom-modal-container',
      autoFocus: true,
    });
  }
}
