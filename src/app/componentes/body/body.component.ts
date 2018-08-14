import { Component, OnInit } from '@angular/core';
import { QueHacemosService } from '../../services/que-hacemos.service';

/*declare var jQuery: any;
declare var $: any;
declare var TweenMax: any;
declare var Power2: any;*/

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  data: any = [];

  constructor( private _qhs: QueHacemosService ) { }

  ngOnInit() {
    /*const titulos: any = $('h5.card-title').css('opacity', 0);
    const textos: any = $('p.card-text').css('opacity', 0);
    const iconos: any = $('.material-icons').css('opacity', 0);*/
    /*TweenMax.to( iconos, 0.8 , { opacity: 1, y: '+=10px', ease: Power2.easeInOut });
    TweenMax.to( titulos, 0.8 , {  opacity: 1, delay: 0.6, y: '-=10px' , ease: Power2.easeInOut });
    TweenMax.to( textos, 0.8 , {delay: 1, opacity: 1, y: '-=10px' , ease: Power2.easeInOut });*/
    this.data = this._qhs.getInfo();
  }

}
