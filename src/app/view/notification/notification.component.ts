import { Component, Input, OnInit } from '@angular/core';
import { ErrorService } from 'src/app/controller/error/error.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: []
})
export class NotificationComponent implements OnInit {
  @Input() idError: string = '';
  @Input() msg: string = '';

  constructor(private error: ErrorService){}

  ngOnInit(): void{
    setTimeout(() => {
      this.error.removeError(this.idError);
    },5000);
  }

  onCLose(): void{
    this.error.removeError(this.idError);
  }
}
