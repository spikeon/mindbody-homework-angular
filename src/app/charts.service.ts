import { Injectable } from '@angular/core';

declare let jQuery: any;


@Injectable()
export class ChartsService {
	constructor(){ }

	chartjs = {
		options: {
			categoryPercentage: 0.5,
			legend: {
				display: false,
			},
			scales: {
				xAxes: [{
					beginAtZero: true,
					display: true,
					gridLines: {
						display: false,
						drawBorder: false,
					},
					ticks: {
						display: true,
						beginAtZero: true,
						zeroLineWidth: 0
					}
				}],
				yAxes: [{
					ticks: {
						beginAtZero: true,
					},
					display: false
				}]
			}
		},
		barColor1 : '#C7BBDB',
		barColor2 : '#BCD6B6',
		labels: ["Jan","Feb","Mar","Apr","May","Jun","Jul"],
		type: 'bar',

		buildData(previousYear, currentYear){
			return [{
				backgroundColor : this.barColor1,
				data : previousYear
			},{
				backgroundColor : this.barColor2,
				data : currentYear
			}];
		}
	};

	sparkline = {
		hard(element, data=[]){
			if(data.length == 0) data = this.rand();
			jQuery(element).sparkline(data, this.config.hard);
		},
		soft(element, data=[]){
			if(data.length == 0) data = this.rand();
			jQuery(element).sparkline(data, this.config.soft);
		},
		rand : function(){
			let r = [];
			for(let i = 0; i <= 20; i++){
				r.push(Math.random()*20);
			}
			return r;
		},
		config : {
			hard: {
				lineColor: '#31312F',
				type: 'line',
				fillColor: false,
				lineWidth: 1,
				spotColor: false,
				spotRadius: 3,
				drawNormalOnTop: false,
				width: 80,
				height: 20,
			},
			soft: {
				lineColor: '#d9d5d0',
				type: 'line',
				fillColor: false,
				lineWidth: 1,
				spotColor: false,
				spotRadius: 2,
				drawNormalOnTop: false,
				width: 80,
				height: 20,
				disableHiddenCheck: true,
			},
		},
	};



}

