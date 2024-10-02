import { Component } from '@angular/core';
import { RouterModule,Router } from '@angular/router';
import { AuthService} from '../../../services/auth.service';
import { FormsModule } from '@angular/forms';  // Import FormsModule

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  onSubmit() {
    const credentials = {
      email: this.email,
      password: this.password
    };

    // Call the AuthService to make the HTTP request to your backend
    this.authService.signIn(credentials).subscribe({
      next: (response) => {
        localStorage.setItem('authToken', response.accessToken); // Store token
        alert('Sign-in successful!');
        this.router.navigate(['/dashboard']); // Navigate to dashboard on success
      },
      error: (error) => {
        console.error('Sign-in failed', error);
        const errorMessage = error.error?.message || 'An unknown error occurred.';
        alert('Sign-in failed: ' + errorMessage); // Alert on error
        // Optionally display an error message to the user
      }
    });

  //   this.authService.signUp(credentials).subscribe({
  //     next: (response) => {
  //         localStorage.setItem('authToken', response.accessToken); // Store token
  //         // alert('Sign-up successful!'); // Alert on successful sign-up
  //         this.router.navigate(['/dashboard']); // Navigate to dashboard on success
  //     },
  //     error: (error) => {
  //         console.error('Sign-in failed', error);
  //         // alert('Sign-up failed: ' + (error.message || 'An unknown error occurred.')); // Alert on error
  //     }
  // });
  
  }}
