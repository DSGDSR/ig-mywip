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