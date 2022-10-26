export class Results {
  id: number;
  numberOfInfectedPeople: number;
  numberOfHealthyPeople: number;
  numberOfDiedPeople: number;
  numberOfRecoveryPeople: number;
  elapsedDay: number;
  parameters: Parameters<any>;


  constructor(id: number, numberOfInfectedPeople: number, numberOfHealthyPeople: number, numberOfDiedPeople: number, numberOfRecoveryPeople: number, elapsedDay: number, parameters: Parameters<any>) {
    this.id = id;
    this.numberOfInfectedPeople = numberOfInfectedPeople;
    this.numberOfHealthyPeople = numberOfHealthyPeople;
    this.numberOfDiedPeople = numberOfDiedPeople;
    this.numberOfRecoveryPeople = numberOfRecoveryPeople;
    this.elapsedDay = elapsedDay;
    this.parameters = parameters;
  }
}
