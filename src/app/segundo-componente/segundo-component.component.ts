import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-component.component.html',
  styleUrls: ['./segundo-component.component.css']
})
export class SegundoComponentComponent  {

 
  nome = "João";
  dataNascimento = "1995-01-01";
  urlImagem= "/assets/th.jpeg";

  mostrarDataNascimento(){
    alert(`A data de nascimento do joão é : ${this.dataNascimento}  `)
  }


}
