import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';
import { ErrorService } from 'src/app/controller/error/error.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: []
})
export class NotificationComponent implements OnInit {
  @Input() idError: string = '';
  @Input() msg: string = '';

  @ViewChild('notification', {static: false}) notification: NgbAlert | undefined;

  constructor(private error: ErrorService){}

  ngOnInit(): void{
    setTimeout(() => {
      this.notification?.close();
    },5000);
  }

  onCLose(): void{
    this.error.removeError(this.idError);
  }
}
