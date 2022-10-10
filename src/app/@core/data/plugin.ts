import { Observable } from 'rxjs';

export interface PluginItem {
  name: string;
  description: string;
  url: string;
  method: string;
}

export abstract class PluginItems {
  abstract getPlugins(): Observable<PluginItem[]>;
}
