import { Component, OnInit } from '@angular/core';
import { Servers } from '../servers.model';
import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
  providers: [ServersService]
})
export class ServerComponent implements OnInit {
  server: Servers;

  constructor(
    private serverService: ServersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    this.server = this.serverService.getServer(id);
    //If anything changes
    this.route.params.subscribe((params: Params) => {
      this.server = this.serverService.getServer(+params['id']);
    });
  }

  onEdit() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }
}
