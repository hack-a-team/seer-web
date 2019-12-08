// This only load on catch of APIs return

const fallBack = [
  {
    date: "2019-12-08",
    weather: {
      max: 32,
      min: 23,
      condition: "sunny"
    },
    cargos: [
      {
        type: "sugar",
        quantity: "30",
        lat: "-23.972531",
        lng: "-46.2930812",
        location: "ship",
        kind: "wet"
      },
      {
        type: "alcohol",
        quantity: "10",
        lat: "-23.942519",
        lng: "-46.310304",
        location: "ship",
        kind: "civil"
      },
      {
        type: "juicy",
        quantity: "80",
        lat: "-23.983733",
        lng: "-46.289833",
        location: "ground",
        kind: "wet"
      },
      {
        type: "car",
        quantity: "40",
        lat: "-23.958399",
        lng: "-46.304936",
        location: "ground",
        kind: "civil"
      }
    ],
    machineHealth: {
      belt: {
        state: 5,
        hoursOfWork: 234234,
        capacityHoursOfWork: 240000,
        nextManutention: "24/02/2029",
        lastManutention: "24/06/2019",
        temperature: "56",
        temperatureSupported: "70"
      }
    },
    sensors: [
      {
        type: "temperature",
        status: "active"
      },
      {
        type: "smoke",
        status: "inactive"
      }
    ],
    alerts: 23,
    incidentsToday: 2,
    history: {
      incidentsInThisPort: 120,
      incidentsThisYear: 34,
      incidentsWithSugar: 15,
      incidentsWithAlcohol: 2,
      incidentsWithJuicy: 3,
      incidentsWithCar: 8
    },
    dangerProbability: 0.01,
  }
];

export default fallBack;
