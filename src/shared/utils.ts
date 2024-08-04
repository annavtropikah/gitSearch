export const PER_PAGE = 10;

export const getTotalPageCount = (totalCount: number) => Math.ceil(totalCount / PER_PAGE);