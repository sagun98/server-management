import { Component, OnInit } from '@angular/core';
import { ServersService } from '../servers.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Servers } from '../servers.model';

@Component({
  selector: 'app-edit-servers',
  templateUrl: './edit-servers.component.html',
  styleUrls: ['./edit-servers.component.css'],
  providers: [ServersService]
})
export class EditServersComponent implements OnInit {
  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute
  ) {}

  server: Servers;

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    this.server = this.serversService.getServer(id);
    //If anything changes
    this.route.params.subscribe((params: Params) => {
      this.server = this.serversService.getServer(+params['id']);
    });
  }
}
