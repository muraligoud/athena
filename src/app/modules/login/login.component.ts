
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({

  selector: 'app-login',

  templateUrl: './login.component.html',

  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginFormData: any = {};

  constructor(private router: Router) { }

  onFieldDataChanged(e: any) {
    this.loginFormData[e.dataField] = e.value;
  }

  onLoginClick() {
    const isValidEmail = this.validateEmail(this.loginFormData.username);

    if (!isValidEmail) {
      alert('Invalid email format. Please enter a valid email address.');
      return;
    }

    // Check if the login credentials are valid (you may replace this with your own logic)
    if (this.loginFormData.username && this.loginFormData.password) {
      // If valid, store login data in local storage
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userEmail', this.loginFormData.username);
      localStorage.setItem('userPassword', this.loginFormData.password);

      this.router.navigateByUrl('/application/home');
    } else {
      // Handle invalid login credentials
      alert('Invalid login credentials. Please try again.');
    }
  }


  validateEmail(email: string) {
    if (email) {
      const emailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // To validate the email entered by the user;
      return emailRegExp.test(email)
    } else {
      return true;
    }
  }

}
