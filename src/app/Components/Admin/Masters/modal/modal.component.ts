import { Component, Inject,ViewEncapsulation } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA,MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  standalone: true,
  imports: [MatDialogModule, MatInputModule, MatFormFieldModule, FormsModule],
  encapsulation: ViewEncapsulation.None,
})
export class ModalComponent {
  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  closeDialog(): void {
    this.dialogRef.close();
  }

  save(): void {
    // Implement save logic based on this.data.tableName or other passed data
    console.log('Save logic for:', this.data.tableName);
    this.dialogRef.close(this.data);
  }
}
