import { of as observableOf,  Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Contacts, RecentUsers, UserData } from '../data/users';
import { PluginItem, PluginItems } from '../data/plugin';

@Injectable()
export class PluginService extends PluginItems {

  private plugins: PluginItem[] = [
    { name: 'Idra 1', description: 'Primo plug-in mokkato', url: 'www.idra-mokkato-1', method: 'POST' },
    { name: 'Idra 2', description: 'Secondo plug-in mokkato', url: 'www.idra-mokkato-2', method: 'GET' },
    { name: 'Idra 3', description: 'Terzo plug-in mokkato', url: 'www.idra-mokkato-3', method: 'SET' },
  ];
  
  getPlugins(): Observable<PluginItem[]> {
    return observableOf(this.plugins);
  }
}
