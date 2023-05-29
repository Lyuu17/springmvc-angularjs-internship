export interface IPaginatedResult<T> {
  content: T[];

  totalPages: number;
  number: number;
  last: boolean;
  first: boolean;
  numberOfElements: number;
};