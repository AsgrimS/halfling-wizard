export interface Source {
  index: string;
  name: string;
  url: string;
}
export interface ProficiencyChoices {
  choose: number;
  type: string;
  from: Source[];
}

export interface Hero {
  index: string;
  name: string;
  url: string;
}
