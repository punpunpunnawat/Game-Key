import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css',
  imports: [RouterModule],
})
export class NavBar {

  constructor(private router: Router) {}
  
  handleClickSteam() {
    console.log('Opening Steam store...');
  }

  handleClickPlayStation() {
    console.log('Opening PlayStation store...');
  }

  handleClickNintendo() {
    console.log('Opening Nintendo store...');
  }

  handleClickMyKeys() {
    console.log('Opening My Keys...');
    this.router.navigate(['/my-keys']);
  }

  handleClickLogout() {
    console.log('Logging out...');
  }
}
