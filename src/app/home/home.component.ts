import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  showLoginPopup: boolean = false;
  showRegisterPopup: boolean = false; // Add this line

  startButtonClick() {
    this.showLoginPopup = true;
  }

  closeLogin() {
    this.showLoginPopup = false;
  }

  openRegister() {
    this.showRegisterPopup = true;
    this.showLoginPopup = false; // Close the login popup if open
  }

  closeRegister() {
    this.showRegisterPopup = false;
  }
}