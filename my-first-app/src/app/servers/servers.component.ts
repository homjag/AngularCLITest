import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  UpdateServerName = 'TestServer';
  serverCreated = false;
  servers = ['TestServer', 'TestServer2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
   }

  ngOnInit() {
  }

  onCreateServer(){
    this.servers.push(this.UpdateServerName);
    this.serverCreated = true;
    // this.serverCreationStatus = 'Server was created! Name is ' + this.UpdateServerName;
  }
  onUpdateServer(event: Event){
    this.UpdateServerName = (<HTMLInputElement>event.target).value;
  }
}
