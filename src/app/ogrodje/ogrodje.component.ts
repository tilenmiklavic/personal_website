import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ogrodje',
  templateUrl: './ogrodje.component.html',
  styleUrls: ['./ogrodje.component.css']
})
export class OgrodjeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.setTheme();
  }

  navFirst: string = "UGA";
  navSecond: string = "BUGA";

  monkeReveal(index: number): void {
    if (index == 1) {
      this.navFirst = "PHOTOGRAPHY";
    } else if (index == 2) {
      this.navSecond = "ABOUT";
    }
  }

  monkeHide(): void {
    this.navFirst = "UGA";
    this.navSecond = "BUGA";
  }

  toggleTheme(): void {
    if (!localStorage.getItem("theme")) {
      localStorage.setItem("theme", "dark");
    } else {
      if (localStorage.getItem("theme") == "dark") {
        localStorage.setItem("theme", "light")
      } else {
        localStorage.setItem("theme", "dark")
      }
    }

    document.body.classList.toggle('dark-theme');
  }

  setTheme(): void {
    console.log(localStorage.getItem("theme"));
    if (localStorage.getItem("theme") == "dark") {
      document.body.classList.toggle('dark-theme');
    }
  }
}
