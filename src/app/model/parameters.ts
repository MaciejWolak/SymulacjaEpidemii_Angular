export class Parameters {
  id: number;
  simulationName: string;
  populationSize: number;
  initialNumberOfInfectedPeople: number;
  infectionRate: number;
  deathRate: number;
  timeToRecovery: number;
  timeToDeath: number;
  timeOfSimulation: number;


  constructor(id: number, simulationName: string, populationSize: number, initialNumberOfInfectedPeople: number, infectionRate: number, deathRate: number, timeToRecovery: number, timeToDeath: number, timeOfSimulation: number) {
    this.id = id;
    this.simulationName = simulationName;
    this.populationSize = populationSize;
    this.initialNumberOfInfectedPeople = initialNumberOfInfectedPeople;
    this.infectionRate = infectionRate;
    this.deathRate = deathRate;
    this.timeToRecovery = timeToRecovery;
    this.timeToDeath = timeToDeath;
    this.timeOfSimulation = timeOfSimulation;
  }
}
