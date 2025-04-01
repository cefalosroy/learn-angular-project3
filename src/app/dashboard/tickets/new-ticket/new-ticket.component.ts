import {Component, ElementRef, ViewChild} from '@angular/core';
import {ButtonComponent} from '../../../shared/button/button.component';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [
    ButtonComponent,
    FormsModule
  ],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {
  @ViewChild('form') form?: ElementRef<HTMLFormElement>;
  ticket = {
    title: '',
    description: ''
  };

  onSubmit() {
    console.log(this.ticket);
    this.form?.nativeElement.reset();
  }
}
