import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  private isEnabled:boolean = false;

  constructor() { }

  ngOnInit() {
    setTimeout( () => this.isEnabled = true, 2000);
  }

}
