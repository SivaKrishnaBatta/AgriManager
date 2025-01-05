import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private router: Router) {}
  
    isActive: boolean = false; // This will manage the toggle state
  
    // Show Register form
    showRegister(): void {
      this.isActive = true;
    }
  
    // Show Login form
    showLogin(): void {
      this.isActive = false;
    }
    login(){
      localStorage.setItem('isLoggedIn', '17');
      this.router.navigate(['/scm']);
    }
}
