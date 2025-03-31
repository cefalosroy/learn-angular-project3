import {Component} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {ServerStatusComponent} from './dashboard/server-status/server-status.component';
import {TraficComponent} from './dashboard/traffic/traffic.component';
import {TicketsComponent} from './dashboard/tickets/tickets.component';
import {DashboardItemComponent} from './dashboard/dashboard-item/dashboard-item.component';
import {DashboardItem} from './dashboard/dashboard-item/dashboard-item.model';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    HeaderComponent,
    ServerStatusComponent,
    TraficComponent,
    TicketsComponent,
    DashboardItemComponent
  ]
})
export class AppComponent {
  serverStatusItem: DashboardItem = {image: {src: 'status.png', alt: 'A signal symbol'}, title: 'Server Status'};
  trafficItem: DashboardItem = {image: {src: 'globe.png', alt: 'A globe'}, title: 'Traffic'};
  ticketsItem: DashboardItem = {image: {src: 'list.png', alt: 'A list of items'}, title: 'Support Tickets'};
}
