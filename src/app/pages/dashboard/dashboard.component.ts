import { Component } from '@angular/core';
import { PluginItem } from 'app/@core/data/plugin';
import { PluginService } from 'app/@core/mock/plugin.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'ngx-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  
  private destroy$: Subject<void> = new Subject<void>();
  plugins: PluginItem[];
  
  constructor(private pluginService: PluginService) {
  }

  ngOnInit() {
    
    this.pluginService.getPlugins()
      .pipe(takeUntil(this.destroy$))
      .subscribe((plugins: any) => this.plugins = plugins);
  }
  ;
}
