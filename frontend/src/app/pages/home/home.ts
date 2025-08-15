import { Component } from '@angular/core';
import { NavBar } from "../../shared/components/nav-bar/nav-bar";
import { getGame } from '../../core/api/api';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})

export class Home {
  fetchGame = async () => {
    console.log("called api");
    const games = await getGame("token");
    console.log(games)
  }
}