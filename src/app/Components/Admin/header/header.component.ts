import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private router: Router) {}
  signOut() {
    // Optionally call the sign-out endpoint
    // this.authService.signOut().subscribe({
    //     next: (response) => {
    //         console.log(response.message);
    //     },
    //     error: (error) => {
    //         console.error('Sign-out failed', error);
    //     }
    // });

    // Remove token from local storage
    localStorage.removeItem('authToken');
    
    // Redirect to login or home page
    this.router.navigate(['/signin']);
}}
