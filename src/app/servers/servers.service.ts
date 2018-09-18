import { Injectable, EventEmitter } from '@angular/core';
import { Servers } from './servers.model';

@Injectable()
export class ServersService {
  constructor() {}

  statusChanged = new EventEmitter<Servers[]>();

  private servers: Servers[] = [
    new Servers(1, 'Artemis', 'Online'),
    new Servers(2, 'Zeus', 'Offline')
  ];

  getServers() {
    return this.servers;
  }
  getServer(id: number) {
    const server = this.servers.find(s => {
      return s.id === id;
    });
    return server;
  }
}
