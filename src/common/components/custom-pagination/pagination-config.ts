import { PaginationInstance } from "ngx-pagination";

interface CustomPaginationInstance extends PaginationInstance {
    search: string;
}

export const Config: CustomPaginationInstance = {
    id: 'custom',
    itemsPerPage: 10,
    currentPage: 1,
    totalItems: 0,
    search:''
  };
