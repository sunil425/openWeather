export class Data {
    active: number;
    confirmed: number;
    deaths: number;
    deltaconfirmed: number;
    deltadeaths: number;
    deltarecovered: number;
    lastupdatedtime: string;
    migratedother: number;
    recovered: number;
    state: string;
    statecode: string;
}

export class ChildData {
    id: string;
    state: string;
    districtData: DistrictData[];
}

export class DistrictData {
    confirmed: number;
    id: string;
    name: string;
}
