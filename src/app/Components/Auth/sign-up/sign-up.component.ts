import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { AuthService, User } from '../../../services/auth.service';
import { FormsModule } from '@angular/forms';  // Import FormsModule


@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {
  username: string = ''; // Ensure these fields are declared
  email: string = '';
  password: string = '';
  confpassw: string = '';
  // Bind this with ngModel in the HTML

  constructor(private authService: AuthService, private router: Router) { }

  // This function will be triggered on form submission
  onSubmit() {
    if (!this.email || !this.password || !this.password || !this.confpassw) {
      alert('Fields are empty!');
      return; // Prevent further execution
    }

    // Check if password and confirm password match
    if (this.password !== this.confpassw) {
      console.error('Passwords do not match');
      alert('Passwords do not match!');  // You can also show a more elegant error message on the UI
      return; // Stop form submission
    }

    const credentials: User = {
      username: this.username,       // Ensure username is included
      email: this.email,             // Ensure email is included
      password: this.password,       // Ensure password is included
      confirmPassword: this.confpassw // Ensure confirmPassword is included
  };

    // Call the AuthService to make the HTTP request to your backend
    this.authService.signUp(credentials).subscribe({ 
      next: (response) => {
          localStorage.setItem('authToken', response.accessToken); // Store token
          alert('Sign-up successful!');
          this.router.navigate(['/signin']); // Navigate to dashboard on success
      },
      error: (error) => {
          console.error('Sign-in failed', error);
        }
  });
  
  }
}

