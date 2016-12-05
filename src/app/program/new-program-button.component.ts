import { Component } 	from '@angular/core';
import {ModalService} from "../modal/modal.service";

@Component({
	selector: 'new-program-button',
	templateUrl: './new-program-button.component.html'
})
export class NewProgramButtonComponent {
	constructor( public modal: ModalService ) { }
}
