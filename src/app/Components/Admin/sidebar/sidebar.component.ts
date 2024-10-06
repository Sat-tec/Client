import { Component} from '@angular/core';
import { RouterModule } from '@angular/router'; // Import RouterModule
import { ModalService } from '../../../services/ModelServices/modal.service';
import {  MatDialogModule } from '@angular/material/dialog';
import { ModalComponent } from '../Masters/modal/modal.component';


@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule, MatDialogModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  constructor(private modalService: ModalService) {}

  openModal(header: string, fieldName: string, sequenOrder:string, tableName: string) {
    this.modalService.openModal(header, fieldName, sequenOrder, tableName);
  }

}
