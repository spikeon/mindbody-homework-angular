import { Component } 	from '@angular/core';
import { ApiService }	from '../api.service';
import { LoggerService } from '../logger.service';
import { ChartsService } from '../charts.service';
import { PricingOptionsService } from '../pricingOption/pricingOptions.service';
import { ModalService } from "./modal.service";

@Component({
	selector: 'modal',
	templateUrl: './modal.component.html'
})
export class ModalComponent {

	constructor(public api: ApiService,
	            public log: LoggerService,
	            public charts: ChartsService,
	            public pricingOptions: PricingOptionsService,
	            public modal: ModalService
	) { }


}