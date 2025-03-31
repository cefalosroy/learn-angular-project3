import {Component, Input} from '@angular/core';
import {DashboardItem} from './dashboard-item.model';

@Component({
  selector: 'app-dashboard-item',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-item.component.html',
  styleUrl: './dashboard-item.component.css'
})
export class DashboardItemComponent {
  @Input({required: true}) dashboardItem!: DashboardItem;
}
