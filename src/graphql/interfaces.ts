export interface HeroClassesData {
  classes: HeroClass[];
}

interface HeroClass {
  _id: string;
  class_levels: string;
  hit_die: number;
  index: string;
  name: string;
  proficiencies: [AbilityScoreSkills];
  proficiency_choices: [ClassProficiencyChoices];
  saving_throws: [AbilityScoreSkills];
  spellcasting: ClassSpellcasting;
  spells: string;
  starting_equipment: [ClassStartingEquipment];
  starting_equipment_options: [ClassStartingEquipmentOptions];
  subclasses: [AbilityScoreSkills];
  url: string;
}

interface AbilityScoreSkills {
  index: string;
  name: string;
  url: string;
}

interface ClassProficiencyChoices {
  choose: number;
  from: [AbilityScoreSkills];
  type: string;
}

interface ClassSpellcasting {
  info: [ClassSpellcastingInfo];
  level: number;
  spellcasting_ability: AbilityScoreSkills;
}

interface ClassSpellcastingInfo {
  desc: [string];
  name: string;
}

interface ClassStartingEquipment {
  equipment: AbilityScoreSkills;
  quantity: number;
}

interface ClassStartingEquipmentOptions {
  choose: number;
  from: [ClassStartingEquipmentOptionsFrom];
  type: string;
}

interface ClassStartingEquipmentOptionsFrom {
  equipment: AbilityScoreSkills;
  quantity: number;
}
