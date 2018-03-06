import { Component, OnInit } from '@angular/core';

class Model{
  public id:number;
  public date:Date;
  constructor(id_1:number){
    this.id=id_1;
    this.date=new Date();
  }
}

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  //styleUrls: ['./servers.component.css']
  styles:[`
    .klasa1{
      color: white
    }
  `]
})
export class ServersComponent implements OnInit {

 /* private isEnabled: boolean = false;
  private username: string = '';

  constructor() { }

  ngOnInit() {
    setTimeout( () => this.isEnabled = true, 2000);
  }

  onButtonClicked(event: Event) {
    console.log(event.target);
  }

  valueChanged(event: Event) {
    if ( (<HTMLInputElement>event.target).value.length !== 0 ) {
      this.isEnabled=true;
    }
    else
    {
      this.isEnabled=false;
    }
  }
  
  buttonClicked(){
    this.username='';
    console.log("button clicked");
  }*/

  constructor() { }
  
  public isVisible:boolean = false;
  //public models: Array<Model> = [];
  public models: Model[] = [];
  public intervals: number=0;

  ngOnInit() {

  }

  toggleVisible(){
    this.isVisible=!this.isVisible;
    this.models.push(new Model(this.intervals++));
  }

  setStyle(index:number){
    return{
      'background-color': index > 5 ? 'blue' : 'white'
    }
  }

  setKlasa(index:number){
    return{
      'klasa1' : index > 5
    }
  }
}
