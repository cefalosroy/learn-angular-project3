import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit, OnDestroy {
  currentStatus: 'online' | 'offline' | 'unknown' = 'online';
  private timeOutId?: ReturnType<typeof setTimeout>;

  ngOnInit(): void {
    const TIMEOUT = 3000;
    this.timeOutId = setTimeout(() => {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        this.currentStatus = 'online';
      } else if (randomNumber < 0.9) {
        this.currentStatus = 'offline';
      } else {
        this.currentStatus = 'unknown';
      }
    }, TIMEOUT);
  }

  ngOnDestroy(): void {
    if (this.timeOutId) {
      clearTimeout(this.timeOutId);
    }
  }
}
