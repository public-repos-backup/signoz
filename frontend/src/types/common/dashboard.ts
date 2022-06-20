export enum EDataSource {
	METRICS = 1,
	TRACES,
	LOGS,
}

export enum EPanelType {
	TIME_SERIES = 1,
	QUERY_VALUE,
}

export enum EReduceOperator {
	LAST = 1,
	SUM,
	AVG,
	MAX,
	MIN
}

export enum EQueryType {
	QUERY_BUILDER = 1,
	CLICKHOUSE,
	PROM,
}

export enum EAggregateOperator {
	NOOP = 1,
	COUNT = 2,
	COUNT_DISTINCT = 3,
	SUM = 4,
	AVG = 5,
	MAX = 6,
	MIN = 7,
	P05 = 8,
	P10 = 9,
	P20 = 10,
	P25 = 11,
	P50 = 12,
	P75 = 13,
	P90 = 14,
	P95 = 15,
	P99 = 16,
	RATE = 17,
	SUM_RATE = 18,
	// leaving gap for possible future {X}_RATE
	RATE_SUM = 22,
	RATE_AVG = 23,
	RATE_MAX = 24,
	RATE_MIN = 25,
}
