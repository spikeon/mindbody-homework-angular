import {Component, Input, OnInit, ViewChild, AfterViewInit, ElementRef}    from '@angular/core';
import { ApiService }	from '../api.service';
import { LoggerService } from '../logger.service';
import { ChartsService } from '../charts.service';
import { PricingOption } from '../interfaces';
import {PricingOptionsService} from "./pricingOptions.service";
import {ProgramsService} from "../program/programs.service";

@Component({
	selector: '[pricing-option]',
	templateUrl: 'pricingOption.component.html'
})
export class PricingOptionComponent implements OnInit, AfterViewInit {

	@Input() option: PricingOption;

	@ViewChild('sparkline') el:ElementRef;

	constructor(
		public api: ApiService,
		public log: LoggerService,
		public charts: ChartsService,
		public programs: ProgramsService,
		public pricingOptions: PricingOptionsService) { }

	ngAfterViewInit(){
		this.charts.sparkline.soft(this.el.nativeElement);
	}

	ngOnInit(){}
}