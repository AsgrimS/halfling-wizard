import {
  Class,
  Subclass,
  Proficiency,
  ClassProficiency_Choices,
  AbilityScoreSkills,
  ClassSpellcasting,
  ClassStarting_Equipment,
} from "./schema";

export interface HeroClassesData {
  classes: Class[];
}

export interface HeroClassData {
  class: Class;
}

export interface SubclassesData {
  subclasses: Subclass[];
}

export interface ProficienciesData {
  proficiencies: Proficiency[];
}

export interface ProficienciesChoicesData {
  proficienciesChoices: ClassProficiency_Choices[];
}
export interface SavingThrowsData {
  saving_throws: AbilityScoreSkills[];
}

export interface ClassSpellcastingData {
  spellcasting: ClassSpellcasting;
}

export interface StartingEquipmentData {
  startingEquipments: ClassStarting_Equipment[];
}
