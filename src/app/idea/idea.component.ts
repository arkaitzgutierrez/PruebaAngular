import { Component } from '@angular/core';
import { Producto } from 'src/modelos/producto';

@Component({
  selector: 'app-idea',
  templateUrl: './idea.component.html',
  styleUrls: ['./idea.component.scss']
})
export class IdeaComponent {

  producto:Producto[]=[];

  ngOninit():void{
  this.producto=[
    {
      nombre : "Patata",
    descripcion:"Las buenas",
    precio:5
    }
  ]
}
}
