import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';
import { Servers } from './servers.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
  providers: [ServersService]
})
export class ServersComponent implements OnInit {
  servers: Servers[];
  serverName: '';
  serverStatus = '';
  
  constructor(
    private serversService: ServersService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }
}
