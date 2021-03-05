import { Component, Input,OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  color:any;
  constructor() { 
    
  }
  
  ngOnInit(): void {
  }
  treatdatafromparent(value){
     this.color=value;

  

  }

}
