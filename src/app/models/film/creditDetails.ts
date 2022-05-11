export interface Season {
  air_date: string;
  poster_path: string;
  season_number: number;
}

export interface Media {
  id: number;
  name: string;
  original_name: string;
  character: string;
  episodes: any[];
  seasons: Season[];
}

export interface Person {
  name: string;
  id: number;
}

export interface CreditDetails {
  credit_type: string;
  department: string;
  job: string;
  media: Media;
  media_type: string;
  id: string;
  person: Person;
}
