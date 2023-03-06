import { Component} from '@angular/core';
import { ControllerService } from 'src/app/controller/controller.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent{
  constructor(public controller: ControllerService){}
} 