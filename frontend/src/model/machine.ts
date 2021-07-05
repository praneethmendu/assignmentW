export interface Machine { 
    customerId: number;
    customerName?: string;
    machineNr?: string;
    machineId?: number;
    machineTypeSerial?: string;
    process?: string;
    processTime?: string;
    sensorData?: string;
    onlineFrom?: string;
}

export interface MachineQueryParams {
    customer?: string;
    drainSensorOn?: boolean;
    pump5On?:boolean;
    pump10On?:boolean;
    waterTemp?:ContinuousValue;
    waterLevel?:ContinuousValue;
}

export interface ContinuousValue {
    eq?: number;
    lt?: number;
    gt?: number;
}