import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor() { }
  @Input() title : string;
  @Input() subtitle : string;
  @Input() image : string;
  @Input() text : string;

  ngOnInit(): void {
  }

}
