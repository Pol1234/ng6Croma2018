import { Injectable } from '@angular/core';
/*import { Http } from '@angular/http';*/

@Injectable()
export class QueHacemosService {

  private info: any = [
                {
                icono: 'call_to_action',
                titulo: 'Titulo 1',
                descripcion: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.'
                },
                {
                icono: 'important_devices',
                titulo: 'Titulo 2',
                descripcion: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.'
                },
                {
                icono: 'card_travel',
                titulo: 'Titulo 3',
                descripcion: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto'
                }
              ];
  cargada = false;

  /*constructor( http: Http) { comente esto porque no puedo ciclar el objeto que injecto en el componente */
  constructor( ) {

    /*http.get('assets/data/que-hacemos.json')
    .subscribe( data => {
      //console.log(data.json());
      this.cargada = true;
      this.info = data.json();
      console.log(this.info);
      });*/
      }

    getInfo() {
      return this.info;
    }

  }
