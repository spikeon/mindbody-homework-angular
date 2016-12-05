import { Http, Headers}	from '@angular/http';
import { Injectable }	from '@angular/core';
import { LoggerService }       from './logger.service';

declare let jQuery: any;

@Injectable()
export class ApiService {
	constructor ( public http: Http, public log: LoggerService ) { }

	getHeaders (){
		return new Headers({
			'Content-Type': 'application/json',
		});
	}

	_get (url) {
		return this.http.get(
			url,
			{ headers: this.getHeaders() })
			.map(response => response.json());
	}

	list ( url ) { return this._get(url); }
}
