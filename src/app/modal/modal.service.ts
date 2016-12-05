import { Injectable }            from '@angular/core';
import { LoggerService }         from '../logger.service';
import { ApiService }            from '../api.service';
import { PricingOptionsService } from "../pricingOption/pricingOptions.service";
import { ProgramsService }       from "../program/programs.service";
import {Program} from "../interfaces";


@Injectable()
export class ModalService {

	program:Program;

	title:string;

	savebutton:string;

	modalOpen:boolean = false;
	isNew: false;

	constructor(
		public log: LoggerService,
	    public api: ApiService,
	    public pricingOptions: PricingOptionsService,
	    public programs: ProgramsService
	){
		this.init();
	}

	init():void{
		this.program = this.programs.generate();
	}

	close(e):void{
		e.preventDefault();
		this.modalOpen = false;
	}

	open_new(e):void{
		e.preventDefault();
		this.title = "Add Program";
		this.savebutton = "Add Program";
		this.isNew = true;
		this.modalOpen = true;
		this.program = this.programs.generate();
	}

	open_existing(e, program:Program){
		e.preventDefault();
		this.title = "Edit Program";
		this.savebutton = "Done";
		this.isNew = false;
		this.modalOpen = true;
		this.program = program;
	}

	save(e){
		e.preventDefault();
		if(this.isNew) this.programs.add(this.program);
		this.modalOpen = false;
	}

}