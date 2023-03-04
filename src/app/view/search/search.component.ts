import { Component} from '@angular/core';
import { ControllerService } from 'src/app/controller/controller.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: ['.dropdown1, .dropdown4 {width: 20%;}','.dropdown3,.dropdown2{width: 25%;}']
})
export class SearchComponent{
  constructor(public controller: ControllerService){}
} 