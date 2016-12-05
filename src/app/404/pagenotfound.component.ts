import { Component, OnInit } 	from '@angular/core';

import { ApiService }	from '../api.service';

import { LoggerService }        from '../logger.service';

declare var jQuery: any;

@Component({
	selector: 'pagenotfound',
	templateUrl: './pagenotfound.component.html'
})
export class PageNotFoundComponent implements OnInit {

	constructor(public api: ApiService, public log: LoggerService ) { }

	ngOnInit(): void {

	}
}
