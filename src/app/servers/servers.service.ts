import { Injectable, EventEmitter } from '@angular/core';
import { Servers } from './servers.model';

export class ServersService {
  constructor() {}

  private servers: Servers[] = [
    new Servers(1, 'Artemis', 'Online'),
    new Servers(2, 'Zeus', 'Offline')
  ];

  getServers() {
    console.log(this.servers);
    return this.servers.slice();
  }

  getServer(id: number) {
    const server = this.servers.find(s => {
      return s.id === id;
    });
    return server;
  }
}
