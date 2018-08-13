import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-contacto',
  templateUrl: './form-contacto.component.html',
  styleUrls: ['./form-contacto.component.scss']
})
export class FormContactoComponent {

/*usuario: Object = {
  nombre: 'Pablo Laterra',
  email: 'platerra@aptek.com.ar',
  telefono: '4798-5555',
  consulta: 'bla bla bla'
}*/

  constructor() { }

  guardar( forma: NgForm ) {
    console.log('formulario guardado');
    console.log('ngForm', forma);
    console.log(' Valor' , forma.value);
  }

}


