import { Injectable }	    from '@angular/core';
import { LoggerService }    from '../logger.service';
import { ApiService }       from '../api.service';
import { Program, ProgramSales } from '../interfaces';

declare let jQuery: any;

@Injectable()
export class ProgramsService {

	programs: Array<Program> = [];

	url = "https://api.myjson.com/bins/5bdb3";

	max_id = 0;

	constructor ( public api: ApiService, public log: LoggerService ) {
		this.init();
	}

	init():void{
		this.api.list(this.url).subscribe(
			programs	=> {
				this.log.info("Got Programs");
				for(let p of programs ){
					// Crap Values so I can use Strict Typing
					p.Type = "Count Series";
					p.OnlineScheduling = true;
					p.DefaultCapacity = 100;
					p.Tabs = ["Classes", "Appointments", "Outside"];
					if(p.ProgramID > this.max_id) this.max_id = p.ProgramID;
				}
				this.programs = programs as Array<Program>;
				this.log.info(this.programs);
				this.max_id++;
			},
			err		=> this.log.err('Failed to get users'),
			()		=> this.log.info('Programs Complete')
		);
	}

	generate():Program{
		let program:Program = {
			ProgramID: this.max_id++,
			Name: "",
			Type: "",
			OnlineScheduling: false,
			DefaultCapacity: 0,
			Tabs: [],
			TotalMonthlySales: 0,
			MonthlyAttendance: 0,
			Sales: <ProgramSales>{
				CurrentYear:  [0,0,0,0,0,0,0,0,0,0,0,0],
				PreviousYear: [0,0,0,0,0,0,0,0,0,0,0,0]
			}
		}
		return program;
	}

	add(program:Program):void{
		this.log.info(program);

		this.programs.push(program);
	}
}