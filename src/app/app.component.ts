import { Component } from '@angular/core';
import { ErrorService } from './controller/error/error.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  
  constructor(public error: ErrorService){}
  
  title = ''
}
