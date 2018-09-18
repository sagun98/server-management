import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';
import { Servers } from './servers.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  server: Servers[];
  serverName: '';
  serverStatus = '';
  constructor(
    private serversService: ServersService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.server = this.serversService.getServers();
  }
}
