import { Component } from '@angular/core';
import { NavBar } from "../../shared/components/nav-bar/nav-bar";

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})

export class Home {
  fetchGame = () => {
    console.log("called api");
    fetch("http://localhost:8080/test")
      .then(response => response.text())
      .then(data => console.log(data))
      .catch(err => console.error(err));
  }
}