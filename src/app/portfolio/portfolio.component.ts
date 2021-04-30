import { stringify } from '@angular/compiler/src/util';
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
  modalSlideShow = []
  modalImageSrc = null
  modalShow = false

  addImages(): void {
    console.log("Adding images");
    let columnNum = 0;

    for (var i = 1; i <= this.numberOfImages; i++) {

      var _image: { name: string, index: number} = {
        name: "../../assets/images/portfolio" + i + ".jpg",
        index: i
      }

      if (columnNum == 0) {
        this.firstColumn.push(_image)
        columnNum++
      } else if (columnNum == 1) {
        this.secondColumn.push(_image)
        columnNum++
      } else {
        this.thirdColumn.push(_image) 
        columnNum = 0
      }
    }
  }

  openModal(index: number): void {
    console.log(index);
    
    for (var i = index + 1; i <= this.numberOfImages; i++) {
      var _image = {
        name: "../../assets/images/portfolio" + i + ".jpg",
        index: i
      }
      this.modalSlideShow.push(_image);
    }

    for (var i = 1; i < index; i++) {
      var _image = {
        name: "../../assets/images/portfolio" + i + ".jpg",
        index: i
      }
      this.modalSlideShow.push(_image);
    }

    this.modalImageSrc = index;
    this.modalShow = true;
  }
}
