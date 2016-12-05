import { Component, Input, OnInit, ViewChild, AfterViewInit, ElementRef } 	from '@angular/core';
import { ApiService }	from '../api.service';
import { LoggerService } from '../logger.service';
import { ChartsService } from '../charts.service';
import { PricingOptionsService } from '../pricingOption/pricingOptions.service';
import { Program } from '../interfaces';
import {ModalService} from "../modal/modal.service";

@Component({
	selector: '[program]',
	templateUrl: './program.component.html'
})
export class ProgramComponent implements OnInit, AfterViewInit{

	constructor(
		public api: ApiService,
		public log: LoggerService,
		public charts: ChartsService,
	    public pricingOptions: PricingOptionsService,
	    public modal : ModalService
	) { }

	@Input( ) program: Program;

	@ViewChild('sparkline') el:ElementRef;

	showMore = false;

	chartData:any;

	loadChart(){
		this.chartData = this.charts.chartjs.buildData(this.program.Sales.PreviousYear, this.program.Sales.CurrentYear);
	}

	ngOnInit(){
		this.loadChart();
	}

	ngAfterViewInit(){
		this.charts.sparkline.hard(this.el.nativeElement, this.program.Sales.CurrentYear);
	}

	more(e){
		e.preventDefault();
		this.showMore = ! this.showMore;
	}
}
