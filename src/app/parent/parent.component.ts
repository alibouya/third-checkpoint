import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  parentColor:string;
  @Output() sendColorFromParent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  senddatatochild() {
    
    this.sendColorFromParent.emit(this.parentColor)
   
  }

  onchangeColor(value) {
    return this.parentColor= value;
  }


}

// color: '';
//   constructor() { }

//   ngOnInit(): void {
//   }
//   onchangeColor(value){
//    this.color=value;
//   }
//   changecolorOnClick(){
//     this.color='';
//   }
