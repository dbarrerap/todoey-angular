export interface IPaginator {
    per_page: number,
    current_page: number,
    last_page: number,
    from: number,
    to: number,
    total: number,
    sortBy?: string,
    sortDir?: string,
}