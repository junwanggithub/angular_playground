export interface Filters {
    globalFilter: GlobalFilter,
    dashboardFilter: DashboardFilter,
    monitorFilter: MonitorFilter
}

export interface GlobalFilter {
    timerange?: string,
    siteIndex?: number,
    category?: string,
    profile?: string,
    iotVertical?: string,
    direction?: string,
    monitorType?: string
}

export interface DashboardFilter {
    timerange: string,
    siteIndex: number,
    category: string,
    profile: string,
    iotVertical: string,
    direction: string,
    monitorType: string
}

export interface MonitorFilter {
    timerange: string,
    siteIndex: number,
    iotVertical: string,
    direction: string
}