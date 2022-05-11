import { Film } from './film';

export interface SearchResult {
  page: number;
  results: Film[];
  total_results: number;
  total_pages: number;
}
