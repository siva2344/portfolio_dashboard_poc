import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrl: './dialog-box.component.css'
})
export class DialogBoxComponent {
@Output() close=new EventEmitter()

onClose(){
  this.close.emit()
}
}
