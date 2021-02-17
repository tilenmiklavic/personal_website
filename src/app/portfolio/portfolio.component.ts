import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.addImages();
  }

  numberOfImages: number = 27
  firstColumn = []
  secondColumn = []
  thirdColumn = []

  addImages(): void {
    console.log("Adding images");
    let columnNum = 0;

    for (var i = 1; i <= this.numberOfImages; i++) {
      let name = "../../assets/images/portfolio" + i + ".jpg"

      if (columnNum == 0) {
        this.firstColumn.push(name)
        columnNum++
      } else if (columnNum == 1) {
        this.secondColumn.push(name)
        columnNum++
      } else {
        this.thirdColumn.push(name) 
        columnNum = 0
      }
    }
  }
}
