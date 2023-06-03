export interface IUniversity {
    domains: string[], 
    country: string, 
    alpha_two_code: string, 
    'state-province': null, 
    web_pages: string[],
    name: string,
}

export interface PaginationProps {
    pages?: [],
    currentPage: number,
    pageSize: number, 
    totalCount?: number, 
}