import { Injectable }           from '@angular/core';
import { LoggerService }        from '../logger.service';
import { ApiService }           from '../api.service';
import { PricingOption, PricingOptions }        from '../interfaces';


@Injectable()
export class PricingOptionsService{

	pricingOptions: Array<PricingOption> = [];

	pricingOptionsByID: PricingOptions = {};

	url:string = "https://api.myjson.com/bins/47axv";

	max_id:number = 0;

	constructor ( public api: ApiService, public log: LoggerService ) {
		this.init();
	}

	init() {
		this.api.list(this.url).subscribe(
			pricingOptions	=> {
				this.log.info("Got Pricing Options");
				this.pricingOptions = pricingOptions as Array<PricingOption>;
				for(let i in this.pricingOptions ){
					if(this.pricingOptions[i].PricingOptionID > this.max_id) this.max_id = this.pricingOptions[i].PricingOptionID;
					if(!Array.isArray(this.pricingOptionsByID[this.pricingOptions[i].ProgramID])) this.pricingOptionsByID[this.pricingOptions[i].ProgramID] = [];
					this.pricingOptionsByID[this.pricingOptions[i].ProgramID].push(this.pricingOptions[i]);
				}

			},
			err		=> this.log.err('Failed to get users'),
			()		=> this.log.info('Programs Complete')
		);
	}

	get_by_ProgramID(ProgramID:number){
		let results = [];
		for(let i in this.pricingOptions){
			if(this.pricingOptions[i].ProgramID == ProgramID) results.push(this.pricingOptions[i]);
		}
		return results;

	}

}
