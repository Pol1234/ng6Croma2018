import { Component, OnInit } from '@angular/core';

// Declaramos las variables para jQuery
declare var jQuery: any;
declare var $: any;
declare var TweenMax: any;
declare var Power2: any;




@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const Back: any = 'Elastic';

    /*const mainNavbar: any = $('#mainNav').css('opacity', 0);*/
    const titulos: any = $('h2').css('opacity', 0);
    const textos: any = $('p').css('opacity', 0);
    const btnArea: any = $('.btn-area').css('opacity', 0);

  /*TweenMax.to( mainNavbar, 0.8 , {  opacity: 1, y: '+=10px' , ease:Power2.easeInOut });
  TweenMax.from(mainNavbar, 0.8, { opacity: 1, ease: eas.easeInOut })*/
  TweenMax.to( titulos, 0.8 , { delay: 1, opacity: 1, y: '-=10px' , ease: Back.easeOut });
  TweenMax.to( textos, 0.8 , { delay: 1.5, opacity: 1, y: '-=10px' , ease: Back.easeOut });
  TweenMax.to( btnArea, 0.8 , { delay: 2, opacity: 1, ease: Back.easeOut });
  }


}
