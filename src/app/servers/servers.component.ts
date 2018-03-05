import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  private isEnabled: boolean = false;
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
  }
}
