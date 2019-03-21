export interface Opportunity {
    id: String,
    model: String,
    make: String,
    vrm: String,
    status: boolean,
    proggress: {
        trunk: number,
        backw: number,
        tail: number,
        step: number
    }
    pickupDate: Date,
    incidentDate: Date
}

export var cars = [
    {
      id: '12312s',
      status: false,
      proggress: {
        trunk: 23,
        backw: 78,
        tail: 100,
        step: 5
      },
      make: 'Mercedes Benz',
      model: 'C220',
      vrm: '6766KFC',
      pickupDate: null,
      incidentDate: new Date('01-22-2019')
    }, {
      id: '234234g',
      status: false,
      proggress: {
        trunk: 100,
        backw: 80,
        tail: 0,
        step: 45
      },
      make: 'Audi',
      model: 'Q3',
      vrm: '2345GFD',
      pickupDate: null,
      incidentDate: new Date('02-27-2019')
    }, {
      id: '424f564',
      status: true,
      proggress: {
        trunk: 100,
        backw: 100,
        tail: 100,
        step: 100
      },
      make: 'BMW',
      model: 'X2',
      vrm: '3487TTF',
      pickupDate: new Date('27-03-2019'),
      incidentDate: new Date('11-17-2018')
    }, {
      id: '34534a',
      status: false,
      proggress: {
        trunk: 70,
        backw: 75,
        tail: 34,
        step: 12
      },
      make: 'Toyota',
      model: 'Yaris',
      vrm: '1233UFG',
      pickupDate: null,
      incidentDate: new Date('12-12-2018')
    }
  ]