import { IPaginator } from "../interfaces/IPaginator";

export class Paginator implements IPaginator {
    per_page: number;
    current_page: number;
    last_page: number;
    from: number;
    to: number;
    total: number;
    sortBy?: string | undefined;
    sortDir?: string | undefined;

    constructor(sortBy: string, per_page?: number) {
        this.per_page = per_page ?? 5
        this.current_page = 1
        this.last_page = 0
        this.from = 0
        this.to = 0
        this.total = 0
        this.sortBy = sortBy
        this.sortDir = "asc"
    }

}