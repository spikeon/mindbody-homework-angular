export interface PricingOption {
	PricingOptionID:    number;
	ProgramID:          number;
	Name:               string;
	Sales:              number;
}
export interface PricingOptions {
	[index: number] : Array<PricingOption>;
}
export interface Program {
	ProgramID:          number;
	Name:               string;
	TotalMonthlySales:  number;
	MonthlyAttendance:  number;
	Sales:              ProgramSales;
	Type:               string;
	OnlineScheduling:   boolean;
	DefaultCapacity:    number;
	Tabs:               Array<string>
}

export interface ProgramSales{
	CurrentYear: Array<number>,
	PreviousYear: Array<number>
}