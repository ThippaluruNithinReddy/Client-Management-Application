import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  @Input() type = "";
  @Input() animation = "";
  @Input() titleName = "";
  @Input() modelId = "";

}
