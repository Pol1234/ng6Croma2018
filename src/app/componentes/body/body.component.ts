import { Component, OnInit } from '@angular/core';
import { QueHacemosService } from '../../services/que-hacemos.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  data: any = [];

  constructor( private _qhs: QueHacemosService ) { }

  ngOnInit() {

    this.data = this._qhs.getInfo();
  }

}
