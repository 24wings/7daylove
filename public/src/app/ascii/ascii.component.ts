import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-ascii',
  templateUrl: './ascii.component.html',
  styleUrls: ['./ascii.component.css']
})
export class AsciiComponent implements OnInit {
  @Input() code;
  showLetter= '';
  constructor() {
 
   }

  ngOnInit() {
       this.showLetter = String.fromCharCode(this.code);
    console.log(this.code,this.showLetter)
  }

}
