import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Tarefa } from "../tarefa";

@Component({
 selector: 'app-item',
 templateUrl: './item.component.html',
 styleUrls: ['./item.component.css']
})
export class ItemComponent {
 emEdicao = false;
 @Input() tarefa: Tarefa = new Tarefa("", false);
 @Output() removeTarefa = new EventEmitter<string>();
 @Output() modificaTarefa = new EventEmitter();

 enviarEvento() {
    this.removeTarefa.emit(
       this.tarefa.descricao
    );
  }
}