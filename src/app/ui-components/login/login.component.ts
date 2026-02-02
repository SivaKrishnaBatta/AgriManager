import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isActive: boolean = false;
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      customerId: ['', Validators.required],
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  showLogin() {
    this.isActive = false;
  }

  showRegister() {
    this.isActive = true;
  }

  login(): void {
    if (this.loginForm.invalid) return;

    // 🔥 IMPORTANT FIX: trim password to avoid newline issue
    const payload = {
      customerId: this.loginForm.value.customerId,
      userName: this.loginForm.value.userName,
      password: this.loginForm.value.password.trim()
    };

    this.authService.login(payload).subscribe({
      next: (res) => {
        if (res.status) {
          // ✅ STORE JWT TOKEN
          localStorage.setItem('token', res.data.token);

          // ✅ STORE USER DETAILS
          localStorage.setItem('user', JSON.stringify(res.data));

          // ✅ REDIRECT AFTER LOGIN
          this.router.navigate(['/agri/dashboard']);
        }
      },
      error: () => {
        alert('Invalid login credentials');
      }
    });
  }
}
