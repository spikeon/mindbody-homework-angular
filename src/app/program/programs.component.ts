import { Component, OnInit } 	from '@angular/core';
import { ApiService }	        from '../api.service';
import { LoggerService }        from '../logger.service';
import { ProgramsService }      from './programs.service';

declare var jQuery: any;

@Component({
	selector: 'programs',
	templateUrl: './programs.component.html'
})
export class ProgramsComponent implements OnInit {

	constructor(
		public api: ApiService,
		public log: LoggerService,
	    public programs: ProgramsService
	) { }


	ngOnInit(): void{
		this.programs;

	}
}
