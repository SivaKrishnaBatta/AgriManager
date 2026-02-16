import { Component, OnInit } from '@angular/core';
// import { UserService } from 'src/app/services/user/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  activeTab: 'details' | 'roles' = 'details';

    user: any = {
    userId: 1,
    fullName: 'r bharath redddy',
    roleName: 'Admin',
    username: 'rbharath reddy',
    mobile: '9876543210',
    email: 'bharath@cortracker360.com',
    customerType: 'Business',
    currency: 'INR',
    language: 'English'
  };

  // ✅ Dummy roles
  roles: any[] = [
    { roleId: 1, roleName: 'Admin' },
    { roleId: 2, roleName: 'Manager' },
    { roleId: 3, roleName: 'User' }
  ];

  // popup states
  showEditPopup = false;
  showResetPopup = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.loadProfile();
    this.loadRoles();
  }

  loadProfile() {
    // this.userService.getMyProfile().subscribe((res: any) => {
    //   this.user = res.data;
    // });
  }

  loadRoles() {
    // this.userService.getUserRoles().subscribe((res: any) => {
    //   this.roles = res.data || [];
    // });
  }

  switchTab(tab: 'details' | 'roles') {
    this.activeTab = tab;
  }

  editUser() {
  this.router.navigate(['/users/edit', this.user.userId]);
}

  openReset() {
    this.showResetPopup = true;
  }

  closeReset() {
    this.showResetPopup = false;
  }

  saveProfile(updated: any) {
    // this.userService.updateProfile(updated).subscribe(() => {
  
      this.loadProfile();
    // });
  }

  resetPassword() {
    // this.userService.resetPassword(this.user.userId).subscribe(() => {
    //   alert('Password reset successfully');
    //   this.closeReset();
    // });
  }
}
