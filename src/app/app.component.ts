import { Component, OnInit }	from '@angular/core';

import { ApiService } 	from './api.service';
import { LoggerService }        from './logger.service';

@Component({
	selector: 'my-app',
	templateUrl: './app.component.html'
})
export class AppComponent {

		constructor(
			public api: ApiService,
		    public log: LoggerService
		) {
		}

}
