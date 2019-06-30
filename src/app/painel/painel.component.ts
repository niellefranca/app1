import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Frase } from '../shared/frase.model';
import { FRASES } from '../painel/frases-mock';
import {Coracao } from '../shared/coracao.model'

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit, OnDestroy {

  public frases : Frase[] = FRASES
  public instrucao : string = 'Traduza a frase'
  public resposta: string = ""

  public rodada:number = 0
  public rodadaFrase:Frase

  public progresso:number = 0
  public tentativas: number = 3

  @Output() public encerrarJogo: EventEmitter<string> = new EventEmitter()

  constructor() {
    this.atualizaRodada();
   }

  ngOnInit() {
  }

  ngOnDestroy(){
    console.log('componente painel foi destruido')
  }
  public atualizaResposta(resposta:Event):void{
    this.resposta = (<HTMLInputElement>resposta.target).value
  }

  public verificarResposta():void{

    //valido se a resposta esta correta
    if(this.resposta == this.rodadaFrase.frasePtBr){

      //ao clicar em verificar, estando correta ou nao, add +1
      this.rodada++
      this.progresso = this.progresso + 25

      //se for a última frase, não add mais rodada
      if(this.rodada === 4){
        this.encerrarJogo.emit('vitoria')
      }
        this.atualizaRodada();
            
    }else{
      this.tentativas--
      
      if(this.tentativas === -1){
        this.encerrarJogo.emit('derrota')
    }
   }
  }
  public atualizaRodada():void{
    this.rodadaFrase = this.frases[this.rodada]
    this.resposta = ''  
  }

}
