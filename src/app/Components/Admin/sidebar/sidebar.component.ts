import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Import RouterModule


@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

}
