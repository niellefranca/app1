import { Component, OnInit, Input, OnChanges } from '@angular/core';
import {Coracao} from '../shared/coracao.model'

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit, OnChanges {

  public coracoes : Coracao[] = [
    new Coracao(true),new Coracao(true),new Coracao(true)]

  
  @Input() public tentativa: number

  constructor() { 
  }
   
  ngOnChanges(){
    if(this.tentativa !== this.coracoes.length){
      let index = this.coracoes.length - this.tentativa
      this.coracoes[index -1].cheio = false
    }

  }

  ngOnInit() {
    
  }

}
