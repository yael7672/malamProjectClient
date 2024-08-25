import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-pop-up-for-image',
  templateUrl: './pop-up-for-image.component.html',
  styleUrls: ['./pop-up-for-image.component.css']
})
export class PopUpForImageComponent implements OnInit {

  @Input() ifX!: boolean;
  @Input() header!: string;
  @Input() imagesToShow!: any;
  @Input() imagesArr!: any[];
  @Input() ifMinus!: boolean;
  @Input() ifShowArrow!: boolean;
  @Input() title!: any;
  @Output() ClosePopUp = new EventEmitter<any>();
  currntIndex: any;
  isClose = false;
  constructor() {


  }

  ngOnInit(): void {
  }
  closePopUp(){}

}

