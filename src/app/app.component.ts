import { Component } from '@angular/core';
import { QueHacemosService } from './services/que-hacemos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    constructor( _quehacemos: QueHacemosService){

    }
}
