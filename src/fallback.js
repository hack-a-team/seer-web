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
    }
  },
  {
    date: "2019-12-09",
    weather: {
      max: 25,
      min: 23,
      condition: "sunny"
    },
    cargos: [
      {
        type: "alcohol",
        quantity: "300",
        lat: "-23.955244",
        lng: "-46.306447",
        location: "ship",
        kind: "wet"
      },
      {
        type: "alcohol",
        quantity: "10",
        lat: "-23.979726",
        lng: "-46.288324",
        location: "ship",
        kind: "wet"
      },
      {
        type: "juicy",
        quantity: "80000",
        lat: "-23.972535",
        lng: "-46.2930817",
        location: "ground",
        kind: "wet"
      },
      {
        type: "human",
        quantity: "4000",
        lat: "-23.972531",
        lng: "-46.2930812",
        location: "ground",
        kind: "civil"
      }
    ],
    machineHealth: {
      belt: {
        state: 4,
        hoursOfWork: 234248,
        capacityHoursOfWork: 240000,
        nextManutention: "24/02/2029",
        lastManutention: "24/06/2019",
        temperature: "67",
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
        status: "active"
      }
    ],
    alerts: 44,
    incidentsToday: 1,
    history: {
      incidentsInThisPort: 120,
      incidentsThisYear: 34,
      incidentsWithSugar: 15,
      incidentsWithAlcohol: 2,
      incidentsWithJuicy: 3,
      incidentsWithHuman: 0
    },
    dangerProbability: 0.01
  },
  {
    date: "2019-12-10",
    weather: {
      max: 19,
      min: 13,
      condition: "storm"
    },
    cargos: [
      {
        type: "sugar",
        quantity: "90000",
        lat: "-23.966007",
        lng: "-46.297333",
        location: "ship",
        kind: "dry"
      },
      {
        type: "alcohol",
        quantity: "10000",
        lat: "-23.948554",
        lng: "-46.311266",
        location: "ship",
        kind: "dry"
      },
      {
        type: "juicy",
        quantity: "80000",
        lat: "-23.972538",
        lng: "-46.2930817",
        location: "ground",
        kind: "wet"
      },
      {
        type: "alcohol",
        quantity: "40000",
        lat: "-23.972539",
        lng: "-46.2930812",
        location: "ground",
        kind: "wet"
      }
    ],
    machineHealth: {
      belt: {
        state: 4,
        hoursOfWork: 2342590,
        capacityHoursOfWork: 240000,
        nextManutention: "24/02/2029",
        lastManutention: "24/06/2019",
        temperature: "68",
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
        status: "active"
      }
    ],
    alerts: 70,
    incidentsToday: 0,
    history: {
      incidentsInThisPort: 123,
      incidentsThisYear: 34,
      incidentsWithSugar: 15,
      incidentsWithAlcohol: 2,
      incidentsWithJuicy: 3,
      incidentsWithHuman: 0
    },
    dangerProbability: 0.7
  },
  {
    date: "2019-12-11",
    weather: {
      max: 40,
      min: 27,
      condition: "rainy"
    },
    cargos: [
      {
        type: "alcohol",
        quantity: "70000",
        lat: "-23.941309",
        lng: "-46.309104",
        location: "ship",
        kind: "wet"
      },
      {
        type: "alcohol",
        quantity: "1000",
        lat: "-23.968664",
        lng: "-46.290758",
        location: "ship",
        kind: "wet"
      },
      {
        type: "juicy",
        quantity: "80000",
        lat: "-23.972538",
        lng: "-46.2930817",
        location: "ground",
        kind: "wet"
      },
      {
        type: "human",
        quantity: "4000",
        lat: "-23.972539",
        lng: "-46.2930812",
        location: "ground",
        kind: "civil"
      }
    ],
    machineHealth: {
      belt: {
        state: 4,
        hoursOfWork: 2342980,
        capacityHoursOfWork: 240000,
        nextManutention: "24/02/2029",
        lastManutention: "24/06/2019",
        temperature: "67",
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
        status: "active"
      }
    ],
    alerts: 40,
    incidentsToday: 5,
    history: {
      incidentsInThisPort: 120,
      incidentsThisYear: 34,
      incidentsWithSugar: 15,
      incidentsWithAlcohol: 2,
      incidentsWithJuicy: 3,
      incidentsWithHuman: 0
    },
    dangerProbability: 0.4
  },
  {
    date: "2019-12-12",
    weather: {
      max: 40,
      min: 27,
      condition: "sunny"
    },
    cargos: [
      {
        type: "alcohol",
        quantity: "70000",
        lat: "-23.992749",
        lng: "-46.310746",
        location: "ship",
        kind: "wet"
      },
      {
        type: "alcohol",
        quantity: "1000",
        lat: "-23.972537",
        lng: "-46.2930812",
        location: "ship",
        kind: "wet"
      },
      {
        type: "juicy",
        quantity: "80000",
        lat: "-23.972538",
        lng: "-46.2930817",
        location: "ground",
        kind: "wet"
      },
      {
        type: "human",
        quantity: "4000",
        lat: "-23.972539",
        lng: "-46.2930812",
        location: "ground",
        kind: "civil"
      }
    ],
    machineHealth: {
      belt: {
        state: 4,
        hoursOfWork: 2342560,
        capacityHoursOfWork: 240000,
        nextManutention: "24/02/2029",
        lastManutention: "24/06/2019",
        temperature: "67",
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
        status: "active"
      }
    ],
    alerts: 10,
    incidentsToday: 10,
    history: {
      incidentsInThisPort: 120,
      incidentsThisYear: 34,
      incidentsWithSugar: 15,
      incidentsWithAlcohol: 2,
      incidentsWithJuicy: 3,
      incidentsWithHuman: 0
    },
    dangerProbability: 0.07
  }
];

export default fallBack;
