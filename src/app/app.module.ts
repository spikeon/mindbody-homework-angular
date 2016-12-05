import './rxjs-extensions';
import { NgModule }			from '@angular/core';
import { BrowserModule }	from '@angular/platform-browser';

import { RouterModule, Routes } from '@angular/router';


import { HttpModule }   	from '@angular/http';

import {
	AppComponent ,
	ProgramComponent,
	ProgramsComponent,
	PageNotFoundComponent,
	PricingOptionComponent,
	HeaderComponent,
	HeaderMobileComponent,
	HeaderScreenComponent,
	NewProgramButtonComponent,
	ModalComponent
	}		from './index';

import { LoggerService } from './logger.service';
import { ApiService } from './api.service';
import { ChartsService} from './charts.service';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { ProgramsService } from './program/programs.service';
import {PricingOptionsService} from "./pricingOption/pricingOptions.service";
import {ModalService} from "./modal/modal.service";
import {FormsModule} from "@angular/forms";
const appRoutes: Routes = [
	{ path: '', component: ProgramsComponent },
	{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
	imports: [
		BrowserModule,
		HttpModule,
		RouterModule.forRoot(appRoutes),
		ChartsModule,
		FormsModule
	],
	declarations: [
		AppComponent,
		ProgramComponent,
		ProgramsComponent,
		PageNotFoundComponent,
		PricingOptionComponent,
		HeaderComponent,
		HeaderMobileComponent,
		HeaderScreenComponent,
		NewProgramButtonComponent,
		ModalComponent
	],
	bootstrap: [
		AppComponent
	],
	providers: [
		ApiService,
		LoggerService,
		ChartsService,
		ProgramsService,
		PricingOptionsService,
		ModalService
	]
})
export class AppModule { }
