export type Sort = {
  sortBy: string;
  order: SortOrder;
};

export type SortOrder = 'asc' | 'desc' | 'none';
