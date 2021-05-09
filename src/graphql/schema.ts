export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };

export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  JSON: any;
  RegExpAsString: any;
};

export type AbilityScore = {
  __typename?: "AbilityScore";
  _id: Scalars["String"];
  desc?: Maybe<Array<Maybe<Scalars["String"]>>>;
  full_name?: Maybe<Scalars["String"]>;
  index?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  skills?: Maybe<Array<Maybe<AbilityScoreSkills>>>;
  url?: Maybe<Scalars["String"]>;
};

export type AbilityScoreSkills = {
  __typename?: "AbilityScoreSkills";
  index?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
};

export type Alignment = {
  __typename?: "Alignment";
  _id: Scalars["String"];
  desc?: Maybe<Scalars["String"]>;
  abbreviation?: Maybe<Scalars["String"]>;
  index?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
};

export type Background = {
  __typename?: "Background";
  _id: Scalars["String"];
  index?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  starting_proficiencies?: Maybe<Array<Maybe<AbilityScoreSkills>>>;
  language_options?: Maybe<BackgroundLanguage_Options>;
  url?: Maybe<Scalars["String"]>;
  starting_equipment?: Maybe<Array<Maybe<BackgroundStarting_Equipment>>>;
  starting_equipment_options?: Maybe<
    Array<Maybe<BackgroundStarting_Equipment_Options>>
  >;
  feature?: Maybe<BackgroundFeature>;
  personality_traits?: Maybe<BackgroundPersonality_Traits>;
  ideals?: Maybe<BackgroundIdeals>;
  bonds?: Maybe<BackgroundPersonality_Traits>;
  flaws?: Maybe<BackgroundPersonality_Traits>;
};

export type BackgroundFeature = {
  __typename?: "BackgroundFeature";
  name?: Maybe<Scalars["String"]>;
  desc?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

export type BackgroundIdeals = {
  __typename?: "BackgroundIdeals";
  choose?: Maybe<Scalars["Float"]>;
  from?: Maybe<Array<Maybe<BackgroundIdealsFrom>>>;
  type?: Maybe<Scalars["String"]>;
};

export type BackgroundIdealsFrom = {
  __typename?: "BackgroundIdealsFrom";
  desc?: Maybe<Scalars["String"]>;
  alignments?: Maybe<Array<Maybe<AbilityScoreSkills>>>;
};

export type BackgroundLanguage_Options = {
  __typename?: "BackgroundLanguage_options";
  choose?: Maybe<Scalars["Float"]>;
  from?: Maybe<Array<Maybe<AbilityScoreSkills>>>;
  type?: Maybe<Scalars["String"]>;
};

export type BackgroundPersonality_Traits = {
  __typename?: "BackgroundPersonality_traits";
  choose?: Maybe<Scalars["Float"]>;
  from?: Maybe<Array<Maybe<Scalars["String"]>>>;
  type?: Maybe<Scalars["String"]>;
};

export type BackgroundStarting_Equipment = {
  __typename?: "BackgroundStarting_equipment";
  equipment?: Maybe<AbilityScoreSkills>;
  quantity?: Maybe<Scalars["Float"]>;
};

export type BackgroundStarting_Equipment_Options = {
  __typename?: "BackgroundStarting_equipment_options";
  choose?: Maybe<Scalars["Float"]>;
  from?: Maybe<Array<Maybe<BackgroundStarting_Equipment_OptionsFrom>>>;
  type?: Maybe<Scalars["String"]>;
};

export type BackgroundStarting_Equipment_OptionsFrom = {
  __typename?: "BackgroundStarting_equipment_optionsFrom";
  equipment?: Maybe<AbilityScoreSkills>;
  quantity?: Maybe<Scalars["Float"]>;
};

export type Class = {
  __typename?: "Class";
  _id: Scalars["String"];
  class_levels?: Maybe<Scalars["String"]>;
  hit_die?: Maybe<Scalars["Float"]>;
  index?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  proficiencies?: Maybe<Array<Maybe<AbilityScoreSkills>>>;
  proficiency_choices?: Maybe<Array<Maybe<ClassProficiency_Choices>>>;
  saving_throws?: Maybe<Array<Maybe<AbilityScoreSkills>>>;
  spellcasting?: Maybe<ClassSpellcasting>;
  spells?: Maybe<Scalars["String"]>;
  starting_equipment?: Maybe<Array<Maybe<ClassStarting_Equipment>>>;
  starting_equipment_options?: Maybe<
    Array<Maybe<ClassStarting_Equipment_Options>>
  >;
  subclasses?: Maybe<Array<Subclass>>;
  url?: Maybe<Scalars["String"]>;
};

export type ClassProficiency_Choices = {
  __typename?: "ClassProficiency_choices";
  choose?: Maybe<Scalars["Float"]>;
  from?: Maybe<Array<Maybe<AbilityScoreSkills>>>;
  type?: Maybe<Scalars["String"]>;
};

export type ClassSpellcasting = {
  __typename?: "ClassSpellcasting";
  info?: Maybe<Array<Maybe<ClassSpellcastingInfo>>>;
  level?: Maybe<Scalars["Float"]>;
  spellcasting_ability?: Maybe<AbilityScoreSkills>;
};

export type ClassSpellcastingInfo = {
  __typename?: "ClassSpellcastingInfo";
  desc?: Maybe<Array<Maybe<Scalars["String"]>>>;
  name?: Maybe<Scalars["String"]>;
};

export type ClassStarting_Equipment = {
  __typename?: "ClassStarting_equipment";
  equipment?: Maybe<AbilityScoreSkills>;
  quantity?: Maybe<Scalars["Float"]>;
};

export type ClassStarting_Equipment_Options = {
  __typename?: "ClassStarting_equipment_options";
  choose?: Maybe<Scalars["Float"]>;
  from?: Maybe<Array<Maybe<ClassStarting_Equipment_OptionsFrom>>>;
  type?: Maybe<Scalars["String"]>;
};

export type ClassStarting_Equipment_OptionsFrom = {
  __typename?: "ClassStarting_equipment_optionsFrom";
  equipment?: Maybe<AbilityScoreSkills>;
  quantity?: Maybe<Scalars["Float"]>;
};

export type Condition = {
  __typename?: "Condition";
  _id: Scalars["String"];
  desc?: Maybe<Array<Maybe<Scalars["String"]>>>;
  index?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
};

export type DamageType = {
  __typename?: "DamageType";
  _id: Scalars["String"];
  desc?: Maybe<Array<Maybe<Scalars["String"]>>>;
  index?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
};

export type Equipment = {
  __typename?: "Equipment";
  _id: Scalars["String"];
  armor_category?: Maybe<Scalars["String"]>;
  armor_class?: Maybe<EquipmentArmor_Class>;
  capacity?: Maybe<Scalars["String"]>;
  category_range?: Maybe<Scalars["String"]>;
  contents?: Maybe<Array<Maybe<EquipmentContents>>>;
  cost?: Maybe<EquipmentCost>;
  damage?: Maybe<EquipmentDamage>;
  desc?: Maybe<Array<Maybe<Scalars["String"]>>>;
  equipment_category?: Maybe<AbilityScoreSkills>;
  gear_category?: Maybe<AbilityScoreSkills>;
  index?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  properties?: Maybe<Array<Maybe<AbilityScoreSkills>>>;
  quantity?: Maybe<Scalars["Float"]>;
  range?: Maybe<EquipmentRange>;
  special?: Maybe<Array<Maybe<Scalars["String"]>>>;
  speed?: Maybe<EquipmentSpeed>;
  stealth_disadvantage?: Maybe<Scalars["Boolean"]>;
  str_minimum?: Maybe<Scalars["Float"]>;
  throw_range?: Maybe<EquipmentThrow_Range>;
  tool_category?: Maybe<Scalars["String"]>;
  two_handed_damage?: Maybe<EquipmentTwo_Handed_Damage>;
  url?: Maybe<Scalars["String"]>;
  vehicle_category?: Maybe<Scalars["String"]>;
  weapon_category?: Maybe<Scalars["String"]>;
  weapon_range?: Maybe<Scalars["String"]>;
  weight?: Maybe<Scalars["Float"]>;
};

export type EquipmentArmor_Class = {
  __typename?: "EquipmentArmor_class";
  base?: Maybe<Scalars["Float"]>;
  dex_bonus?: Maybe<Scalars["Boolean"]>;
  max_bonus?: Maybe<Scalars["Float"]>;
};

export type EquipmentCategory = {
  __typename?: "EquipmentCategory";
  _id: Scalars["String"];
  equipment?: Maybe<Array<Maybe<AbilityScoreSkills>>>;
  index?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
};

export type EquipmentContents = {
  __typename?: "EquipmentContents";
  item?: Maybe<AbilityScoreSkills>;
  quantity?: Maybe<Scalars["Float"]>;
};

export type EquipmentCost = {
  __typename?: "EquipmentCost";
  quantity?: Maybe<Scalars["Float"]>;
  unit?: Maybe<Scalars["String"]>;
};

export type EquipmentDamage = {
  __typename?: "EquipmentDamage";
  damage_dice?: Maybe<Scalars["String"]>;
  damage_type?: Maybe<AbilityScoreSkills>;
};

export type EquipmentRange = {
  __typename?: "EquipmentRange";
  long?: Maybe<Scalars["Float"]>;
  normal?: Maybe<Scalars["Float"]>;
};

export type EquipmentSpeed = {
  __typename?: "EquipmentSpeed";
  quantity?: Maybe<Scalars["Float"]>;
  unit?: Maybe<Scalars["String"]>;
};

export type EquipmentThrow_Range = {
  __typename?: "EquipmentThrow_range";
  long?: Maybe<Scalars["Float"]>;
  normal?: Maybe<Scalars["Float"]>;
};

export type EquipmentTwo_Handed_Damage = {
  __typename?: "EquipmentTwo_handed_damage";
  damage_dice?: Maybe<Scalars["String"]>;
  damage_type?: Maybe<AbilityScoreSkills>;
};

export type Feature = {
  __typename?: "Feature";
  _id: Scalars["String"];
  choice?: Maybe<FeatureChoice>;
  class?: Maybe<AbilityScoreSkills>;
  desc?: Maybe<Array<Maybe<Scalars["String"]>>>;
  group?: Maybe<Scalars["String"]>;
  index?: Maybe<Scalars["String"]>;
  level?: Maybe<Scalars["Float"]>;
  name?: Maybe<Scalars["String"]>;
  prerequisites?: Maybe<Array<Maybe<FeaturePrerequisites>>>;
  reference?: Maybe<Scalars["String"]>;
  subclass?: Maybe<AbilityScoreSkills>;
  url?: Maybe<Scalars["String"]>;
};

export type FeatureChoice = {
  __typename?: "FeatureChoice";
  choose?: Maybe<Scalars["Float"]>;
  from?: Maybe<Array<Maybe<AbilityScoreSkills>>>;
  type?: Maybe<Scalars["String"]>;
};

export type FeaturePrerequisites = {
  __typename?: "FeaturePrerequisites";
  level?: Maybe<Scalars["Float"]>;
  type?: Maybe<Scalars["String"]>;
};

export type FilterFindManyAbilityScore_IdOperatorsInput = {
  gt?: Maybe<Scalars["String"]>;
  gte?: Maybe<Scalars["String"]>;
  lt?: Maybe<Scalars["String"]>;
  lte?: Maybe<Scalars["String"]>;
  ne?: Maybe<Scalars["String"]>;
  in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["String"]>>>;
  regex?: Maybe<Scalars["RegExpAsString"]>;
  exists?: Maybe<Scalars["Boolean"]>;
};

export type FilterFindManyAbilityScoreInput = {
  _id?: Maybe<Scalars["String"]>;
  desc?: Maybe<Array<Maybe<Scalars["String"]>>>;
  full_name?: Maybe<Scalars["String"]>;
  index?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  skills?: Maybe<Array<Maybe<FilterFindManyAbilityScoreSkillsInput>>>;
  url?: Maybe<Scalars["String"]>;
  _operators?: Maybe<FilterFindManyAbilityScoreOperatorsInput>;
  OR?: Maybe<Array<FilterFindManyAbilityScoreInput>>;
  AND?: Maybe<Array<FilterFindManyAbilityScoreInput>>;
};

export type FilterFindManyAbilityScoreOperatorsInput = {
  _id?: Maybe<FilterFindManyAbilityScore_IdOperatorsInput>;
};

export type FilterFindManyAbilityScoreSkillsInput = {
  index?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
};

export type FilterFindManyAlignment_IdOperatorsInput = {
  gt?: Maybe<Scalars["String"]>;
  gte?: Maybe<Scalars["String"]>;
  lt?: Maybe<Scalars["String"]>;
  lte?: Maybe<Scalars["String"]>;
  ne?: Maybe<Scalars["String"]>;
  in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["String"]>>>;
  regex?: Maybe<Scalars["RegExpAsString"]>;
  exists?: Maybe<Scalars["Boolean"]>;
};

export type FilterFindManyAlignmentInput = {
  _id?: Maybe<Scalars["String"]>;
  desc?: Maybe<Scalars["String"]>;
  abbreviation?: Maybe<Scalars["String"]>;
  index?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
  _operators?: Maybe<FilterFindManyAlignmentOperatorsInput>;
  OR?: Maybe<Array<FilterFindManyAlignmentInput>>;
  AND?: Maybe<Array<FilterFindManyAlignmentInput>>;
};

export type FilterFindManyAlignmentOperatorsInput = {
  _id?: Maybe<FilterFindManyAlignment_IdOperatorsInput>;
};

export type FilterFindManyBackground_IdOperatorsInput = {
  gt?: Maybe<Scalars["String"]>;
  gte?: Maybe<Scalars["String"]>;
  lt?: Maybe<Scalars["String"]>;
  lte?: Maybe<Scalars["String"]>;
  ne?: Maybe<Scalars["String"]>;
  in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["String"]>>>;
  regex?: Maybe<Scalars["RegExpAsString"]>;
  exists?: Maybe<Scalars["Boolean"]>;
};

export type FilterFindManyBackgroundFeatureInput = {
  name?: Maybe<Scalars["String"]>;
  desc?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

export type FilterFindManyBackgroundIdealsFromInput = {
  desc?: Maybe<Scalars["String"]>;
  alignments?: Maybe<Array<Maybe<FilterFindManyAbilityScoreSkillsInput>>>;
};

export type FilterFindManyBackgroundIdealsInput = {
  choose?: Maybe<Scalars["Float"]>;
  from?: Maybe<Array<Maybe<FilterFindManyBackgroundIdealsFromInput>>>;
  type?: Maybe<Scalars["String"]>;
};

export type FilterFindManyBackgroundInput = {
  _id?: Maybe<Scalars["String"]>;
  index?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  starting_proficiencies?: Maybe<
    Array<Maybe<FilterFindManyAbilityScoreSkillsInput>>
  >;
  language_options?: Maybe<FilterFindManyBackgroundLanguage_OptionsInput>;
  url?: Maybe<Scalars["String"]>;
  starting_equipment?: Maybe<
    Array<Maybe<FilterFindManyBackgroundStarting_EquipmentInput>>
  >;
  starting_equipment_options?: Maybe<
    Array<Maybe<FilterFindManyBackgroundStarting_Equipment_OptionsInput>>
  >;
  feature?: Maybe<FilterFindManyBackgroundFeatureInput>;
  personality_traits?: Maybe<FilterFindManyBackgroundPersonality_TraitsInput>;
  ideals?: Maybe<FilterFindManyBackgroundIdealsInput>;
  bonds?: Maybe<FilterFindManyBackgroundPersonality_TraitsInput>;
  flaws?: Maybe<FilterFindManyBackgroundPersonality_TraitsInput>;
  _operators?: Maybe<FilterFindManyBackgroundOperatorsInput>;
  OR?: Maybe<Array<FilterFindManyBackgroundInput>>;
  AND?: Maybe<Array<FilterFindManyBackgroundInput>>;
};

export type FilterFindManyBackgroundLanguage_OptionsInput = {
  choose?: Maybe<Scalars["Float"]>;
  from?: Maybe<Array<Maybe<FilterFindManyAbilityScoreSkillsInput>>>;
  type?: Maybe<Scalars["String"]>;
};

export type FilterFindManyBackgroundOperatorsInput = {
  _id?: Maybe<FilterFindManyBackground_IdOperatorsInput>;
};

export type FilterFindManyBackgroundPersonality_TraitsInput = {
  choose?: Maybe<Scalars["Float"]>;
  from?: Maybe<Array<Maybe<Scalars["String"]>>>;
  type?: Maybe<Scalars["String"]>;
};

export type FilterFindManyBackgroundStarting_Equipment_OptionsFromInput = {
  equipment?: Maybe<FilterFindManyAbilityScoreSkillsInput>;
  quantity?: Maybe<Scalars["Float"]>;
};

export type FilterFindManyBackgroundStarting_Equipment_OptionsInput = {
  choose?: Maybe<Scalars["Float"]>;
  from?: Maybe<
    Array<Maybe<FilterFindManyBackgroundStarting_Equipment_OptionsFromInput>>
  >;
  type?: Maybe<Scalars["String"]>;
};

export type FilterFindManyBackgroundStarting_EquipmentInput = {
  equipment?: Maybe<FilterFindManyAbilityScoreSkillsInput>;
  quantity?: Maybe<Scalars["Float"]>;
};

export type FilterFindManyClass_IdOperatorsInput = {
  gt?: Maybe<Scalars["String"]>;
  gte?: Maybe<Scalars["String"]>;
  lt?: Maybe<Scalars["String"]>;
  lte?: Maybe<Scalars["String"]>;
  ne?: Maybe<Scalars["String"]>;
  in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["String"]>>>;
  regex?: Maybe<Scalars["RegExpAsString"]>;
  exists?: Maybe<Scalars["Boolean"]>;
};

export type FilterFindManyClassInput = {
  _id?: Maybe<Scalars["String"]>;
  class_levels?: Maybe<Scalars["String"]>;
  hit_die?: Maybe<Scalars["Float"]>;
  index?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  proficiencies?: Maybe<Array<Maybe<FilterFindManyAbilityScoreSkillsInput>>>;
  proficiency_choices?: Maybe<
    Array<Maybe<FilterFindManyClassProficiency_ChoicesInput>>
  >;
  saving_throws?: Maybe<Array<Maybe<FilterFindManyAbilityScoreSkillsInput>>>;
  spellcasting?: Maybe<FilterFindManyClassSpellcastingInput>;
  spells?: Maybe<Scalars["String"]>;
  starting_equipment?: Maybe<
    Array<Maybe<FilterFindManyClassStarting_EquipmentInput>>
  >;
  starting_equipment_options?: Maybe<
    Array<Maybe<FilterFindManyClassStarting_Equipment_OptionsInput>>
  >;
  subclasses?: Maybe<Array<Maybe<FilterFindManyAbilityScoreSkillsInput>>>;
  url?: Maybe<Scalars["String"]>;
  _operators?: Maybe<FilterFindManyClassOperatorsInput>;
  OR?: Maybe<Array<FilterFindManyClassInput>>;
  AND?: Maybe<Array<FilterFindManyClassInput>>;
};

export type FilterFindManyClassOperatorsInput = {
  _id?: Maybe<FilterFindManyClass_IdOperatorsInput>;
};

export type FilterFindManyClassProficiency_ChoicesInput = {
  choose?: Maybe<Scalars["Float"]>;
  from?: Maybe<Array<Maybe<FilterFindManyAbilityScoreSkillsInput>>>;
  type?: Maybe<Scalars["String"]>;
};

export type FilterFindManyClassSpellcastingInfoInput = {
  desc?: Maybe<Array<Maybe<Scalars["String"]>>>;
  name?: Maybe<Scalars["String"]>;
};

export type FilterFindManyClassSpellcastingInput = {
  info?: Maybe<Array<Maybe<FilterFindManyClassSpellcastingInfoInput>>>;
  level?: Maybe<Scalars["Float"]>;
  spellcasting_ability?: Maybe<FilterFindManyAbilityScoreSkillsInput>;
};

export type FilterFindManyClassStarting_Equipment_OptionsFromInput = {
  equipment?: Maybe<FilterFindManyAbilityScoreSkillsInput>;
  quantity?: Maybe<Scalars["Float"]>;
};

export type FilterFindManyClassStarting_Equipment_OptionsInput = {
  choose?: Maybe<Scalars["Float"]>;
  from?: Maybe<
    Array<Maybe<FilterFindManyClassStarting_Equipment_OptionsFromInput>>
  >;
  type?: Maybe<Scalars["String"]>;
};

export type FilterFindManyClassStarting_EquipmentInput = {
  equipment?: Maybe<FilterFindManyAbilityScoreSkillsInput>;
  quantity?: Maybe<Scalars["Float"]>;
};

export type FilterFindManyCondition_IdOperatorsInput = {
  gt?: Maybe<Scalars["String"]>;
  gte?: Maybe<Scalars["String"]>;
  lt?: Maybe<Scalars["String"]>;
  lte?: Maybe<Scalars["String"]>;
  ne?: Maybe<Scalars["String"]>;
  in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["String"]>>>;
  regex?: Maybe<Scalars["RegExpAsString"]>;
  exists?: Maybe<Scalars["Boolean"]>;
};

export type FilterFindManyConditionInput = {
  _id?: Maybe<Scalars["String"]>;
  desc?: Maybe<Array<Maybe<Scalars["String"]>>>;
  index?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
  _operators?: Maybe<FilterFindManyConditionOperatorsInput>;
  OR?: Maybe<Array<FilterFindManyConditionInput>>;
  AND?: Maybe<Array<FilterFindManyConditionInput>>;
};

export type FilterFindManyConditionOperatorsInput = {
  _id?: Maybe<FilterFindManyCondition_IdOperatorsInput>;
};

export type FilterFindManyDamageType_IdOperatorsInput = {
  gt?: Maybe<Scalars["String"]>;
  gte?: Maybe<Scalars["String"]>;
  lt?: Maybe<Scalars["String"]>;
  lte?: Maybe<Scalars["String"]>;
  ne?: Maybe<Scalars["String"]>;
  in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["String"]>>>;
  regex?: Maybe<Scalars["RegExpAsString"]>;
  exists?: Maybe<Scalars["Boolean"]>;
};

export type FilterFindManyDamageTypeInput = {
  _id?: Maybe<Scalars["String"]>;
  desc?: Maybe<Array<Maybe<Scalars["String"]>>>;
  index?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
  _operators?: Maybe<FilterFindManyDamageTypeOperatorsInput>;
  OR?: Maybe<Array<FilterFindManyDamageTypeInput>>;
  AND?: Maybe<Array<FilterFindManyDamageTypeInput>>;
};

export type FilterFindManyDamageTypeOperatorsInput = {
  _id?: Maybe<FilterFindManyDamageType_IdOperatorsInput>;
};

export type FilterFindManyEquipment_IdOperatorsInput = {
  gt?: Maybe<Scalars["String"]>;
  gte?: Maybe<Scalars["String"]>;
  lt?: Maybe<Scalars["String"]>;
  lte?: Maybe<Scalars["String"]>;
  ne?: Maybe<Scalars["String"]>;
  in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["String"]>>>;
  regex?: Maybe<Scalars["RegExpAsString"]>;
  exists?: Maybe<Scalars["Boolean"]>;
};

export type FilterFindManyEquipmentArmor_ClassInput = {
  base?: Maybe<Scalars["Float"]>;
  dex_bonus?: Maybe<Scalars["Boolean"]>;
  max_bonus?: Maybe<Scalars["Float"]>;
};

export type FilterFindManyEquipmentCategory_IdOperatorsInput = {
  gt?: Maybe<Scalars["String"]>;
  gte?: Maybe<Scalars["String"]>;
  lt?: Maybe<Scalars["String"]>;
  lte?: Maybe<Scalars["String"]>;
  ne?: Maybe<Scalars["String"]>;
  in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["String"]>>>;
  regex?: Maybe<Scalars["RegExpAsString"]>;
  exists?: Maybe<Scalars["Boolean"]>;
};

export type FilterFindManyEquipmentCategoryInput = {
  _id?: Maybe<Scalars["String"]>;
  equipment?: Maybe<Array<Maybe<FilterFindManyAbilityScoreSkillsInput>>>;
  index?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
  _operators?: Maybe<FilterFindManyEquipmentCategoryOperatorsInput>;
  OR?: Maybe<Array<FilterFindManyEquipmentCategoryInput>>;
  AND?: Maybe<Array<FilterFindManyEquipmentCategoryInput>>;
};

export type FilterFindManyEquipmentCategoryOperatorsInput = {
  _id?: Maybe<FilterFindManyEquipmentCategory_IdOperatorsInput>;
};

export type FilterFindManyEquipmentContentsInput = {
  item?: Maybe<FilterFindManyAbilityScoreSkillsInput>;
  quantity?: Maybe<Scalars["Float"]>;
};

export type FilterFindManyEquipmentCostInput = {
  quantity?: Maybe<Scalars["Float"]>;
  unit?: Maybe<Scalars["String"]>;
};

export type FilterFindManyEquipmentDamageInput = {
  damage_dice?: Maybe<Scalars["String"]>;
  damage_type?: Maybe<FilterFindManyAbilityScoreSkillsInput>;
};

export type FilterFindManyEquipmentInput = {
  _id?: Maybe<Scalars["String"]>;
  armor_category?: Maybe<Scalars["String"]>;
  armor_class?: Maybe<FilterFindManyEquipmentArmor_ClassInput>;
  capacity?: Maybe<Scalars["String"]>;
  category_range?: Maybe<Scalars["String"]>;
  contents?: Maybe<Array<Maybe<FilterFindManyEquipmentContentsInput>>>;
  cost?: Maybe<FilterFindManyEquipmentCostInput>;
  damage?: Maybe<FilterFindManyEquipmentDamageInput>;
  desc?: Maybe<Array<Maybe<Scalars["String"]>>>;
  equipment_category?: Maybe<FilterFindManyAbilityScoreSkillsInput>;
  gear_category?: Maybe<FilterFindManyAbilityScoreSkillsInput>;
  index?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  properties?: Maybe<Array<Maybe<FilterFindManyAbilityScoreSkillsInput>>>;
  quantity?: Maybe<Scalars["Float"]>;
  range?: Maybe<FilterFindManyEquipmentRangeInput>;
  special?: Maybe<Array<Maybe<Scalars["String"]>>>;
  speed?: Maybe<FilterFindManyEquipmentSpeedInput>;
  stealth_disadvantage?: Maybe<Scalars["Boolean"]>;
  str_minimum?: Maybe<Scalars["Float"]>;
  throw_range?: Maybe<FilterFindManyEquipmentThrow_RangeInput>;
  tool_category?: Maybe<Scalars["String"]>;
  two_handed_damage?: Maybe<FilterFindManyEquipmentTwo_Handed_DamageInput>;
  url?: Maybe<Scalars["String"]>;
  vehicle_category?: Maybe<Scalars["String"]>;
  weapon_category?: Maybe<Scalars["String"]>;
  weapon_range?: Maybe<Scalars["String"]>;
  weight?: Maybe<Scalars["Float"]>;
  _operators?: Maybe<FilterFindManyEquipmentOperatorsInput>;
  OR?: Maybe<Array<FilterFindManyEquipmentInput>>;
  AND?: Maybe<Array<FilterFindManyEquipmentInput>>;
};

export type FilterFindManyEquipmentOperatorsInput = {
  _id?: Maybe<FilterFindManyEquipment_IdOperatorsInput>;
};

export type FilterFindManyEquipmentRangeInput = {
  long?: Maybe<Scalars["Float"]>;
  normal?: Maybe<Scalars["Float"]>;
};

export type FilterFindManyEquipmentSpeedInput = {
  quantity?: Maybe<Scalars["Float"]>;
  unit?: Maybe<Scalars["String"]>;
};

export type FilterFindManyEquipmentThrow_RangeInput = {
  long?: Maybe<Scalars["Float"]>;
  normal?: Maybe<Scalars["Float"]>;
};

export type FilterFindManyEquipmentTwo_Handed_DamageInput = {
  damage_dice?: Maybe<Scalars["String"]>;
  damage_type?: Maybe<FilterFindManyAbilityScoreSkillsInput>;
};

export type FilterFindManyFeature_IdOperatorsInput = {
  gt?: Maybe<Scalars["String"]>;
  gte?: Maybe<Scalars["String"]>;
  lt?: Maybe<Scalars["String"]>;
  lte?: Maybe<Scalars["String"]>;
  ne?: Maybe<Scalars["String"]>;
  in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["String"]>>>;
  regex?: Maybe<Scalars["RegExpAsString"]>;
  exists?: Maybe<Scalars["Boolean"]>;
};

export type FilterFindManyFeatureChoiceInput = {
  choose?: Maybe<Scalars["Float"]>;
  from?: Maybe<Array<Maybe<FilterFindManyAbilityScoreSkillsInput>>>;
  type?: Maybe<Scalars["String"]>;
};

export type FilterFindManyFeatureInput = {
  _id?: Maybe<Scalars["String"]>;
  choice?: Maybe<FilterFindManyFeatureChoiceInput>;
  class?: Maybe<FilterFindManyAbilityScoreSkillsInput>;
  desc?: Maybe<Array<Maybe<Scalars["String"]>>>;
  group?: Maybe<Scalars["String"]>;
  index?: Maybe<Scalars["String"]>;
  level?: Maybe<Scalars["Float"]>;
  name?: Maybe<Scalars["String"]>;
  prerequisites?: Maybe<Array<Maybe<FilterFindManyFeaturePrerequisitesInput>>>;
  reference?: Maybe<Scalars["String"]>;
  subclass?: Maybe<FilterFindManyAbilityScoreSkillsInput>;
  url?: Maybe<Scalars["String"]>;
  _operators?: Maybe<FilterFindManyFeatureOperatorsInput>;
  OR?: Maybe<Array<FilterFindManyFeatureInput>>;
  AND?: Maybe<Array<FilterFindManyFeatureInput>>;
};

export type FilterFindManyFeatureOperatorsInput = {
  _id?: Maybe<FilterFindManyFeature_IdOperatorsInput>;
};

export type FilterFindManyFeaturePrerequisitesInput = {
  level?: Maybe<Scalars["Float"]>;
  type?: Maybe<Scalars["String"]>;
};

export type FilterFindManyLanguage_IdOperatorsInput = {
  gt?: Maybe<Scalars["String"]>;
  gte?: Maybe<Scalars["String"]>;
  lt?: Maybe<Scalars["String"]>;
  lte?: Maybe<Scalars["String"]>;
  ne?: Maybe<Scalars["String"]>;
  in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["String"]>>>;
  regex?: Maybe<Scalars["RegExpAsString"]>;
  exists?: Maybe<Scalars["Boolean"]>;
};

export type FilterFindManyLanguageInput = {
  _id?: Maybe<Scalars["String"]>;
  desc?: Maybe<Scalars["String"]>;
  index?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  script?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  typical_speakers?: Maybe<Array<Maybe<Scalars["String"]>>>;
  url?: Maybe<Scalars["String"]>;
  _operators?: Maybe<FilterFindManyLanguageOperatorsInput>;
  OR?: Maybe<Array<FilterFindManyLanguageInput>>;
  AND?: Maybe<Array<FilterFindManyLanguageInput>>;
};

export type FilterFindManyLanguageOperatorsInput = {
  _id?: Maybe<FilterFindManyLanguage_IdOperatorsInput>;
};

export type FilterFindManyLevel_IdOperatorsInput = {
  gt?: Maybe<Scalars["String"]>;
  gte?: Maybe<Scalars["String"]>;
  lt?: Maybe<Scalars["String"]>;
  lte?: Maybe<Scalars["String"]>;
  ne?: Maybe<Scalars["String"]>;
  in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["String"]>>>;
  regex?: Maybe<Scalars["RegExpAsString"]>;
  exists?: Maybe<Scalars["Boolean"]>;
};

export type FilterFindManyLevelClass_SpecificCreating_Spell_SlotsInput = {
  sorcery_point_cost?: Maybe<Scalars["Float"]>;
  spell_slot_level?: Maybe<Scalars["Float"]>;
};

export type FilterFindManyLevelClass_SpecificInput = {
  action_surges?: Maybe<Scalars["Float"]>;
  arcane_recovery_levels?: Maybe<Scalars["Float"]>;
  aura_range?: Maybe<Scalars["Float"]>;
  bardic_inspiration_die?: Maybe<Scalars["Float"]>;
  brutal_critical_dice?: Maybe<Scalars["Float"]>;
  channel_divinity_charges?: Maybe<Scalars["Float"]>;
  creating_spell_slots?: Maybe<
    Array<Maybe<FilterFindManyLevelClass_SpecificCreating_Spell_SlotsInput>>
  >;
  destroy_undead_cr?: Maybe<Scalars["Float"]>;
  extra_attacks?: Maybe<Scalars["Float"]>;
  favored_enemies?: Maybe<Scalars["Float"]>;
  favored_terrain?: Maybe<Scalars["Float"]>;
  indomitable_uses?: Maybe<Scalars["Float"]>;
  invocations_known?: Maybe<Scalars["Float"]>;
  ki_points?: Maybe<Scalars["Float"]>;
  magical_secrets_max_5?: Maybe<Scalars["Float"]>;
  magical_secrets_max_7?: Maybe<Scalars["Float"]>;
  magical_secrets_max_9?: Maybe<Scalars["Float"]>;
  martial_arts?: Maybe<FilterFindManyLevelClass_SpecificMartial_ArtsInput>;
  metamagic_known?: Maybe<Scalars["Float"]>;
  mystic_arcanum_level_6?: Maybe<Scalars["Float"]>;
  mystic_arcanum_level_7?: Maybe<Scalars["Float"]>;
  mystic_arcanum_level_8?: Maybe<Scalars["Float"]>;
  mystic_arcanum_level_9?: Maybe<Scalars["Float"]>;
  rage_count?: Maybe<Scalars["Float"]>;
  rage_damage_bonus?: Maybe<Scalars["Float"]>;
  sneak_attack?: Maybe<FilterFindManyLevelClass_SpecificSneak_AttackInput>;
  song_of_rest_die?: Maybe<Scalars["Float"]>;
  sorcery_points?: Maybe<Scalars["Float"]>;
  unarmored_movement?: Maybe<Scalars["Float"]>;
  wild_shape_fly?: Maybe<Scalars["Boolean"]>;
  wild_shape_max_cr?: Maybe<Scalars["Float"]>;
  wild_shape_swim?: Maybe<Scalars["Boolean"]>;
};

export type FilterFindManyLevelClass_SpecificMartial_ArtsInput = {
  dice_count?: Maybe<Scalars["Float"]>;
  dice_value?: Maybe<Scalars["Float"]>;
};

export type FilterFindManyLevelClass_SpecificSneak_AttackInput = {
  dice_count?: Maybe<Scalars["Float"]>;
  dice_value?: Maybe<Scalars["Float"]>;
};

export type FilterFindManyLevelInput = {
  _id?: Maybe<Scalars["String"]>;
  ability_score_bonuses?: Maybe<Scalars["Float"]>;
  class?: Maybe<FilterFindManyAbilityScoreSkillsInput>;
  class_specific?: Maybe<FilterFindManyLevelClass_SpecificInput>;
  feature_choices?: Maybe<Array<Maybe<FilterFindManyAbilityScoreSkillsInput>>>;
  features?: Maybe<Array<Maybe<FilterFindManyAbilityScoreSkillsInput>>>;
  index?: Maybe<Scalars["String"]>;
  level?: Maybe<Scalars["Float"]>;
  prof_bonus?: Maybe<Scalars["Float"]>;
  spellcasting?: Maybe<FilterFindManyLevelSpellcastingInput>;
  subclass?: Maybe<FilterFindManyAbilityScoreSkillsInput>;
  subclass_specific?: Maybe<FilterFindManyLevelSubclass_SpecificInput>;
  url?: Maybe<Scalars["String"]>;
  _operators?: Maybe<FilterFindManyLevelOperatorsInput>;
  OR?: Maybe<Array<FilterFindManyLevelInput>>;
  AND?: Maybe<Array<FilterFindManyLevelInput>>;
};

export type FilterFindManyLevelOperatorsInput = {
  _id?: Maybe<FilterFindManyLevel_IdOperatorsInput>;
};

export type FilterFindManyLevelSpellcastingInput = {
  cantrips_known?: Maybe<Scalars["Float"]>;
  spell_slots_level_1?: Maybe<Scalars["Float"]>;
  spell_slots_level_2?: Maybe<Scalars["Float"]>;
  spell_slots_level_3?: Maybe<Scalars["Float"]>;
  spell_slots_level_4?: Maybe<Scalars["Float"]>;
  spell_slots_level_5?: Maybe<Scalars["Float"]>;
  spell_slots_level_6?: Maybe<Scalars["Float"]>;
  spell_slots_level_7?: Maybe<Scalars["Float"]>;
  spell_slots_level_8?: Maybe<Scalars["Float"]>;
  spell_slots_level_9?: Maybe<Scalars["Float"]>;
  spells_known?: Maybe<Scalars["Float"]>;
};

export type FilterFindManyLevelSubclass_SpecificInput = {
  additional_magical_secrets_max_lvl?: Maybe<Scalars["Float"]>;
  aura_range?: Maybe<Scalars["Float"]>;
};

export type FilterFindManyMagicItem_IdOperatorsInput = {
  gt?: Maybe<Scalars["String"]>;
  gte?: Maybe<Scalars["String"]>;
  lt?: Maybe<Scalars["String"]>;
  lte?: Maybe<Scalars["String"]>;
  ne?: Maybe<Scalars["String"]>;
  in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["String"]>>>;
  regex?: Maybe<Scalars["RegExpAsString"]>;
  exists?: Maybe<Scalars["Boolean"]>;
};

export type FilterFindManyMagicItemInput = {
  _id?: Maybe<Scalars["String"]>;
  desc?: Maybe<Array<Maybe<Scalars["String"]>>>;
  equipment_category?: Maybe<FilterFindManyAbilityScoreSkillsInput>;
  index?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
  _operators?: Maybe<FilterFindManyMagicItemOperatorsInput>;
  OR?: Maybe<Array<FilterFindManyMagicItemInput>>;
  AND?: Maybe<Array<FilterFindManyMagicItemInput>>;
};

export type FilterFindManyMagicItemOperatorsInput = {
  _id?: Maybe<FilterFindManyMagicItem_IdOperatorsInput>;
};

export type FilterFindManyMagicSchool_IdOperatorsInput = {
  gt?: Maybe<Scalars["String"]>;
  gte?: Maybe<Scalars["String"]>;
  lt?: Maybe<Scalars["String"]>;
  lte?: Maybe<Scalars["String"]>;
  ne?: Maybe<Scalars["String"]>;
  in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["String"]>>>;
  regex?: Maybe<Scalars["RegExpAsString"]>;
  exists?: Maybe<Scalars["Boolean"]>;
};

export type FilterFindManyMagicSchoolInput = {
  _id?: Maybe<Scalars["String"]>;
  desc?: Maybe<Scalars["String"]>;
  index?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
  _operators?: Maybe<FilterFindManyMagicSchoolOperatorsInput>;
  OR?: Maybe<Array<FilterFindManyMagicSchoolInput>>;
  AND?: Maybe<Array<FilterFindManyMagicSchoolInput>>;
};

export type FilterFindManyMagicSchoolOperatorsInput = {
  _id?: Maybe<FilterFindManyMagicSchool_IdOperatorsInput>;
};

export type FilterFindManyMonster_IdOperatorsInput = {
  gt?: Maybe<Scalars["String"]>;
  gte?: Maybe<Scalars["String"]>;
  lt?: Maybe<Scalars["String"]>;
  lte?: Maybe<Scalars["String"]>;
  ne?: Maybe<Scalars["String"]>;
  in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["String"]>>>;
  regex?: Maybe<Scalars["RegExpAsString"]>;
  exists?: Maybe<Scalars["Boolean"]>;
};

export type FilterFindManyMonsterActionsDamageInput = {
  damage_dice?: Maybe<Scalars["String"]>;
  damage_type?: Maybe<FilterFindManyAbilityScoreSkillsInput>;
};

export type FilterFindManyMonsterActionsInput = {
  attack_bonus?: Maybe<Scalars["Float"]>;
  damage?: Maybe<Array<Maybe<FilterFindManyMonsterActionsDamageInput>>>;
  desc?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
};

export type FilterFindManyMonsterInput = {
  _id?: Maybe<Scalars["String"]>;
  actions?: Maybe<Array<Maybe<FilterFindManyMonsterActionsInput>>>;
  alignment?: Maybe<Scalars["String"]>;
  armor_class?: Maybe<Scalars["Float"]>;
  challenge_rating?: Maybe<Scalars["Float"]>;
  charisma?: Maybe<Scalars["Float"]>;
  condition_immunities?: Maybe<
    Array<Maybe<FilterFindManyAbilityScoreSkillsInput>>
  >;
  constitution?: Maybe<Scalars["Float"]>;
  damage_immunities?: Maybe<Array<Maybe<Scalars["String"]>>>;
  damage_resistances?: Maybe<Array<Maybe<Scalars["String"]>>>;
  damage_vulnerabilities?: Maybe<Array<Maybe<Scalars["String"]>>>;
  dexterity?: Maybe<Scalars["Float"]>;
  forms?: Maybe<Array<Maybe<FilterFindManyAbilityScoreSkillsInput>>>;
  hit_dice?: Maybe<Scalars["String"]>;
  hit_points?: Maybe<Scalars["Float"]>;
  index?: Maybe<Scalars["String"]>;
  intelligence?: Maybe<Scalars["Float"]>;
  languages?: Maybe<Scalars["String"]>;
  legendary_actions?: Maybe<
    Array<Maybe<FilterFindManyMonsterLegendary_ActionsInput>>
  >;
  name?: Maybe<Scalars["String"]>;
  proficiencies?: Maybe<Array<Maybe<FilterFindManyMonsterProficienciesInput>>>;
  reactions?: Maybe<Array<Maybe<FilterFindManyMonsterReactionsInput>>>;
  senses?: Maybe<FilterFindManyMonsterSensesInput>;
  size?: Maybe<Scalars["String"]>;
  special_abilities?: Maybe<
    Array<Maybe<FilterFindManyMonsterSpecial_AbilitiesInput>>
  >;
  speed?: Maybe<FilterFindManyMonsterSpeedInput>;
  strength?: Maybe<Scalars["Float"]>;
  subtype?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
  wisdom?: Maybe<Scalars["Float"]>;
  xp?: Maybe<Scalars["Float"]>;
  _operators?: Maybe<FilterFindManyMonsterOperatorsInput>;
  OR?: Maybe<Array<FilterFindManyMonsterInput>>;
  AND?: Maybe<Array<FilterFindManyMonsterInput>>;
};

export type FilterFindManyMonsterLegendary_ActionsInput = {
  attack_bonus?: Maybe<Scalars["Float"]>;
  desc?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
};

export type FilterFindManyMonsterOperatorsInput = {
  _id?: Maybe<FilterFindManyMonster_IdOperatorsInput>;
};

export type FilterFindManyMonsterProficienciesInput = {
  proficiency?: Maybe<FilterFindManyAbilityScoreSkillsInput>;
  value?: Maybe<Scalars["Float"]>;
};

export type FilterFindManyMonsterReactionsInput = {
  desc?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
};

export type FilterFindManyMonsterSensesInput = {
  blindsight?: Maybe<Scalars["String"]>;
  darkvision?: Maybe<Scalars["String"]>;
  passive_perception?: Maybe<Scalars["Float"]>;
  tremorsense?: Maybe<Scalars["String"]>;
  truesight?: Maybe<Scalars["String"]>;
};

export type FilterFindManyMonsterSpecial_AbilitiesInput = {
  desc?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
};

export type FilterFindManyMonsterSpeedInput = {
  burrow?: Maybe<Scalars["String"]>;
  climb?: Maybe<Scalars["String"]>;
  fly?: Maybe<Scalars["String"]>;
  hover?: Maybe<Scalars["Boolean"]>;
  swim?: Maybe<Scalars["String"]>;
  walk?: Maybe<Scalars["String"]>;
};

export type FilterFindManyProficiency_IdOperatorsInput = {
  gt?: Maybe<Scalars["String"]>;
  gte?: Maybe<Scalars["String"]>;
  lt?: Maybe<Scalars["String"]>;
  lte?: Maybe<Scalars["String"]>;
  ne?: Maybe<Scalars["String"]>;
  in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["String"]>>>;
  regex?: Maybe<Scalars["RegExpAsString"]>;
  exists?: Maybe<Scalars["Boolean"]>;
};

export type FilterFindManyProficiencyInput = {
  _id?: Maybe<Scalars["String"]>;
  classes?: Maybe<Array<Maybe<FilterFindManyAbilityScoreSkillsInput>>>;
  index?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  races?: Maybe<Array<Maybe<FilterFindManyAbilityScoreSkillsInput>>>;
  references?: Maybe<Array<Maybe<FilterFindManyProficiencyReferencesInput>>>;
  type?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
  _operators?: Maybe<FilterFindManyProficiencyOperatorsInput>;
  OR?: Maybe<Array<FilterFindManyProficiencyInput>>;
  AND?: Maybe<Array<FilterFindManyProficiencyInput>>;
};

export type FilterFindManyProficiencyOperatorsInput = {
  _id?: Maybe<FilterFindManyProficiency_IdOperatorsInput>;
};

export type FilterFindManyProficiencyReferencesInput = {
  index?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
};

export type FilterFindManyRace_IdOperatorsInput = {
  gt?: Maybe<Scalars["String"]>;
  gte?: Maybe<Scalars["String"]>;
  lt?: Maybe<Scalars["String"]>;
  lte?: Maybe<Scalars["String"]>;
  ne?: Maybe<Scalars["String"]>;
  in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["String"]>>>;
  regex?: Maybe<Scalars["RegExpAsString"]>;
  exists?: Maybe<Scalars["Boolean"]>;
};

export type FilterFindManyRaceAbility_Bonus_OptionsFromInput = {
  ability_score?: Maybe<FilterFindManyAbilityScoreSkillsInput>;
  bonus?: Maybe<Scalars["Float"]>;
};

export type FilterFindManyRaceAbility_Bonus_OptionsInput = {
  choose?: Maybe<Scalars["Float"]>;
  from?: Maybe<Array<Maybe<FilterFindManyRaceAbility_Bonus_OptionsFromInput>>>;
  type?: Maybe<Scalars["String"]>;
};

export type FilterFindManyRaceAbility_BonusesInput = {
  ability_score?: Maybe<FilterFindManyAbilityScoreSkillsInput>;
  bonus?: Maybe<Scalars["Float"]>;
};

export type FilterFindManyRaceInput = {
  _id?: Maybe<Scalars["String"]>;
  ability_bonus_options?: Maybe<FilterFindManyRaceAbility_Bonus_OptionsInput>;
  ability_bonuses?: Maybe<Array<Maybe<FilterFindManyRaceAbility_BonusesInput>>>;
  age?: Maybe<Scalars["String"]>;
  alignment?: Maybe<Scalars["String"]>;
  index?: Maybe<Scalars["String"]>;
  language_desc?: Maybe<Scalars["String"]>;
  language_options?: Maybe<FilterFindManyRaceLanguage_OptionsInput>;
  languages?: Maybe<Array<Maybe<FilterFindManyAbilityScoreSkillsInput>>>;
  name?: Maybe<Scalars["String"]>;
  size?: Maybe<Scalars["String"]>;
  size_description?: Maybe<Scalars["String"]>;
  speed?: Maybe<Scalars["Float"]>;
  starting_proficiencies?: Maybe<
    Array<Maybe<FilterFindManyAbilityScoreSkillsInput>>
  >;
  starting_proficiency_options?: Maybe<FilterFindManyRaceStarting_Proficiency_OptionsInput>;
  subraces?: Maybe<Array<Maybe<FilterFindManyAbilityScoreSkillsInput>>>;
  trait_options?: Maybe<FilterFindManyRaceTrait_OptionsInput>;
  traits?: Maybe<Array<Maybe<FilterFindManyAbilityScoreSkillsInput>>>;
  url?: Maybe<Scalars["String"]>;
  _operators?: Maybe<FilterFindManyRaceOperatorsInput>;
  OR?: Maybe<Array<FilterFindManyRaceInput>>;
  AND?: Maybe<Array<FilterFindManyRaceInput>>;
};

export type FilterFindManyRaceLanguage_OptionsInput = {
  choose?: Maybe<Scalars["Float"]>;
  from?: Maybe<Array<Maybe<FilterFindManyAbilityScoreSkillsInput>>>;
  type?: Maybe<Scalars["String"]>;
};

export type FilterFindManyRaceOperatorsInput = {
  _id?: Maybe<FilterFindManyRace_IdOperatorsInput>;
};

export type FilterFindManyRaceStarting_Proficiency_OptionsInput = {
  choose?: Maybe<Scalars["Float"]>;
  from?: Maybe<Array<Maybe<FilterFindManyAbilityScoreSkillsInput>>>;
  type?: Maybe<Scalars["String"]>;
};

export type FilterFindManyRaceTrait_OptionsInput = {
  choose?: Maybe<Scalars["Float"]>;
  from?: Maybe<Array<Maybe<FilterFindManyAbilityScoreSkillsInput>>>;
  type?: Maybe<Scalars["String"]>;
};

export type FilterFindManyRule_IdOperatorsInput = {
  gt?: Maybe<Scalars["String"]>;
  gte?: Maybe<Scalars["String"]>;
  lt?: Maybe<Scalars["String"]>;
  lte?: Maybe<Scalars["String"]>;
  ne?: Maybe<Scalars["String"]>;
  in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["String"]>>>;
  regex?: Maybe<Scalars["RegExpAsString"]>;
  exists?: Maybe<Scalars["Boolean"]>;
};

export type FilterFindManyRuleInput = {
  _id?: Maybe<Scalars["String"]>;
  desc?: Maybe<Scalars["String"]>;
  index?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  subsections?: Maybe<Array<Maybe<FilterFindManyAbilityScoreSkillsInput>>>;
  url?: Maybe<Scalars["String"]>;
  _operators?: Maybe<FilterFindManyRuleOperatorsInput>;
  OR?: Maybe<Array<FilterFindManyRuleInput>>;
  AND?: Maybe<Array<FilterFindManyRuleInput>>;
};

export type FilterFindManyRuleOperatorsInput = {
  _id?: Maybe<FilterFindManyRule_IdOperatorsInput>;
};

export type FilterFindManyRuleSection_IdOperatorsInput = {
  gt?: Maybe<Scalars["String"]>;
  gte?: Maybe<Scalars["String"]>;
  lt?: Maybe<Scalars["String"]>;
  lte?: Maybe<Scalars["String"]>;
  ne?: Maybe<Scalars["String"]>;
  in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["String"]>>>;
  regex?: Maybe<Scalars["RegExpAsString"]>;
  exists?: Maybe<Scalars["Boolean"]>;
};

export type FilterFindManyRuleSectionInput = {
  _id?: Maybe<Scalars["String"]>;
  desc?: Maybe<Scalars["String"]>;
  index?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
  _operators?: Maybe<FilterFindManyRuleSectionOperatorsInput>;
  OR?: Maybe<Array<FilterFindManyRuleSectionInput>>;
  AND?: Maybe<Array<FilterFindManyRuleSectionInput>>;
};

export type FilterFindManyRuleSectionOperatorsInput = {
  _id?: Maybe<FilterFindManyRuleSection_IdOperatorsInput>;
};

export type FilterFindManySpell_IdOperatorsInput = {
  gt?: Maybe<Scalars["String"]>;
  gte?: Maybe<Scalars["String"]>;
  lt?: Maybe<Scalars["String"]>;
  lte?: Maybe<Scalars["String"]>;
  ne?: Maybe<Scalars["String"]>;
  in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["String"]>>>;
  regex?: Maybe<Scalars["RegExpAsString"]>;
  exists?: Maybe<Scalars["Boolean"]>;
};

export type FilterFindManySpellArea_Of_EffectInput = {
  size?: Maybe<Scalars["Float"]>;
  type?: Maybe<Scalars["String"]>;
};

export type FilterFindManySpellDamageInput = {
  damage_at_slot_level?: Maybe<Scalars["JSON"]>;
  damage_at_character_level?: Maybe<Scalars["JSON"]>;
  damage_type?: Maybe<FilterFindManyAbilityScoreSkillsInput>;
};

export type FilterFindManySpellDcInput = {
  dc_success?: Maybe<Scalars["String"]>;
  dc_type?: Maybe<FilterFindManyAbilityScoreSkillsInput>;
  desc?: Maybe<Scalars["String"]>;
};

export type FilterFindManySpellInput = {
  _id?: Maybe<Scalars["String"]>;
  area_of_effect?: Maybe<FilterFindManySpellArea_Of_EffectInput>;
  attack_type?: Maybe<Scalars["String"]>;
  casting_time?: Maybe<Scalars["String"]>;
  classes?: Maybe<Array<Maybe<FilterFindManyAbilityScoreSkillsInput>>>;
  components?: Maybe<Array<Maybe<Scalars["String"]>>>;
  concentration?: Maybe<Scalars["Boolean"]>;
  damage?: Maybe<FilterFindManySpellDamageInput>;
  dc?: Maybe<FilterFindManySpellDcInput>;
  desc?: Maybe<Array<Maybe<Scalars["String"]>>>;
  duration?: Maybe<Scalars["String"]>;
  heal_at_slot_level?: Maybe<Scalars["JSON"]>;
  higher_level?: Maybe<Array<Maybe<Scalars["String"]>>>;
  index?: Maybe<Scalars["String"]>;
  level?: Maybe<Scalars["Float"]>;
  material?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  range?: Maybe<Scalars["String"]>;
  ritual?: Maybe<Scalars["Boolean"]>;
  school?: Maybe<FilterFindManyAbilityScoreSkillsInput>;
  subclasses?: Maybe<Array<Maybe<FilterFindManyAbilityScoreSkillsInput>>>;
  url?: Maybe<Scalars["String"]>;
  _operators?: Maybe<FilterFindManySpellOperatorsInput>;
  OR?: Maybe<Array<FilterFindManySpellInput>>;
  AND?: Maybe<Array<FilterFindManySpellInput>>;
};

export type FilterFindManySpellOperatorsInput = {
  _id?: Maybe<FilterFindManySpell_IdOperatorsInput>;
};

export type FilterFindManyStartingEquipment_IdOperatorsInput = {
  gt?: Maybe<Scalars["String"]>;
  gte?: Maybe<Scalars["String"]>;
  lt?: Maybe<Scalars["String"]>;
  lte?: Maybe<Scalars["String"]>;
  ne?: Maybe<Scalars["String"]>;
  in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["String"]>>>;
  regex?: Maybe<Scalars["RegExpAsString"]>;
  exists?: Maybe<Scalars["Boolean"]>;
};

export type FilterFindManyStartingEquipmentInput = {
  _id?: Maybe<Scalars["String"]>;
  class?: Maybe<FilterFindManyAbilityScoreSkillsInput>;
  index?: Maybe<Scalars["String"]>;
  starting_equipment?: Maybe<
    Array<Maybe<FilterFindManyStartingEquipmentStarting_EquipmentInput>>
  >;
  starting_equipment_options?: Maybe<
    Array<Maybe<FilterFindManyStartingEquipmentStarting_Equipment_OptionsInput>>
  >;
  url?: Maybe<Scalars["String"]>;
  _operators?: Maybe<FilterFindManyStartingEquipmentOperatorsInput>;
  OR?: Maybe<Array<FilterFindManyStartingEquipmentInput>>;
  AND?: Maybe<Array<FilterFindManyStartingEquipmentInput>>;
};

export type FilterFindManyStartingEquipmentOperatorsInput = {
  _id?: Maybe<FilterFindManyStartingEquipment_IdOperatorsInput>;
};

export type FilterFindManyStartingEquipmentStarting_Equipment_OptionsFromInput = {
  equipment?: Maybe<FilterFindManyAbilityScoreSkillsInput>;
  quantity?: Maybe<Scalars["Float"]>;
};

export type FilterFindManyStartingEquipmentStarting_Equipment_OptionsInput = {
  choose?: Maybe<Scalars["Float"]>;
  from?: Maybe<
    Array<
      Maybe<FilterFindManyStartingEquipmentStarting_Equipment_OptionsFromInput>
    >
  >;
  type?: Maybe<Scalars["String"]>;
};

export type FilterFindManyStartingEquipmentStarting_EquipmentInput = {
  equipment?: Maybe<FilterFindManyAbilityScoreSkillsInput>;
  quantity?: Maybe<Scalars["Float"]>;
};

export type FilterFindManySubclass_IdOperatorsInput = {
  gt?: Maybe<Scalars["String"]>;
  gte?: Maybe<Scalars["String"]>;
  lt?: Maybe<Scalars["String"]>;
  lte?: Maybe<Scalars["String"]>;
  ne?: Maybe<Scalars["String"]>;
  in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["String"]>>>;
  regex?: Maybe<Scalars["RegExpAsString"]>;
  exists?: Maybe<Scalars["Boolean"]>;
};

export type FilterFindManySubclassInput = {
  _id?: Maybe<Scalars["String"]>;
  class?: Maybe<FilterFindManyAbilityScoreSkillsInput>;
  desc?: Maybe<Array<Maybe<Scalars["String"]>>>;
  index?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  spells?: Maybe<Array<Maybe<FilterFindManySubclassSpellsInput>>>;
  subclass_flavor?: Maybe<Scalars["String"]>;
  subclass_levels?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
  _operators?: Maybe<FilterFindManySubclassOperatorsInput>;
  OR?: Maybe<Array<FilterFindManySubclassInput>>;
  AND?: Maybe<Array<FilterFindManySubclassInput>>;
};

export type FilterFindManySubclassOperatorsInput = {
  _id?: Maybe<FilterFindManySubclass_IdOperatorsInput>;
};

export type FilterFindManySubclassSpellsInput = {
  prerequisites?: Maybe<
    Array<Maybe<FilterFindManySubclassSpellsPrerequisitesInput>>
  >;
  spell?: Maybe<FilterFindManyAbilityScoreSkillsInput>;
};

export type FilterFindManySubclassSpellsPrerequisitesInput = {
  index?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
};

export type FilterFindManySubrace_IdOperatorsInput = {
  gt?: Maybe<Scalars["String"]>;
  gte?: Maybe<Scalars["String"]>;
  lt?: Maybe<Scalars["String"]>;
  lte?: Maybe<Scalars["String"]>;
  ne?: Maybe<Scalars["String"]>;
  in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["String"]>>>;
  regex?: Maybe<Scalars["RegExpAsString"]>;
  exists?: Maybe<Scalars["Boolean"]>;
};

export type FilterFindManySubraceAbility_BonusesInput = {
  ability_score?: Maybe<FilterFindManyAbilityScoreSkillsInput>;
  bonus?: Maybe<Scalars["Float"]>;
};

export type FilterFindManySubraceInput = {
  _id?: Maybe<Scalars["String"]>;
  ability_bonuses?: Maybe<
    Array<Maybe<FilterFindManySubraceAbility_BonusesInput>>
  >;
  desc?: Maybe<Scalars["String"]>;
  index?: Maybe<Scalars["String"]>;
  language_options?: Maybe<FilterFindManySubraceLanguage_OptionsInput>;
  name?: Maybe<Scalars["String"]>;
  race?: Maybe<FilterFindManyAbilityScoreSkillsInput>;
  racial_trait_options?: Maybe<FilterFindManySubraceRacial_Trait_OptionsInput>;
  racial_traits?: Maybe<Array<Maybe<FilterFindManyAbilityScoreSkillsInput>>>;
  starting_proficiencies?: Maybe<
    Array<Maybe<FilterFindManyAbilityScoreSkillsInput>>
  >;
  url?: Maybe<Scalars["String"]>;
  _operators?: Maybe<FilterFindManySubraceOperatorsInput>;
  OR?: Maybe<Array<FilterFindManySubraceInput>>;
  AND?: Maybe<Array<FilterFindManySubraceInput>>;
};

export type FilterFindManySubraceLanguage_OptionsInput = {
  choose?: Maybe<Scalars["Float"]>;
  from?: Maybe<Array<Maybe<FilterFindManyAbilityScoreSkillsInput>>>;
  type?: Maybe<Scalars["String"]>;
};

export type FilterFindManySubraceOperatorsInput = {
  _id?: Maybe<FilterFindManySubrace_IdOperatorsInput>;
};

export type FilterFindManySubraceRacial_Trait_OptionsInput = {
  choose?: Maybe<Scalars["Float"]>;
  from?: Maybe<Array<Maybe<FilterFindManyAbilityScoreSkillsInput>>>;
  type?: Maybe<Scalars["String"]>;
};

export type FilterFindManyTrait_IdOperatorsInput = {
  gt?: Maybe<Scalars["String"]>;
  gte?: Maybe<Scalars["String"]>;
  lt?: Maybe<Scalars["String"]>;
  lte?: Maybe<Scalars["String"]>;
  ne?: Maybe<Scalars["String"]>;
  in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["String"]>>>;
  regex?: Maybe<Scalars["RegExpAsString"]>;
  exists?: Maybe<Scalars["Boolean"]>;
};

export type FilterFindManyTraitInput = {
  _id?: Maybe<Scalars["String"]>;
  desc?: Maybe<Array<Maybe<Scalars["String"]>>>;
  index?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  proficiencies?: Maybe<Array<Maybe<FilterFindManyTraitProficienciesInput>>>;
  proficiency_choices?: Maybe<FilterFindManyTraitProficiency_ChoicesInput>;
  races?: Maybe<Array<Maybe<FilterFindManyAbilityScoreSkillsInput>>>;
  subraces?: Maybe<Array<Maybe<FilterFindManyAbilityScoreSkillsInput>>>;
  url?: Maybe<Scalars["String"]>;
  _operators?: Maybe<FilterFindManyTraitOperatorsInput>;
  OR?: Maybe<Array<FilterFindManyTraitInput>>;
  AND?: Maybe<Array<FilterFindManyTraitInput>>;
};

export type FilterFindManyTraitOperatorsInput = {
  _id?: Maybe<FilterFindManyTrait_IdOperatorsInput>;
};

export type FilterFindManyTraitProficienciesInput = {
  index?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
};

export type FilterFindManyTraitProficiency_ChoicesInput = {
  choose?: Maybe<Scalars["Float"]>;
  from?: Maybe<Array<Maybe<FilterFindManyAbilityScoreSkillsInput>>>;
  type?: Maybe<Scalars["String"]>;
};

export type FilterFindManyWeaponProperty_IdOperatorsInput = {
  gt?: Maybe<Scalars["String"]>;
  gte?: Maybe<Scalars["String"]>;
  lt?: Maybe<Scalars["String"]>;
  lte?: Maybe<Scalars["String"]>;
  ne?: Maybe<Scalars["String"]>;
  in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["String"]>>>;
  regex?: Maybe<Scalars["RegExpAsString"]>;
  exists?: Maybe<Scalars["Boolean"]>;
};

export type FilterFindManyWeaponPropertyInput = {
  _id?: Maybe<Scalars["String"]>;
  desc?: Maybe<Array<Maybe<Scalars["String"]>>>;
  index?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
  _operators?: Maybe<FilterFindManyWeaponPropertyOperatorsInput>;
  OR?: Maybe<Array<FilterFindManyWeaponPropertyInput>>;
  AND?: Maybe<Array<FilterFindManyWeaponPropertyInput>>;
};

export type FilterFindManyWeaponPropertyOperatorsInput = {
  _id?: Maybe<FilterFindManyWeaponProperty_IdOperatorsInput>;
};

export type FilterFindOneAbilityScore_IdOperatorsInput = {
  gt?: Maybe<Scalars["String"]>;
  gte?: Maybe<Scalars["String"]>;
  lt?: Maybe<Scalars["String"]>;
  lte?: Maybe<Scalars["String"]>;
  ne?: Maybe<Scalars["String"]>;
  in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["String"]>>>;
  regex?: Maybe<Scalars["RegExpAsString"]>;
  exists?: Maybe<Scalars["Boolean"]>;
};

export type FilterFindOneAbilityScoreInput = {
  _id?: Maybe<Scalars["String"]>;
  desc?: Maybe<Array<Maybe<Scalars["String"]>>>;
  full_name?: Maybe<Scalars["String"]>;
  index?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  skills?: Maybe<Array<Maybe<FilterFindOneAbilityScoreSkillsInput>>>;
  url?: Maybe<Scalars["String"]>;
  _operators?: Maybe<FilterFindOneAbilityScoreOperatorsInput>;
  OR?: Maybe<Array<FilterFindOneAbilityScoreInput>>;
  AND?: Maybe<Array<FilterFindOneAbilityScoreInput>>;
};

export type FilterFindOneAbilityScoreOperatorsInput = {
  _id?: Maybe<FilterFindOneAbilityScore_IdOperatorsInput>;
};

export type FilterFindOneAbilityScoreSkillsInput = {
  index?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
};

export type FilterFindOneAlignment_IdOperatorsInput = {
  gt?: Maybe<Scalars["String"]>;
  gte?: Maybe<Scalars["String"]>;
  lt?: Maybe<Scalars["String"]>;
  lte?: Maybe<Scalars["String"]>;
  ne?: Maybe<Scalars["String"]>;
  in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["String"]>>>;
  regex?: Maybe<Scalars["RegExpAsString"]>;
  exists?: Maybe<Scalars["Boolean"]>;
};

export type FilterFindOneAlignmentInput = {
  _id?: Maybe<Scalars["String"]>;
  desc?: Maybe<Scalars["String"]>;
  abbreviation?: Maybe<Scalars["String"]>;
  index?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
  _operators?: Maybe<FilterFindOneAlignmentOperatorsInput>;
  OR?: Maybe<Array<FilterFindOneAlignmentInput>>;
  AND?: Maybe<Array<FilterFindOneAlignmentInput>>;
};

export type FilterFindOneAlignmentOperatorsInput = {
  _id?: Maybe<FilterFindOneAlignment_IdOperatorsInput>;
};

export type FilterFindOneBackground_IdOperatorsInput = {
  gt?: Maybe<Scalars["String"]>;
  gte?: Maybe<Scalars["String"]>;
  lt?: Maybe<Scalars["String"]>;
  lte?: Maybe<Scalars["String"]>;
  ne?: Maybe<Scalars["String"]>;
  in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["String"]>>>;
  regex?: Maybe<Scalars["RegExpAsString"]>;
  exists?: Maybe<Scalars["Boolean"]>;
};

export type FilterFindOneBackgroundFeatureInput = {
  name?: Maybe<Scalars["String"]>;
  desc?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

export type FilterFindOneBackgroundIdealsFromInput = {
  desc?: Maybe<Scalars["String"]>;
  alignments?: Maybe<Array<Maybe<FilterFindOneAbilityScoreSkillsInput>>>;
};

export type FilterFindOneBackgroundIdealsInput = {
  choose?: Maybe<Scalars["Float"]>;
  from?: Maybe<Array<Maybe<FilterFindOneBackgroundIdealsFromInput>>>;
  type?: Maybe<Scalars["String"]>;
};

export type FilterFindOneBackgroundInput = {
  _id?: Maybe<Scalars["String"]>;
  index?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  starting_proficiencies?: Maybe<
    Array<Maybe<FilterFindOneAbilityScoreSkillsInput>>
  >;
  language_options?: Maybe<FilterFindOneBackgroundLanguage_OptionsInput>;
  url?: Maybe<Scalars["String"]>;
  starting_equipment?: Maybe<
    Array<Maybe<FilterFindOneBackgroundStarting_EquipmentInput>>
  >;
  starting_equipment_options?: Maybe<
    Array<Maybe<FilterFindOneBackgroundStarting_Equipment_OptionsInput>>
  >;
  feature?: Maybe<FilterFindOneBackgroundFeatureInput>;
  personality_traits?: Maybe<FilterFindOneBackgroundPersonality_TraitsInput>;
  ideals?: Maybe<FilterFindOneBackgroundIdealsInput>;
  bonds?: Maybe<FilterFindOneBackgroundPersonality_TraitsInput>;
  flaws?: Maybe<FilterFindOneBackgroundPersonality_TraitsInput>;
  _operators?: Maybe<FilterFindOneBackgroundOperatorsInput>;
  OR?: Maybe<Array<FilterFindOneBackgroundInput>>;
  AND?: Maybe<Array<FilterFindOneBackgroundInput>>;
};

export type FilterFindOneBackgroundLanguage_OptionsInput = {
  choose?: Maybe<Scalars["Float"]>;
  from?: Maybe<Array<Maybe<FilterFindOneAbilityScoreSkillsInput>>>;
  type?: Maybe<Scalars["String"]>;
};

export type FilterFindOneBackgroundOperatorsInput = {
  _id?: Maybe<FilterFindOneBackground_IdOperatorsInput>;
};

export type FilterFindOneBackgroundPersonality_TraitsInput = {
  choose?: Maybe<Scalars["Float"]>;
  from?: Maybe<Array<Maybe<Scalars["String"]>>>;
  type?: Maybe<Scalars["String"]>;
};

export type FilterFindOneBackgroundStarting_Equipment_OptionsFromInput = {
  equipment?: Maybe<FilterFindOneAbilityScoreSkillsInput>;
  quantity?: Maybe<Scalars["Float"]>;
};

export type FilterFindOneBackgroundStarting_Equipment_OptionsInput = {
  choose?: Maybe<Scalars["Float"]>;
  from?: Maybe<
    Array<Maybe<FilterFindOneBackgroundStarting_Equipment_OptionsFromInput>>
  >;
  type?: Maybe<Scalars["String"]>;
};

export type FilterFindOneBackgroundStarting_EquipmentInput = {
  equipment?: Maybe<FilterFindOneAbilityScoreSkillsInput>;
  quantity?: Maybe<Scalars["Float"]>;
};

export type FilterFindOneClass_IdOperatorsInput = {
  gt?: Maybe<Scalars["String"]>;
  gte?: Maybe<Scalars["String"]>;
  lt?: Maybe<Scalars["String"]>;
  lte?: Maybe<Scalars["String"]>;
  ne?: Maybe<Scalars["String"]>;
  in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["String"]>>>;
  regex?: Maybe<Scalars["RegExpAsString"]>;
  exists?: Maybe<Scalars["Boolean"]>;
};

export type FilterFindOneClassInput = {
  _id?: Maybe<Scalars["String"]>;
  class_levels?: Maybe<Scalars["String"]>;
  hit_die?: Maybe<Scalars["Float"]>;
  index?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  proficiencies?: Maybe<Array<Maybe<FilterFindOneAbilityScoreSkillsInput>>>;
  proficiency_choices?: Maybe<
    Array<Maybe<FilterFindOneClassProficiency_ChoicesInput>>
  >;
  saving_throws?: Maybe<Array<Maybe<FilterFindOneAbilityScoreSkillsInput>>>;
  spellcasting?: Maybe<FilterFindOneClassSpellcastingInput>;
  spells?: Maybe<Scalars["String"]>;
  starting_equipment?: Maybe<
    Array<Maybe<FilterFindOneClassStarting_EquipmentInput>>
  >;
  starting_equipment_options?: Maybe<
    Array<Maybe<FilterFindOneClassStarting_Equipment_OptionsInput>>
  >;
  subclasses?: Maybe<Array<Maybe<FilterFindOneAbilityScoreSkillsInput>>>;
  url?: Maybe<Scalars["String"]>;
  _operators?: Maybe<FilterFindOneClassOperatorsInput>;
  OR?: Maybe<Array<FilterFindOneClassInput>>;
  AND?: Maybe<Array<FilterFindOneClassInput>>;
};

export type FilterFindOneClassOperatorsInput = {
  _id?: Maybe<FilterFindOneClass_IdOperatorsInput>;
};

export type FilterFindOneClassProficiency_ChoicesInput = {
  choose?: Maybe<Scalars["Float"]>;
  from?: Maybe<Array<Maybe<FilterFindOneAbilityScoreSkillsInput>>>;
  type?: Maybe<Scalars["String"]>;
};

export type FilterFindOneClassSpellcastingInfoInput = {
  desc?: Maybe<Array<Maybe<Scalars["String"]>>>;
  name?: Maybe<Scalars["String"]>;
};

export type FilterFindOneClassSpellcastingInput = {
  info?: Maybe<Array<Maybe<FilterFindOneClassSpellcastingInfoInput>>>;
  level?: Maybe<Scalars["Float"]>;
  spellcasting_ability?: Maybe<FilterFindOneAbilityScoreSkillsInput>;
};

export type FilterFindOneClassStarting_Equipment_OptionsFromInput = {
  equipment?: Maybe<FilterFindOneAbilityScoreSkillsInput>;
  quantity?: Maybe<Scalars["Float"]>;
};

export type FilterFindOneClassStarting_Equipment_OptionsInput = {
  choose?: Maybe<Scalars["Float"]>;
  from?: Maybe<
    Array<Maybe<FilterFindOneClassStarting_Equipment_OptionsFromInput>>
  >;
  type?: Maybe<Scalars["String"]>;
};

export type FilterFindOneClassStarting_EquipmentInput = {
  equipment?: Maybe<FilterFindOneAbilityScoreSkillsInput>;
  quantity?: Maybe<Scalars["Float"]>;
};

export type FilterFindOneCondition_IdOperatorsInput = {
  gt?: Maybe<Scalars["String"]>;
  gte?: Maybe<Scalars["String"]>;
  lt?: Maybe<Scalars["String"]>;
  lte?: Maybe<Scalars["String"]>;
  ne?: Maybe<Scalars["String"]>;
  in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["String"]>>>;
  regex?: Maybe<Scalars["RegExpAsString"]>;
  exists?: Maybe<Scalars["Boolean"]>;
};

export type FilterFindOneConditionInput = {
  _id?: Maybe<Scalars["String"]>;
  desc?: Maybe<Array<Maybe<Scalars["String"]>>>;
  index?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
  _operators?: Maybe<FilterFindOneConditionOperatorsInput>;
  OR?: Maybe<Array<FilterFindOneConditionInput>>;
  AND?: Maybe<Array<FilterFindOneConditionInput>>;
};

export type FilterFindOneConditionOperatorsInput = {
  _id?: Maybe<FilterFindOneCondition_IdOperatorsInput>;
};

export type FilterFindOneDamageType_IdOperatorsInput = {
  gt?: Maybe<Scalars["String"]>;
  gte?: Maybe<Scalars["String"]>;
  lt?: Maybe<Scalars["String"]>;
  lte?: Maybe<Scalars["String"]>;
  ne?: Maybe<Scalars["String"]>;
  in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["String"]>>>;
  regex?: Maybe<Scalars["RegExpAsString"]>;
  exists?: Maybe<Scalars["Boolean"]>;
};

export type FilterFindOneDamageTypeInput = {
  _id?: Maybe<Scalars["String"]>;
  desc?: Maybe<Array<Maybe<Scalars["String"]>>>;
  index?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
  _operators?: Maybe<FilterFindOneDamageTypeOperatorsInput>;
  OR?: Maybe<Array<FilterFindOneDamageTypeInput>>;
  AND?: Maybe<Array<FilterFindOneDamageTypeInput>>;
};

export type FilterFindOneDamageTypeOperatorsInput = {
  _id?: Maybe<FilterFindOneDamageType_IdOperatorsInput>;
};

export type FilterFindOneEquipment_IdOperatorsInput = {
  gt?: Maybe<Scalars["String"]>;
  gte?: Maybe<Scalars["String"]>;
  lt?: Maybe<Scalars["String"]>;
  lte?: Maybe<Scalars["String"]>;
  ne?: Maybe<Scalars["String"]>;
  in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["String"]>>>;
  regex?: Maybe<Scalars["RegExpAsString"]>;
  exists?: Maybe<Scalars["Boolean"]>;
};

export type FilterFindOneEquipmentArmor_ClassInput = {
  base?: Maybe<Scalars["Float"]>;
  dex_bonus?: Maybe<Scalars["Boolean"]>;
  max_bonus?: Maybe<Scalars["Float"]>;
};

export type FilterFindOneEquipmentCategory_IdOperatorsInput = {
  gt?: Maybe<Scalars["String"]>;
  gte?: Maybe<Scalars["String"]>;
  lt?: Maybe<Scalars["String"]>;
  lte?: Maybe<Scalars["String"]>;
  ne?: Maybe<Scalars["String"]>;
  in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["String"]>>>;
  regex?: Maybe<Scalars["RegExpAsString"]>;
  exists?: Maybe<Scalars["Boolean"]>;
};

export type FilterFindOneEquipmentCategoryInput = {
  _id?: Maybe<Scalars["String"]>;
  equipment?: Maybe<Array<Maybe<FilterFindOneAbilityScoreSkillsInput>>>;
  index?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
  _operators?: Maybe<FilterFindOneEquipmentCategoryOperatorsInput>;
  OR?: Maybe<Array<FilterFindOneEquipmentCategoryInput>>;
  AND?: Maybe<Array<FilterFindOneEquipmentCategoryInput>>;
};

export type FilterFindOneEquipmentCategoryOperatorsInput = {
  _id?: Maybe<FilterFindOneEquipmentCategory_IdOperatorsInput>;
};

export type FilterFindOneEquipmentContentsInput = {
  item?: Maybe<FilterFindOneAbilityScoreSkillsInput>;
  quantity?: Maybe<Scalars["Float"]>;
};

export type FilterFindOneEquipmentCostInput = {
  quantity?: Maybe<Scalars["Float"]>;
  unit?: Maybe<Scalars["String"]>;
};

export type FilterFindOneEquipmentDamageInput = {
  damage_dice?: Maybe<Scalars["String"]>;
  damage_type?: Maybe<FilterFindOneAbilityScoreSkillsInput>;
};

export type FilterFindOneEquipmentInput = {
  _id?: Maybe<Scalars["String"]>;
  armor_category?: Maybe<Scalars["String"]>;
  armor_class?: Maybe<FilterFindOneEquipmentArmor_ClassInput>;
  capacity?: Maybe<Scalars["String"]>;
  category_range?: Maybe<Scalars["String"]>;
  contents?: Maybe<Array<Maybe<FilterFindOneEquipmentContentsInput>>>;
  cost?: Maybe<FilterFindOneEquipmentCostInput>;
  damage?: Maybe<FilterFindOneEquipmentDamageInput>;
  desc?: Maybe<Array<Maybe<Scalars["String"]>>>;
  equipment_category?: Maybe<FilterFindOneAbilityScoreSkillsInput>;
  gear_category?: Maybe<FilterFindOneAbilityScoreSkillsInput>;
  index?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  properties?: Maybe<Array<Maybe<FilterFindOneAbilityScoreSkillsInput>>>;
  quantity?: Maybe<Scalars["Float"]>;
  range?: Maybe<FilterFindOneEquipmentRangeInput>;
  special?: Maybe<Array<Maybe<Scalars["String"]>>>;
  speed?: Maybe<FilterFindOneEquipmentSpeedInput>;
  stealth_disadvantage?: Maybe<Scalars["Boolean"]>;
  str_minimum?: Maybe<Scalars["Float"]>;
  throw_range?: Maybe<FilterFindOneEquipmentThrow_RangeInput>;
  tool_category?: Maybe<Scalars["String"]>;
  two_handed_damage?: Maybe<FilterFindOneEquipmentTwo_Handed_DamageInput>;
  url?: Maybe<Scalars["String"]>;
  vehicle_category?: Maybe<Scalars["String"]>;
  weapon_category?: Maybe<Scalars["String"]>;
  weapon_range?: Maybe<Scalars["String"]>;
  weight?: Maybe<Scalars["Float"]>;
  _operators?: Maybe<FilterFindOneEquipmentOperatorsInput>;
  OR?: Maybe<Array<FilterFindOneEquipmentInput>>;
  AND?: Maybe<Array<FilterFindOneEquipmentInput>>;
};

export type FilterFindOneEquipmentOperatorsInput = {
  _id?: Maybe<FilterFindOneEquipment_IdOperatorsInput>;
};

export type FilterFindOneEquipmentRangeInput = {
  long?: Maybe<Scalars["Float"]>;
  normal?: Maybe<Scalars["Float"]>;
};

export type FilterFindOneEquipmentSpeedInput = {
  quantity?: Maybe<Scalars["Float"]>;
  unit?: Maybe<Scalars["String"]>;
};

export type FilterFindOneEquipmentThrow_RangeInput = {
  long?: Maybe<Scalars["Float"]>;
  normal?: Maybe<Scalars["Float"]>;
};

export type FilterFindOneEquipmentTwo_Handed_DamageInput = {
  damage_dice?: Maybe<Scalars["String"]>;
  damage_type?: Maybe<FilterFindOneAbilityScoreSkillsInput>;
};

export type FilterFindOneFeature_IdOperatorsInput = {
  gt?: Maybe<Scalars["String"]>;
  gte?: Maybe<Scalars["String"]>;
  lt?: Maybe<Scalars["String"]>;
  lte?: Maybe<Scalars["String"]>;
  ne?: Maybe<Scalars["String"]>;
  in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["String"]>>>;
  regex?: Maybe<Scalars["RegExpAsString"]>;
  exists?: Maybe<Scalars["Boolean"]>;
};

export type FilterFindOneFeatureChoiceInput = {
  choose?: Maybe<Scalars["Float"]>;
  from?: Maybe<Array<Maybe<FilterFindOneAbilityScoreSkillsInput>>>;
  type?: Maybe<Scalars["String"]>;
};

export type FilterFindOneFeatureInput = {
  _id?: Maybe<Scalars["String"]>;
  choice?: Maybe<FilterFindOneFeatureChoiceInput>;
  class?: Maybe<FilterFindOneAbilityScoreSkillsInput>;
  desc?: Maybe<Array<Maybe<Scalars["String"]>>>;
  group?: Maybe<Scalars["String"]>;
  index?: Maybe<Scalars["String"]>;
  level?: Maybe<Scalars["Float"]>;
  name?: Maybe<Scalars["String"]>;
  prerequisites?: Maybe<Array<Maybe<FilterFindOneFeaturePrerequisitesInput>>>;
  reference?: Maybe<Scalars["String"]>;
  subclass?: Maybe<FilterFindOneAbilityScoreSkillsInput>;
  url?: Maybe<Scalars["String"]>;
  _operators?: Maybe<FilterFindOneFeatureOperatorsInput>;
  OR?: Maybe<Array<FilterFindOneFeatureInput>>;
  AND?: Maybe<Array<FilterFindOneFeatureInput>>;
};

export type FilterFindOneFeatureOperatorsInput = {
  _id?: Maybe<FilterFindOneFeature_IdOperatorsInput>;
};

export type FilterFindOneFeaturePrerequisitesInput = {
  level?: Maybe<Scalars["Float"]>;
  type?: Maybe<Scalars["String"]>;
};

export type FilterFindOneLanguage_IdOperatorsInput = {
  gt?: Maybe<Scalars["String"]>;
  gte?: Maybe<Scalars["String"]>;
  lt?: Maybe<Scalars["String"]>;
  lte?: Maybe<Scalars["String"]>;
  ne?: Maybe<Scalars["String"]>;
  in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["String"]>>>;
  regex?: Maybe<Scalars["RegExpAsString"]>;
  exists?: Maybe<Scalars["Boolean"]>;
};

export type FilterFindOneLanguageInput = {
  _id?: Maybe<Scalars["String"]>;
  desc?: Maybe<Scalars["String"]>;
  index?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  script?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  typical_speakers?: Maybe<Array<Maybe<Scalars["String"]>>>;
  url?: Maybe<Scalars["String"]>;
  _operators?: Maybe<FilterFindOneLanguageOperatorsInput>;
  OR?: Maybe<Array<FilterFindOneLanguageInput>>;
  AND?: Maybe<Array<FilterFindOneLanguageInput>>;
};

export type FilterFindOneLanguageOperatorsInput = {
  _id?: Maybe<FilterFindOneLanguage_IdOperatorsInput>;
};

export type FilterFindOneLevel_IdOperatorsInput = {
  gt?: Maybe<Scalars["String"]>;
  gte?: Maybe<Scalars["String"]>;
  lt?: Maybe<Scalars["String"]>;
  lte?: Maybe<Scalars["String"]>;
  ne?: Maybe<Scalars["String"]>;
  in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["String"]>>>;
  regex?: Maybe<Scalars["RegExpAsString"]>;
  exists?: Maybe<Scalars["Boolean"]>;
};

export type FilterFindOneLevelClass_SpecificCreating_Spell_SlotsInput = {
  sorcery_point_cost?: Maybe<Scalars["Float"]>;
  spell_slot_level?: Maybe<Scalars["Float"]>;
};

export type FilterFindOneLevelClass_SpecificInput = {
  action_surges?: Maybe<Scalars["Float"]>;
  arcane_recovery_levels?: Maybe<Scalars["Float"]>;
  aura_range?: Maybe<Scalars["Float"]>;
  bardic_inspiration_die?: Maybe<Scalars["Float"]>;
  brutal_critical_dice?: Maybe<Scalars["Float"]>;
  channel_divinity_charges?: Maybe<Scalars["Float"]>;
  creating_spell_slots?: Maybe<
    Array<Maybe<FilterFindOneLevelClass_SpecificCreating_Spell_SlotsInput>>
  >;
  destroy_undead_cr?: Maybe<Scalars["Float"]>;
  extra_attacks?: Maybe<Scalars["Float"]>;
  favored_enemies?: Maybe<Scalars["Float"]>;
  favored_terrain?: Maybe<Scalars["Float"]>;
  indomitable_uses?: Maybe<Scalars["Float"]>;
  invocations_known?: Maybe<Scalars["Float"]>;
  ki_points?: Maybe<Scalars["Float"]>;
  magical_secrets_max_5?: Maybe<Scalars["Float"]>;
  magical_secrets_max_7?: Maybe<Scalars["Float"]>;
  magical_secrets_max_9?: Maybe<Scalars["Float"]>;
  martial_arts?: Maybe<FilterFindOneLevelClass_SpecificMartial_ArtsInput>;
  metamagic_known?: Maybe<Scalars["Float"]>;
  mystic_arcanum_level_6?: Maybe<Scalars["Float"]>;
  mystic_arcanum_level_7?: Maybe<Scalars["Float"]>;
  mystic_arcanum_level_8?: Maybe<Scalars["Float"]>;
  mystic_arcanum_level_9?: Maybe<Scalars["Float"]>;
  rage_count?: Maybe<Scalars["Float"]>;
  rage_damage_bonus?: Maybe<Scalars["Float"]>;
  sneak_attack?: Maybe<FilterFindOneLevelClass_SpecificSneak_AttackInput>;
  song_of_rest_die?: Maybe<Scalars["Float"]>;
  sorcery_points?: Maybe<Scalars["Float"]>;
  unarmored_movement?: Maybe<Scalars["Float"]>;
  wild_shape_fly?: Maybe<Scalars["Boolean"]>;
  wild_shape_max_cr?: Maybe<Scalars["Float"]>;
  wild_shape_swim?: Maybe<Scalars["Boolean"]>;
};

export type FilterFindOneLevelClass_SpecificMartial_ArtsInput = {
  dice_count?: Maybe<Scalars["Float"]>;
  dice_value?: Maybe<Scalars["Float"]>;
};

export type FilterFindOneLevelClass_SpecificSneak_AttackInput = {
  dice_count?: Maybe<Scalars["Float"]>;
  dice_value?: Maybe<Scalars["Float"]>;
};

export type FilterFindOneLevelInput = {
  _id?: Maybe<Scalars["String"]>;
  ability_score_bonuses?: Maybe<Scalars["Float"]>;
  class?: Maybe<FilterFindOneAbilityScoreSkillsInput>;
  class_specific?: Maybe<FilterFindOneLevelClass_SpecificInput>;
  feature_choices?: Maybe<Array<Maybe<FilterFindOneAbilityScoreSkillsInput>>>;
  features?: Maybe<Array<Maybe<FilterFindOneAbilityScoreSkillsInput>>>;
  index?: Maybe<Scalars["String"]>;
  level?: Maybe<Scalars["Float"]>;
  prof_bonus?: Maybe<Scalars["Float"]>;
  spellcasting?: Maybe<FilterFindOneLevelSpellcastingInput>;
  subclass?: Maybe<FilterFindOneAbilityScoreSkillsInput>;
  subclass_specific?: Maybe<FilterFindOneLevelSubclass_SpecificInput>;
  url?: Maybe<Scalars["String"]>;
  _operators?: Maybe<FilterFindOneLevelOperatorsInput>;
  OR?: Maybe<Array<FilterFindOneLevelInput>>;
  AND?: Maybe<Array<FilterFindOneLevelInput>>;
};

export type FilterFindOneLevelOperatorsInput = {
  _id?: Maybe<FilterFindOneLevel_IdOperatorsInput>;
};

export type FilterFindOneLevelSpellcastingInput = {
  cantrips_known?: Maybe<Scalars["Float"]>;
  spell_slots_level_1?: Maybe<Scalars["Float"]>;
  spell_slots_level_2?: Maybe<Scalars["Float"]>;
  spell_slots_level_3?: Maybe<Scalars["Float"]>;
  spell_slots_level_4?: Maybe<Scalars["Float"]>;
  spell_slots_level_5?: Maybe<Scalars["Float"]>;
  spell_slots_level_6?: Maybe<Scalars["Float"]>;
  spell_slots_level_7?: Maybe<Scalars["Float"]>;
  spell_slots_level_8?: Maybe<Scalars["Float"]>;
  spell_slots_level_9?: Maybe<Scalars["Float"]>;
  spells_known?: Maybe<Scalars["Float"]>;
};

export type FilterFindOneLevelSubclass_SpecificInput = {
  additional_magical_secrets_max_lvl?: Maybe<Scalars["Float"]>;
  aura_range?: Maybe<Scalars["Float"]>;
};

export type FilterFindOneMagicItem_IdOperatorsInput = {
  gt?: Maybe<Scalars["String"]>;
  gte?: Maybe<Scalars["String"]>;
  lt?: Maybe<Scalars["String"]>;
  lte?: Maybe<Scalars["String"]>;
  ne?: Maybe<Scalars["String"]>;
  in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["String"]>>>;
  regex?: Maybe<Scalars["RegExpAsString"]>;
  exists?: Maybe<Scalars["Boolean"]>;
};

export type FilterFindOneMagicItemInput = {
  _id?: Maybe<Scalars["String"]>;
  desc?: Maybe<Array<Maybe<Scalars["String"]>>>;
  equipment_category?: Maybe<FilterFindOneAbilityScoreSkillsInput>;
  index?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
  _operators?: Maybe<FilterFindOneMagicItemOperatorsInput>;
  OR?: Maybe<Array<FilterFindOneMagicItemInput>>;
  AND?: Maybe<Array<FilterFindOneMagicItemInput>>;
};

export type FilterFindOneMagicItemOperatorsInput = {
  _id?: Maybe<FilterFindOneMagicItem_IdOperatorsInput>;
};

export type FilterFindOneMagicSchool_IdOperatorsInput = {
  gt?: Maybe<Scalars["String"]>;
  gte?: Maybe<Scalars["String"]>;
  lt?: Maybe<Scalars["String"]>;
  lte?: Maybe<Scalars["String"]>;
  ne?: Maybe<Scalars["String"]>;
  in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["String"]>>>;
  regex?: Maybe<Scalars["RegExpAsString"]>;
  exists?: Maybe<Scalars["Boolean"]>;
};

export type FilterFindOneMagicSchoolInput = {
  _id?: Maybe<Scalars["String"]>;
  desc?: Maybe<Scalars["String"]>;
  index?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
  _operators?: Maybe<FilterFindOneMagicSchoolOperatorsInput>;
  OR?: Maybe<Array<FilterFindOneMagicSchoolInput>>;
  AND?: Maybe<Array<FilterFindOneMagicSchoolInput>>;
};

export type FilterFindOneMagicSchoolOperatorsInput = {
  _id?: Maybe<FilterFindOneMagicSchool_IdOperatorsInput>;
};

export type FilterFindOneMonster_IdOperatorsInput = {
  gt?: Maybe<Scalars["String"]>;
  gte?: Maybe<Scalars["String"]>;
  lt?: Maybe<Scalars["String"]>;
  lte?: Maybe<Scalars["String"]>;
  ne?: Maybe<Scalars["String"]>;
  in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["String"]>>>;
  regex?: Maybe<Scalars["RegExpAsString"]>;
  exists?: Maybe<Scalars["Boolean"]>;
};

export type FilterFindOneMonsterActionsDamageInput = {
  damage_dice?: Maybe<Scalars["String"]>;
  damage_type?: Maybe<FilterFindOneAbilityScoreSkillsInput>;
};

export type FilterFindOneMonsterActionsInput = {
  attack_bonus?: Maybe<Scalars["Float"]>;
  damage?: Maybe<Array<Maybe<FilterFindOneMonsterActionsDamageInput>>>;
  desc?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
};

export type FilterFindOneMonsterInput = {
  _id?: Maybe<Scalars["String"]>;
  actions?: Maybe<Array<Maybe<FilterFindOneMonsterActionsInput>>>;
  alignment?: Maybe<Scalars["String"]>;
  armor_class?: Maybe<Scalars["Float"]>;
  challenge_rating?: Maybe<Scalars["Float"]>;
  charisma?: Maybe<Scalars["Float"]>;
  condition_immunities?: Maybe<
    Array<Maybe<FilterFindOneAbilityScoreSkillsInput>>
  >;
  constitution?: Maybe<Scalars["Float"]>;
  damage_immunities?: Maybe<Array<Maybe<Scalars["String"]>>>;
  damage_resistances?: Maybe<Array<Maybe<Scalars["String"]>>>;
  damage_vulnerabilities?: Maybe<Array<Maybe<Scalars["String"]>>>;
  dexterity?: Maybe<Scalars["Float"]>;
  forms?: Maybe<Array<Maybe<FilterFindOneAbilityScoreSkillsInput>>>;
  hit_dice?: Maybe<Scalars["String"]>;
  hit_points?: Maybe<Scalars["Float"]>;
  index?: Maybe<Scalars["String"]>;
  intelligence?: Maybe<Scalars["Float"]>;
  languages?: Maybe<Scalars["String"]>;
  legendary_actions?: Maybe<
    Array<Maybe<FilterFindOneMonsterLegendary_ActionsInput>>
  >;
  name?: Maybe<Scalars["String"]>;
  proficiencies?: Maybe<Array<Maybe<FilterFindOneMonsterProficienciesInput>>>;
  reactions?: Maybe<Array<Maybe<FilterFindOneMonsterReactionsInput>>>;
  senses?: Maybe<FilterFindOneMonsterSensesInput>;
  size?: Maybe<Scalars["String"]>;
  special_abilities?: Maybe<
    Array<Maybe<FilterFindOneMonsterSpecial_AbilitiesInput>>
  >;
  speed?: Maybe<FilterFindOneMonsterSpeedInput>;
  strength?: Maybe<Scalars["Float"]>;
  subtype?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
  wisdom?: Maybe<Scalars["Float"]>;
  xp?: Maybe<Scalars["Float"]>;
  _operators?: Maybe<FilterFindOneMonsterOperatorsInput>;
  OR?: Maybe<Array<FilterFindOneMonsterInput>>;
  AND?: Maybe<Array<FilterFindOneMonsterInput>>;
};

export type FilterFindOneMonsterLegendary_ActionsInput = {
  attack_bonus?: Maybe<Scalars["Float"]>;
  desc?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
};

export type FilterFindOneMonsterOperatorsInput = {
  _id?: Maybe<FilterFindOneMonster_IdOperatorsInput>;
};

export type FilterFindOneMonsterProficienciesInput = {
  proficiency?: Maybe<FilterFindOneAbilityScoreSkillsInput>;
  value?: Maybe<Scalars["Float"]>;
};

export type FilterFindOneMonsterReactionsInput = {
  desc?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
};

export type FilterFindOneMonsterSensesInput = {
  blindsight?: Maybe<Scalars["String"]>;
  darkvision?: Maybe<Scalars["String"]>;
  passive_perception?: Maybe<Scalars["Float"]>;
  tremorsense?: Maybe<Scalars["String"]>;
  truesight?: Maybe<Scalars["String"]>;
};

export type FilterFindOneMonsterSpecial_AbilitiesInput = {
  desc?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
};

export type FilterFindOneMonsterSpeedInput = {
  burrow?: Maybe<Scalars["String"]>;
  climb?: Maybe<Scalars["String"]>;
  fly?: Maybe<Scalars["String"]>;
  hover?: Maybe<Scalars["Boolean"]>;
  swim?: Maybe<Scalars["String"]>;
  walk?: Maybe<Scalars["String"]>;
};

export type FilterFindOneProficiency_IdOperatorsInput = {
  gt?: Maybe<Scalars["String"]>;
  gte?: Maybe<Scalars["String"]>;
  lt?: Maybe<Scalars["String"]>;
  lte?: Maybe<Scalars["String"]>;
  ne?: Maybe<Scalars["String"]>;
  in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["String"]>>>;
  regex?: Maybe<Scalars["RegExpAsString"]>;
  exists?: Maybe<Scalars["Boolean"]>;
};

export type FilterFindOneProficiencyInput = {
  _id?: Maybe<Scalars["String"]>;
  classes?: Maybe<Array<Maybe<FilterFindOneAbilityScoreSkillsInput>>>;
  index?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  races?: Maybe<Array<Maybe<FilterFindOneAbilityScoreSkillsInput>>>;
  references?: Maybe<Array<Maybe<FilterFindOneProficiencyReferencesInput>>>;
  type?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
  _operators?: Maybe<FilterFindOneProficiencyOperatorsInput>;
  OR?: Maybe<Array<FilterFindOneProficiencyInput>>;
  AND?: Maybe<Array<FilterFindOneProficiencyInput>>;
};

export type FilterFindOneProficiencyOperatorsInput = {
  _id?: Maybe<FilterFindOneProficiency_IdOperatorsInput>;
};

export type FilterFindOneProficiencyReferencesInput = {
  index?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
};

export type FilterFindOneRace_IdOperatorsInput = {
  gt?: Maybe<Scalars["String"]>;
  gte?: Maybe<Scalars["String"]>;
  lt?: Maybe<Scalars["String"]>;
  lte?: Maybe<Scalars["String"]>;
  ne?: Maybe<Scalars["String"]>;
  in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["String"]>>>;
  regex?: Maybe<Scalars["RegExpAsString"]>;
  exists?: Maybe<Scalars["Boolean"]>;
};

export type FilterFindOneRaceAbility_Bonus_OptionsFromInput = {
  ability_score?: Maybe<FilterFindOneAbilityScoreSkillsInput>;
  bonus?: Maybe<Scalars["Float"]>;
};

export type FilterFindOneRaceAbility_Bonus_OptionsInput = {
  choose?: Maybe<Scalars["Float"]>;
  from?: Maybe<Array<Maybe<FilterFindOneRaceAbility_Bonus_OptionsFromInput>>>;
  type?: Maybe<Scalars["String"]>;
};

export type FilterFindOneRaceAbility_BonusesInput = {
  ability_score?: Maybe<FilterFindOneAbilityScoreSkillsInput>;
  bonus?: Maybe<Scalars["Float"]>;
};

export type FilterFindOneRaceInput = {
  _id?: Maybe<Scalars["String"]>;
  ability_bonus_options?: Maybe<FilterFindOneRaceAbility_Bonus_OptionsInput>;
  ability_bonuses?: Maybe<Array<Maybe<FilterFindOneRaceAbility_BonusesInput>>>;
  age?: Maybe<Scalars["String"]>;
  alignment?: Maybe<Scalars["String"]>;
  index?: Maybe<Scalars["String"]>;
  language_desc?: Maybe<Scalars["String"]>;
  language_options?: Maybe<FilterFindOneRaceLanguage_OptionsInput>;
  languages?: Maybe<Array<Maybe<FilterFindOneAbilityScoreSkillsInput>>>;
  name?: Maybe<Scalars["String"]>;
  size?: Maybe<Scalars["String"]>;
  size_description?: Maybe<Scalars["String"]>;
  speed?: Maybe<Scalars["Float"]>;
  starting_proficiencies?: Maybe<
    Array<Maybe<FilterFindOneAbilityScoreSkillsInput>>
  >;
  starting_proficiency_options?: Maybe<FilterFindOneRaceStarting_Proficiency_OptionsInput>;
  subraces?: Maybe<Array<Maybe<FilterFindOneAbilityScoreSkillsInput>>>;
  trait_options?: Maybe<FilterFindOneRaceTrait_OptionsInput>;
  traits?: Maybe<Array<Maybe<FilterFindOneAbilityScoreSkillsInput>>>;
  url?: Maybe<Scalars["String"]>;
  _operators?: Maybe<FilterFindOneRaceOperatorsInput>;
  OR?: Maybe<Array<FilterFindOneRaceInput>>;
  AND?: Maybe<Array<FilterFindOneRaceInput>>;
};

export type FilterFindOneRaceLanguage_OptionsInput = {
  choose?: Maybe<Scalars["Float"]>;
  from?: Maybe<Array<Maybe<FilterFindOneAbilityScoreSkillsInput>>>;
  type?: Maybe<Scalars["String"]>;
};

export type FilterFindOneRaceOperatorsInput = {
  _id?: Maybe<FilterFindOneRace_IdOperatorsInput>;
};

export type FilterFindOneRaceStarting_Proficiency_OptionsInput = {
  choose?: Maybe<Scalars["Float"]>;
  from?: Maybe<Array<Maybe<FilterFindOneAbilityScoreSkillsInput>>>;
  type?: Maybe<Scalars["String"]>;
};

export type FilterFindOneRaceTrait_OptionsInput = {
  choose?: Maybe<Scalars["Float"]>;
  from?: Maybe<Array<Maybe<FilterFindOneAbilityScoreSkillsInput>>>;
  type?: Maybe<Scalars["String"]>;
};

export type FilterFindOneRule_IdOperatorsInput = {
  gt?: Maybe<Scalars["String"]>;
  gte?: Maybe<Scalars["String"]>;
  lt?: Maybe<Scalars["String"]>;
  lte?: Maybe<Scalars["String"]>;
  ne?: Maybe<Scalars["String"]>;
  in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["String"]>>>;
  regex?: Maybe<Scalars["RegExpAsString"]>;
  exists?: Maybe<Scalars["Boolean"]>;
};

export type FilterFindOneRuleInput = {
  _id?: Maybe<Scalars["String"]>;
  desc?: Maybe<Scalars["String"]>;
  index?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  subsections?: Maybe<Array<Maybe<FilterFindOneAbilityScoreSkillsInput>>>;
  url?: Maybe<Scalars["String"]>;
  _operators?: Maybe<FilterFindOneRuleOperatorsInput>;
  OR?: Maybe<Array<FilterFindOneRuleInput>>;
  AND?: Maybe<Array<FilterFindOneRuleInput>>;
};

export type FilterFindOneRuleOperatorsInput = {
  _id?: Maybe<FilterFindOneRule_IdOperatorsInput>;
};

export type FilterFindOneRuleSection_IdOperatorsInput = {
  gt?: Maybe<Scalars["String"]>;
  gte?: Maybe<Scalars["String"]>;
  lt?: Maybe<Scalars["String"]>;
  lte?: Maybe<Scalars["String"]>;
  ne?: Maybe<Scalars["String"]>;
  in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["String"]>>>;
  regex?: Maybe<Scalars["RegExpAsString"]>;
  exists?: Maybe<Scalars["Boolean"]>;
};

export type FilterFindOneRuleSectionInput = {
  _id?: Maybe<Scalars["String"]>;
  desc?: Maybe<Scalars["String"]>;
  index?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
  _operators?: Maybe<FilterFindOneRuleSectionOperatorsInput>;
  OR?: Maybe<Array<FilterFindOneRuleSectionInput>>;
  AND?: Maybe<Array<FilterFindOneRuleSectionInput>>;
};

export type FilterFindOneRuleSectionOperatorsInput = {
  _id?: Maybe<FilterFindOneRuleSection_IdOperatorsInput>;
};

export type FilterFindOneSpell_IdOperatorsInput = {
  gt?: Maybe<Scalars["String"]>;
  gte?: Maybe<Scalars["String"]>;
  lt?: Maybe<Scalars["String"]>;
  lte?: Maybe<Scalars["String"]>;
  ne?: Maybe<Scalars["String"]>;
  in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["String"]>>>;
  regex?: Maybe<Scalars["RegExpAsString"]>;
  exists?: Maybe<Scalars["Boolean"]>;
};

export type FilterFindOneSpellArea_Of_EffectInput = {
  size?: Maybe<Scalars["Float"]>;
  type?: Maybe<Scalars["String"]>;
};

export type FilterFindOneSpellDamageInput = {
  damage_at_slot_level?: Maybe<Scalars["JSON"]>;
  damage_at_character_level?: Maybe<Scalars["JSON"]>;
  damage_type?: Maybe<FilterFindOneAbilityScoreSkillsInput>;
};

export type FilterFindOneSpellDcInput = {
  dc_success?: Maybe<Scalars["String"]>;
  dc_type?: Maybe<FilterFindOneAbilityScoreSkillsInput>;
  desc?: Maybe<Scalars["String"]>;
};

export type FilterFindOneSpellInput = {
  _id?: Maybe<Scalars["String"]>;
  area_of_effect?: Maybe<FilterFindOneSpellArea_Of_EffectInput>;
  attack_type?: Maybe<Scalars["String"]>;
  casting_time?: Maybe<Scalars["String"]>;
  classes?: Maybe<Array<Maybe<FilterFindOneAbilityScoreSkillsInput>>>;
  components?: Maybe<Array<Maybe<Scalars["String"]>>>;
  concentration?: Maybe<Scalars["Boolean"]>;
  damage?: Maybe<FilterFindOneSpellDamageInput>;
  dc?: Maybe<FilterFindOneSpellDcInput>;
  desc?: Maybe<Array<Maybe<Scalars["String"]>>>;
  duration?: Maybe<Scalars["String"]>;
  heal_at_slot_level?: Maybe<Scalars["JSON"]>;
  higher_level?: Maybe<Array<Maybe<Scalars["String"]>>>;
  index?: Maybe<Scalars["String"]>;
  level?: Maybe<Scalars["Float"]>;
  material?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  range?: Maybe<Scalars["String"]>;
  ritual?: Maybe<Scalars["Boolean"]>;
  school?: Maybe<FilterFindOneAbilityScoreSkillsInput>;
  subclasses?: Maybe<Array<Maybe<FilterFindOneAbilityScoreSkillsInput>>>;
  url?: Maybe<Scalars["String"]>;
  _operators?: Maybe<FilterFindOneSpellOperatorsInput>;
  OR?: Maybe<Array<FilterFindOneSpellInput>>;
  AND?: Maybe<Array<FilterFindOneSpellInput>>;
};

export type FilterFindOneSpellOperatorsInput = {
  _id?: Maybe<FilterFindOneSpell_IdOperatorsInput>;
};

export type FilterFindOneStartingEquipment_IdOperatorsInput = {
  gt?: Maybe<Scalars["String"]>;
  gte?: Maybe<Scalars["String"]>;
  lt?: Maybe<Scalars["String"]>;
  lte?: Maybe<Scalars["String"]>;
  ne?: Maybe<Scalars["String"]>;
  in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["String"]>>>;
  regex?: Maybe<Scalars["RegExpAsString"]>;
  exists?: Maybe<Scalars["Boolean"]>;
};

export type FilterFindOneStartingEquipmentInput = {
  _id?: Maybe<Scalars["String"]>;
  class?: Maybe<FilterFindOneAbilityScoreSkillsInput>;
  index?: Maybe<Scalars["String"]>;
  starting_equipment?: Maybe<
    Array<Maybe<FilterFindOneStartingEquipmentStarting_EquipmentInput>>
  >;
  starting_equipment_options?: Maybe<
    Array<Maybe<FilterFindOneStartingEquipmentStarting_Equipment_OptionsInput>>
  >;
  url?: Maybe<Scalars["String"]>;
  _operators?: Maybe<FilterFindOneStartingEquipmentOperatorsInput>;
  OR?: Maybe<Array<FilterFindOneStartingEquipmentInput>>;
  AND?: Maybe<Array<FilterFindOneStartingEquipmentInput>>;
};

export type FilterFindOneStartingEquipmentOperatorsInput = {
  _id?: Maybe<FilterFindOneStartingEquipment_IdOperatorsInput>;
};

export type FilterFindOneStartingEquipmentStarting_Equipment_OptionsFromInput = {
  equipment?: Maybe<FilterFindOneAbilityScoreSkillsInput>;
  quantity?: Maybe<Scalars["Float"]>;
};

export type FilterFindOneStartingEquipmentStarting_Equipment_OptionsInput = {
  choose?: Maybe<Scalars["Float"]>;
  from?: Maybe<
    Array<
      Maybe<FilterFindOneStartingEquipmentStarting_Equipment_OptionsFromInput>
    >
  >;
  type?: Maybe<Scalars["String"]>;
};

export type FilterFindOneStartingEquipmentStarting_EquipmentInput = {
  equipment?: Maybe<FilterFindOneAbilityScoreSkillsInput>;
  quantity?: Maybe<Scalars["Float"]>;
};

export type FilterFindOneSubclass_IdOperatorsInput = {
  gt?: Maybe<Scalars["String"]>;
  gte?: Maybe<Scalars["String"]>;
  lt?: Maybe<Scalars["String"]>;
  lte?: Maybe<Scalars["String"]>;
  ne?: Maybe<Scalars["String"]>;
  in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["String"]>>>;
  regex?: Maybe<Scalars["RegExpAsString"]>;
  exists?: Maybe<Scalars["Boolean"]>;
};

export type FilterFindOneSubclassInput = {
  _id?: Maybe<Scalars["String"]>;
  class?: Maybe<FilterFindOneAbilityScoreSkillsInput>;
  desc?: Maybe<Array<Maybe<Scalars["String"]>>>;
  index?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  spells?: Maybe<Array<Maybe<FilterFindOneSubclassSpellsInput>>>;
  subclass_flavor?: Maybe<Scalars["String"]>;
  subclass_levels?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
  _operators?: Maybe<FilterFindOneSubclassOperatorsInput>;
  OR?: Maybe<Array<FilterFindOneSubclassInput>>;
  AND?: Maybe<Array<FilterFindOneSubclassInput>>;
};

export type FilterFindOneSubclassOperatorsInput = {
  _id?: Maybe<FilterFindOneSubclass_IdOperatorsInput>;
};

export type FilterFindOneSubclassSpellsInput = {
  prerequisites?: Maybe<
    Array<Maybe<FilterFindOneSubclassSpellsPrerequisitesInput>>
  >;
  spell?: Maybe<FilterFindOneAbilityScoreSkillsInput>;
};

export type FilterFindOneSubclassSpellsPrerequisitesInput = {
  index?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
};

export type FilterFindOneSubrace_IdOperatorsInput = {
  gt?: Maybe<Scalars["String"]>;
  gte?: Maybe<Scalars["String"]>;
  lt?: Maybe<Scalars["String"]>;
  lte?: Maybe<Scalars["String"]>;
  ne?: Maybe<Scalars["String"]>;
  in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["String"]>>>;
  regex?: Maybe<Scalars["RegExpAsString"]>;
  exists?: Maybe<Scalars["Boolean"]>;
};

export type FilterFindOneSubraceAbility_BonusesInput = {
  ability_score?: Maybe<FilterFindOneAbilityScoreSkillsInput>;
  bonus?: Maybe<Scalars["Float"]>;
};

export type FilterFindOneSubraceInput = {
  _id?: Maybe<Scalars["String"]>;
  ability_bonuses?: Maybe<
    Array<Maybe<FilterFindOneSubraceAbility_BonusesInput>>
  >;
  desc?: Maybe<Scalars["String"]>;
  index?: Maybe<Scalars["String"]>;
  language_options?: Maybe<FilterFindOneSubraceLanguage_OptionsInput>;
  name?: Maybe<Scalars["String"]>;
  race?: Maybe<FilterFindOneAbilityScoreSkillsInput>;
  racial_trait_options?: Maybe<FilterFindOneSubraceRacial_Trait_OptionsInput>;
  racial_traits?: Maybe<Array<Maybe<FilterFindOneAbilityScoreSkillsInput>>>;
  starting_proficiencies?: Maybe<
    Array<Maybe<FilterFindOneAbilityScoreSkillsInput>>
  >;
  url?: Maybe<Scalars["String"]>;
  _operators?: Maybe<FilterFindOneSubraceOperatorsInput>;
  OR?: Maybe<Array<FilterFindOneSubraceInput>>;
  AND?: Maybe<Array<FilterFindOneSubraceInput>>;
};

export type FilterFindOneSubraceLanguage_OptionsInput = {
  choose?: Maybe<Scalars["Float"]>;
  from?: Maybe<Array<Maybe<FilterFindOneAbilityScoreSkillsInput>>>;
  type?: Maybe<Scalars["String"]>;
};

export type FilterFindOneSubraceOperatorsInput = {
  _id?: Maybe<FilterFindOneSubrace_IdOperatorsInput>;
};

export type FilterFindOneSubraceRacial_Trait_OptionsInput = {
  choose?: Maybe<Scalars["Float"]>;
  from?: Maybe<Array<Maybe<FilterFindOneAbilityScoreSkillsInput>>>;
  type?: Maybe<Scalars["String"]>;
};

export type FilterFindOneTrait_IdOperatorsInput = {
  gt?: Maybe<Scalars["String"]>;
  gte?: Maybe<Scalars["String"]>;
  lt?: Maybe<Scalars["String"]>;
  lte?: Maybe<Scalars["String"]>;
  ne?: Maybe<Scalars["String"]>;
  in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["String"]>>>;
  regex?: Maybe<Scalars["RegExpAsString"]>;
  exists?: Maybe<Scalars["Boolean"]>;
};

export type FilterFindOneTraitInput = {
  _id?: Maybe<Scalars["String"]>;
  desc?: Maybe<Array<Maybe<Scalars["String"]>>>;
  index?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  proficiencies?: Maybe<Array<Maybe<FilterFindOneTraitProficienciesInput>>>;
  proficiency_choices?: Maybe<FilterFindOneTraitProficiency_ChoicesInput>;
  races?: Maybe<Array<Maybe<FilterFindOneAbilityScoreSkillsInput>>>;
  subraces?: Maybe<Array<Maybe<FilterFindOneAbilityScoreSkillsInput>>>;
  url?: Maybe<Scalars["String"]>;
  _operators?: Maybe<FilterFindOneTraitOperatorsInput>;
  OR?: Maybe<Array<FilterFindOneTraitInput>>;
  AND?: Maybe<Array<FilterFindOneTraitInput>>;
};

export type FilterFindOneTraitOperatorsInput = {
  _id?: Maybe<FilterFindOneTrait_IdOperatorsInput>;
};

export type FilterFindOneTraitProficienciesInput = {
  index?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
};

export type FilterFindOneTraitProficiency_ChoicesInput = {
  choose?: Maybe<Scalars["Float"]>;
  from?: Maybe<Array<Maybe<FilterFindOneAbilityScoreSkillsInput>>>;
  type?: Maybe<Scalars["String"]>;
};

export type FilterFindOneWeaponProperty_IdOperatorsInput = {
  gt?: Maybe<Scalars["String"]>;
  gte?: Maybe<Scalars["String"]>;
  lt?: Maybe<Scalars["String"]>;
  lte?: Maybe<Scalars["String"]>;
  ne?: Maybe<Scalars["String"]>;
  in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["String"]>>>;
  regex?: Maybe<Scalars["RegExpAsString"]>;
  exists?: Maybe<Scalars["Boolean"]>;
};

export type FilterFindOneWeaponPropertyInput = {
  _id?: Maybe<Scalars["String"]>;
  desc?: Maybe<Array<Maybe<Scalars["String"]>>>;
  index?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
  _operators?: Maybe<FilterFindOneWeaponPropertyOperatorsInput>;
  OR?: Maybe<Array<FilterFindOneWeaponPropertyInput>>;
  AND?: Maybe<Array<FilterFindOneWeaponPropertyInput>>;
};

export type FilterFindOneWeaponPropertyOperatorsInput = {
  _id?: Maybe<FilterFindOneWeaponProperty_IdOperatorsInput>;
};

export type Language = {
  __typename?: "Language";
  _id: Scalars["String"];
  desc?: Maybe<Scalars["String"]>;
  index?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  script?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  typical_speakers?: Maybe<Array<Maybe<Scalars["String"]>>>;
  url?: Maybe<Scalars["String"]>;
};

export type Level = {
  __typename?: "Level";
  _id: Scalars["String"];
  ability_score_bonuses?: Maybe<Scalars["Float"]>;
  class?: Maybe<AbilityScoreSkills>;
  class_specific?: Maybe<LevelClass_Specific>;
  feature_choices?: Maybe<Array<Maybe<AbilityScoreSkills>>>;
  features?: Maybe<Array<Maybe<AbilityScoreSkills>>>;
  index?: Maybe<Scalars["String"]>;
  level?: Maybe<Scalars["Float"]>;
  prof_bonus?: Maybe<Scalars["Float"]>;
  spellcasting?: Maybe<LevelSpellcasting>;
  subclass?: Maybe<AbilityScoreSkills>;
  subclass_specific?: Maybe<LevelSubclass_Specific>;
  url?: Maybe<Scalars["String"]>;
};

export type LevelClass_Specific = {
  __typename?: "LevelClass_specific";
  action_surges?: Maybe<Scalars["Float"]>;
  arcane_recovery_levels?: Maybe<Scalars["Float"]>;
  aura_range?: Maybe<Scalars["Float"]>;
  bardic_inspiration_die?: Maybe<Scalars["Float"]>;
  brutal_critical_dice?: Maybe<Scalars["Float"]>;
  channel_divinity_charges?: Maybe<Scalars["Float"]>;
  creating_spell_slots?: Maybe<
    Array<Maybe<LevelClass_SpecificCreating_Spell_Slots>>
  >;
  destroy_undead_cr?: Maybe<Scalars["Float"]>;
  extra_attacks?: Maybe<Scalars["Float"]>;
  favored_enemies?: Maybe<Scalars["Float"]>;
  favored_terrain?: Maybe<Scalars["Float"]>;
  indomitable_uses?: Maybe<Scalars["Float"]>;
  invocations_known?: Maybe<Scalars["Float"]>;
  ki_points?: Maybe<Scalars["Float"]>;
  magical_secrets_max_5?: Maybe<Scalars["Float"]>;
  magical_secrets_max_7?: Maybe<Scalars["Float"]>;
  magical_secrets_max_9?: Maybe<Scalars["Float"]>;
  martial_arts?: Maybe<LevelClass_SpecificMartial_Arts>;
  metamagic_known?: Maybe<Scalars["Float"]>;
  mystic_arcanum_level_6?: Maybe<Scalars["Float"]>;
  mystic_arcanum_level_7?: Maybe<Scalars["Float"]>;
  mystic_arcanum_level_8?: Maybe<Scalars["Float"]>;
  mystic_arcanum_level_9?: Maybe<Scalars["Float"]>;
  rage_count?: Maybe<Scalars["Float"]>;
  rage_damage_bonus?: Maybe<Scalars["Float"]>;
  sneak_attack?: Maybe<LevelClass_SpecificSneak_Attack>;
  song_of_rest_die?: Maybe<Scalars["Float"]>;
  sorcery_points?: Maybe<Scalars["Float"]>;
  unarmored_movement?: Maybe<Scalars["Float"]>;
  wild_shape_fly?: Maybe<Scalars["Boolean"]>;
  wild_shape_max_cr?: Maybe<Scalars["Float"]>;
  wild_shape_swim?: Maybe<Scalars["Boolean"]>;
};

export type LevelClass_SpecificCreating_Spell_Slots = {
  __typename?: "LevelClass_specificCreating_spell_slots";
  sorcery_point_cost?: Maybe<Scalars["Float"]>;
  spell_slot_level?: Maybe<Scalars["Float"]>;
};

export type LevelClass_SpecificMartial_Arts = {
  __typename?: "LevelClass_specificMartial_arts";
  dice_count?: Maybe<Scalars["Float"]>;
  dice_value?: Maybe<Scalars["Float"]>;
};

export type LevelClass_SpecificSneak_Attack = {
  __typename?: "LevelClass_specificSneak_attack";
  dice_count?: Maybe<Scalars["Float"]>;
  dice_value?: Maybe<Scalars["Float"]>;
};

export type LevelSpellcasting = {
  __typename?: "LevelSpellcasting";
  cantrips_known?: Maybe<Scalars["Float"]>;
  spell_slots_level_1?: Maybe<Scalars["Float"]>;
  spell_slots_level_2?: Maybe<Scalars["Float"]>;
  spell_slots_level_3?: Maybe<Scalars["Float"]>;
  spell_slots_level_4?: Maybe<Scalars["Float"]>;
  spell_slots_level_5?: Maybe<Scalars["Float"]>;
  spell_slots_level_6?: Maybe<Scalars["Float"]>;
  spell_slots_level_7?: Maybe<Scalars["Float"]>;
  spell_slots_level_8?: Maybe<Scalars["Float"]>;
  spell_slots_level_9?: Maybe<Scalars["Float"]>;
  spells_known?: Maybe<Scalars["Float"]>;
};

export type LevelSubclass_Specific = {
  __typename?: "LevelSubclass_specific";
  additional_magical_secrets_max_lvl?: Maybe<Scalars["Float"]>;
  aura_range?: Maybe<Scalars["Float"]>;
};

export type MagicItem = {
  __typename?: "MagicItem";
  _id: Scalars["String"];
  desc?: Maybe<Array<Maybe<Scalars["String"]>>>;
  equipment_category?: Maybe<AbilityScoreSkills>;
  index?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
};

export type MagicSchool = {
  __typename?: "MagicSchool";
  _id: Scalars["String"];
  desc?: Maybe<Scalars["String"]>;
  index?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
};

export type Monster = {
  __typename?: "Monster";
  _id: Scalars["String"];
  actions?: Maybe<Array<Maybe<MonsterActions>>>;
  alignment?: Maybe<Scalars["String"]>;
  armor_class?: Maybe<Scalars["Float"]>;
  challenge_rating?: Maybe<Scalars["Float"]>;
  charisma?: Maybe<Scalars["Float"]>;
  condition_immunities?: Maybe<Array<Maybe<AbilityScoreSkills>>>;
  constitution?: Maybe<Scalars["Float"]>;
  damage_immunities?: Maybe<Array<Maybe<Scalars["String"]>>>;
  damage_resistances?: Maybe<Array<Maybe<Scalars["String"]>>>;
  damage_vulnerabilities?: Maybe<Array<Maybe<Scalars["String"]>>>;
  dexterity?: Maybe<Scalars["Float"]>;
  forms?: Maybe<Array<Maybe<AbilityScoreSkills>>>;
  hit_dice?: Maybe<Scalars["String"]>;
  hit_points?: Maybe<Scalars["Float"]>;
  index?: Maybe<Scalars["String"]>;
  intelligence?: Maybe<Scalars["Float"]>;
  languages?: Maybe<Scalars["String"]>;
  legendary_actions?: Maybe<Array<Maybe<MonsterLegendary_Actions>>>;
  name?: Maybe<Scalars["String"]>;
  proficiencies?: Maybe<Array<Maybe<MonsterProficiencies>>>;
  reactions?: Maybe<Array<Maybe<MonsterReactions>>>;
  senses?: Maybe<MonsterSenses>;
  size?: Maybe<Scalars["String"]>;
  special_abilities?: Maybe<Array<Maybe<MonsterSpecial_Abilities>>>;
  speed?: Maybe<MonsterSpeed>;
  strength?: Maybe<Scalars["Float"]>;
  subtype?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
  wisdom?: Maybe<Scalars["Float"]>;
  xp?: Maybe<Scalars["Float"]>;
};

export type MonsterActions = {
  __typename?: "MonsterActions";
  attack_bonus?: Maybe<Scalars["Float"]>;
  damage?: Maybe<Array<Maybe<MonsterActionsDamage>>>;
  desc?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
};

export type MonsterActionsDamage = {
  __typename?: "MonsterActionsDamage";
  damage_dice?: Maybe<Scalars["String"]>;
  damage_type?: Maybe<AbilityScoreSkills>;
};

export type MonsterLegendary_Actions = {
  __typename?: "MonsterLegendary_actions";
  attack_bonus?: Maybe<Scalars["Float"]>;
  desc?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
};

export type MonsterProficiencies = {
  __typename?: "MonsterProficiencies";
  proficiency?: Maybe<AbilityScoreSkills>;
  value?: Maybe<Scalars["Float"]>;
};

export type MonsterReactions = {
  __typename?: "MonsterReactions";
  desc?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
};

export type MonsterSenses = {
  __typename?: "MonsterSenses";
  blindsight?: Maybe<Scalars["String"]>;
  darkvision?: Maybe<Scalars["String"]>;
  passive_perception?: Maybe<Scalars["Float"]>;
  tremorsense?: Maybe<Scalars["String"]>;
  truesight?: Maybe<Scalars["String"]>;
};

export type MonsterSpecial_Abilities = {
  __typename?: "MonsterSpecial_abilities";
  desc?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
};

export type MonsterSpeed = {
  __typename?: "MonsterSpeed";
  burrow?: Maybe<Scalars["String"]>;
  climb?: Maybe<Scalars["String"]>;
  fly?: Maybe<Scalars["String"]>;
  hover?: Maybe<Scalars["Boolean"]>;
  swim?: Maybe<Scalars["String"]>;
  walk?: Maybe<Scalars["String"]>;
};

export type Proficiency = {
  __typename?: "Proficiency";
  _id: Scalars["String"];
  classes?: Maybe<Array<Maybe<AbilityScoreSkills>>>;
  index?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  races?: Maybe<Array<Maybe<AbilityScoreSkills>>>;
  references?: Maybe<Array<Maybe<ProficiencyReferences>>>;
  type?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
};

export type ProficiencyReferences = {
  __typename?: "ProficiencyReferences";
  index?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
};

export type Query = {
  __typename?: "Query";
  abilityScore?: Maybe<AbilityScore>;
  abilityScores: Array<AbilityScore>;
  alignment?: Maybe<Alignment>;
  alignments: Array<Alignment>;
  background?: Maybe<Background>;
  backgrounds: Array<Background>;
  condition?: Maybe<Condition>;
  conditions: Array<Condition>;
  class?: Maybe<Class>;
  classes: Array<Class>;
  damageType?: Maybe<DamageType>;
  damageTypes: Array<DamageType>;
  equipment?: Maybe<Equipment>;
  equipments: Array<Equipment>;
  equipmentCategory?: Maybe<EquipmentCategory>;
  equipmentCategories: Array<EquipmentCategory>;
  feature?: Maybe<Feature>;
  features: Array<Feature>;
  language?: Maybe<Language>;
  languages: Array<Language>;
  level?: Maybe<Level>;
  levels: Array<Level>;
  magicItem?: Maybe<MagicItem>;
  magicItems: Array<MagicItem>;
  magicSchool?: Maybe<MagicSchool>;
  magicSchools: Array<MagicSchool>;
  monster?: Maybe<Monster>;
  monsters: Array<Monster>;
  proficiency?: Maybe<Proficiency>;
  proficiencies: Array<Proficiency>;
  race?: Maybe<Race>;
  races: Array<Race>;
  rule?: Maybe<Rule>;
  rules: Array<Rule>;
  ruleSection?: Maybe<RuleSection>;
  ruleSections: Array<RuleSection>;
  spell?: Maybe<Spell>;
  spells: Array<Spell>;
  startingequipment?: Maybe<StartingEquipment>;
  startingequipments: Array<StartingEquipment>;
  subclass?: Maybe<Subclass>;
  subclasses: Array<Subclass>;
  subrace?: Maybe<Subrace>;
  subraces: Array<Subrace>;
  trait?: Maybe<Trait>;
  traits: Array<Trait>;
  weaponProperty?: Maybe<WeaponProperty>;
  weaponProperties: Array<WeaponProperty>;
};

export type QueryAbilityScoreArgs = {
  filter?: Maybe<FilterFindOneAbilityScoreInput>;
  skip?: Maybe<Scalars["Int"]>;
  sort?: Maybe<SortFindOneAbilityScoreInput>;
};

export type QueryAbilityScoresArgs = {
  filter?: Maybe<FilterFindManyAbilityScoreInput>;
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  sort?: Maybe<SortFindManyAbilityScoreInput>;
};

export type QueryAlignmentArgs = {
  filter?: Maybe<FilterFindOneAlignmentInput>;
  skip?: Maybe<Scalars["Int"]>;
  sort?: Maybe<SortFindOneAlignmentInput>;
};

export type QueryAlignmentsArgs = {
  filter?: Maybe<FilterFindManyAlignmentInput>;
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  sort?: Maybe<SortFindManyAlignmentInput>;
};

export type QueryBackgroundArgs = {
  filter?: Maybe<FilterFindOneBackgroundInput>;
  skip?: Maybe<Scalars["Int"]>;
  sort?: Maybe<SortFindOneBackgroundInput>;
};

export type QueryBackgroundsArgs = {
  filter?: Maybe<FilterFindManyBackgroundInput>;
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  sort?: Maybe<SortFindManyBackgroundInput>;
};

export type QueryConditionArgs = {
  filter?: Maybe<FilterFindOneConditionInput>;
  skip?: Maybe<Scalars["Int"]>;
  sort?: Maybe<SortFindOneConditionInput>;
};

export type QueryConditionsArgs = {
  filter?: Maybe<FilterFindManyConditionInput>;
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  sort?: Maybe<SortFindManyConditionInput>;
};

export type QueryClassArgs = {
  filter?: Maybe<FilterFindOneClassInput>;
  skip?: Maybe<Scalars["Int"]>;
  sort?: Maybe<SortFindOneClassInput>;
};

export type QueryClassesArgs = {
  filter?: Maybe<FilterFindManyClassInput>;
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  sort?: Maybe<SortFindManyClassInput>;
};

export type QueryDamageTypeArgs = {
  filter?: Maybe<FilterFindOneDamageTypeInput>;
  skip?: Maybe<Scalars["Int"]>;
  sort?: Maybe<SortFindOneDamageTypeInput>;
};

export type QueryDamageTypesArgs = {
  filter?: Maybe<FilterFindManyDamageTypeInput>;
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  sort?: Maybe<SortFindManyDamageTypeInput>;
};

export type QueryEquipmentArgs = {
  filter?: Maybe<FilterFindOneEquipmentInput>;
  skip?: Maybe<Scalars["Int"]>;
  sort?: Maybe<SortFindOneEquipmentInput>;
};

export type QueryEquipmentsArgs = {
  filter?: Maybe<FilterFindManyEquipmentInput>;
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  sort?: Maybe<SortFindManyEquipmentInput>;
};

export type QueryEquipmentCategoryArgs = {
  filter?: Maybe<FilterFindOneEquipmentCategoryInput>;
  skip?: Maybe<Scalars["Int"]>;
  sort?: Maybe<SortFindOneEquipmentCategoryInput>;
};

export type QueryEquipmentCategoriesArgs = {
  filter?: Maybe<FilterFindManyEquipmentCategoryInput>;
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  sort?: Maybe<SortFindManyEquipmentCategoryInput>;
};

export type QueryFeatureArgs = {
  filter?: Maybe<FilterFindOneFeatureInput>;
  skip?: Maybe<Scalars["Int"]>;
  sort?: Maybe<SortFindOneFeatureInput>;
};

export type QueryFeaturesArgs = {
  filter?: Maybe<FilterFindManyFeatureInput>;
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  sort?: Maybe<SortFindManyFeatureInput>;
};

export type QueryLanguageArgs = {
  filter?: Maybe<FilterFindOneLanguageInput>;
  skip?: Maybe<Scalars["Int"]>;
  sort?: Maybe<SortFindOneLanguageInput>;
};

export type QueryLanguagesArgs = {
  filter?: Maybe<FilterFindManyLanguageInput>;
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  sort?: Maybe<SortFindManyLanguageInput>;
};

export type QueryLevelArgs = {
  filter?: Maybe<FilterFindOneLevelInput>;
  skip?: Maybe<Scalars["Int"]>;
  sort?: Maybe<SortFindOneLevelInput>;
};

export type QueryLevelsArgs = {
  filter?: Maybe<FilterFindManyLevelInput>;
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  sort?: Maybe<SortFindManyLevelInput>;
};

export type QueryMagicItemArgs = {
  filter?: Maybe<FilterFindOneMagicItemInput>;
  skip?: Maybe<Scalars["Int"]>;
  sort?: Maybe<SortFindOneMagicItemInput>;
};

export type QueryMagicItemsArgs = {
  filter?: Maybe<FilterFindManyMagicItemInput>;
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  sort?: Maybe<SortFindManyMagicItemInput>;
};

export type QueryMagicSchoolArgs = {
  filter?: Maybe<FilterFindOneMagicSchoolInput>;
  skip?: Maybe<Scalars["Int"]>;
  sort?: Maybe<SortFindOneMagicSchoolInput>;
};

export type QueryMagicSchoolsArgs = {
  filter?: Maybe<FilterFindManyMagicSchoolInput>;
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  sort?: Maybe<SortFindManyMagicSchoolInput>;
};

export type QueryMonsterArgs = {
  filter?: Maybe<FilterFindOneMonsterInput>;
  skip?: Maybe<Scalars["Int"]>;
  sort?: Maybe<SortFindOneMonsterInput>;
};

export type QueryMonstersArgs = {
  filter?: Maybe<FilterFindManyMonsterInput>;
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  sort?: Maybe<SortFindManyMonsterInput>;
};

export type QueryProficiencyArgs = {
  filter?: Maybe<FilterFindOneProficiencyInput>;
  skip?: Maybe<Scalars["Int"]>;
  sort?: Maybe<SortFindOneProficiencyInput>;
};

export type QueryProficienciesArgs = {
  filter?: Maybe<FilterFindManyProficiencyInput>;
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  sort?: Maybe<SortFindManyProficiencyInput>;
};

export type QueryRaceArgs = {
  filter?: Maybe<FilterFindOneRaceInput>;
  skip?: Maybe<Scalars["Int"]>;
  sort?: Maybe<SortFindOneRaceInput>;
};

export type QueryRacesArgs = {
  filter?: Maybe<FilterFindManyRaceInput>;
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  sort?: Maybe<SortFindManyRaceInput>;
};

export type QueryRuleArgs = {
  filter?: Maybe<FilterFindOneRuleInput>;
  skip?: Maybe<Scalars["Int"]>;
  sort?: Maybe<SortFindOneRuleInput>;
};

export type QueryRulesArgs = {
  filter?: Maybe<FilterFindManyRuleInput>;
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  sort?: Maybe<SortFindManyRuleInput>;
};

export type QueryRuleSectionArgs = {
  filter?: Maybe<FilterFindOneRuleSectionInput>;
  skip?: Maybe<Scalars["Int"]>;
  sort?: Maybe<SortFindOneRuleSectionInput>;
};

export type QueryRuleSectionsArgs = {
  filter?: Maybe<FilterFindManyRuleSectionInput>;
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  sort?: Maybe<SortFindManyRuleSectionInput>;
};

export type QuerySpellArgs = {
  filter?: Maybe<FilterFindOneSpellInput>;
  skip?: Maybe<Scalars["Int"]>;
  sort?: Maybe<SortFindOneSpellInput>;
};

export type QuerySpellsArgs = {
  filter?: Maybe<FilterFindManySpellInput>;
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  sort?: Maybe<SortFindManySpellInput>;
};

export type QueryStartingequipmentArgs = {
  filter?: Maybe<FilterFindOneStartingEquipmentInput>;
  skip?: Maybe<Scalars["Int"]>;
  sort?: Maybe<SortFindOneStartingEquipmentInput>;
};

export type QueryStartingequipmentsArgs = {
  filter?: Maybe<FilterFindManyStartingEquipmentInput>;
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  sort?: Maybe<SortFindManyStartingEquipmentInput>;
};

export type QuerySubclassArgs = {
  filter?: Maybe<FilterFindOneSubclassInput>;
  skip?: Maybe<Scalars["Int"]>;
  sort?: Maybe<SortFindOneSubclassInput>;
};

export type QuerySubclassesArgs = {
  filter?: Maybe<FilterFindManySubclassInput>;
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  sort?: Maybe<SortFindManySubclassInput>;
};

export type QuerySubraceArgs = {
  filter?: Maybe<FilterFindOneSubraceInput>;
  skip?: Maybe<Scalars["Int"]>;
  sort?: Maybe<SortFindOneSubraceInput>;
};

export type QuerySubracesArgs = {
  filter?: Maybe<FilterFindManySubraceInput>;
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  sort?: Maybe<SortFindManySubraceInput>;
};

export type QueryTraitArgs = {
  filter?: Maybe<FilterFindOneTraitInput>;
  skip?: Maybe<Scalars["Int"]>;
  sort?: Maybe<SortFindOneTraitInput>;
};

export type QueryTraitsArgs = {
  filter?: Maybe<FilterFindManyTraitInput>;
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  sort?: Maybe<SortFindManyTraitInput>;
};

export type QueryWeaponPropertyArgs = {
  filter?: Maybe<FilterFindOneWeaponPropertyInput>;
  skip?: Maybe<Scalars["Int"]>;
  sort?: Maybe<SortFindOneWeaponPropertyInput>;
};

export type QueryWeaponPropertiesArgs = {
  filter?: Maybe<FilterFindManyWeaponPropertyInput>;
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  sort?: Maybe<SortFindManyWeaponPropertyInput>;
};

export type Race = {
  __typename?: "Race";
  _id: Scalars["String"];
  ability_bonus_options?: Maybe<RaceAbility_Bonus_Options>;
  ability_bonuses?: Maybe<Array<Maybe<RaceAbility_Bonuses>>>;
  age?: Maybe<Scalars["String"]>;
  alignment?: Maybe<Scalars["String"]>;
  index?: Maybe<Scalars["String"]>;
  language_desc?: Maybe<Scalars["String"]>;
  language_options?: Maybe<RaceLanguage_Options>;
  languages?: Maybe<Array<Maybe<AbilityScoreSkills>>>;
  name?: Maybe<Scalars["String"]>;
  size?: Maybe<Scalars["String"]>;
  size_description?: Maybe<Scalars["String"]>;
  speed?: Maybe<Scalars["Float"]>;
  starting_proficiencies?: Maybe<Array<Maybe<AbilityScoreSkills>>>;
  starting_proficiency_options?: Maybe<RaceStarting_Proficiency_Options>;
  subraces?: Maybe<Array<Maybe<AbilityScoreSkills>>>;
  trait_options?: Maybe<RaceTrait_Options>;
  traits?: Maybe<Array<Maybe<AbilityScoreSkills>>>;
  url?: Maybe<Scalars["String"]>;
};

export type RaceAbility_Bonus_Options = {
  __typename?: "RaceAbility_bonus_options";
  choose?: Maybe<Scalars["Float"]>;
  from?: Maybe<Array<Maybe<RaceAbility_Bonus_OptionsFrom>>>;
  type?: Maybe<Scalars["String"]>;
};

export type RaceAbility_Bonus_OptionsFrom = {
  __typename?: "RaceAbility_bonus_optionsFrom";
  ability_score?: Maybe<AbilityScoreSkills>;
  bonus?: Maybe<Scalars["Float"]>;
};

export type RaceAbility_Bonuses = {
  __typename?: "RaceAbility_bonuses";
  ability_score?: Maybe<AbilityScoreSkills>;
  bonus?: Maybe<Scalars["Float"]>;
};

export type RaceLanguage_Options = {
  __typename?: "RaceLanguage_options";
  choose?: Maybe<Scalars["Float"]>;
  from?: Maybe<Array<Maybe<AbilityScoreSkills>>>;
  type?: Maybe<Scalars["String"]>;
};

export type RaceStarting_Proficiency_Options = {
  __typename?: "RaceStarting_proficiency_options";
  choose?: Maybe<Scalars["Float"]>;
  from?: Maybe<Array<Maybe<AbilityScoreSkills>>>;
  type?: Maybe<Scalars["String"]>;
};

export type RaceTrait_Options = {
  __typename?: "RaceTrait_options";
  choose?: Maybe<Scalars["Float"]>;
  from?: Maybe<Array<Maybe<AbilityScoreSkills>>>;
  type?: Maybe<Scalars["String"]>;
};

export type Rule = {
  __typename?: "Rule";
  _id: Scalars["String"];
  desc?: Maybe<Scalars["String"]>;
  index?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  subsections?: Maybe<Array<Maybe<AbilityScoreSkills>>>;
  url?: Maybe<Scalars["String"]>;
};

export type RuleSection = {
  __typename?: "RuleSection";
  _id: Scalars["String"];
  desc?: Maybe<Scalars["String"]>;
  index?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
};

export enum SortFindManyAbilityScoreInput {
  IdAsc = "_ID_ASC",
  IdDesc = "_ID_DESC",
}

export enum SortFindManyAlignmentInput {
  IdAsc = "_ID_ASC",
  IdDesc = "_ID_DESC",
}

export enum SortFindManyBackgroundInput {
  IdAsc = "_ID_ASC",
  IdDesc = "_ID_DESC",
}

export enum SortFindManyClassInput {
  IdAsc = "_ID_ASC",
  IdDesc = "_ID_DESC",
}

export enum SortFindManyConditionInput {
  IdAsc = "_ID_ASC",
  IdDesc = "_ID_DESC",
}

export enum SortFindManyDamageTypeInput {
  IdAsc = "_ID_ASC",
  IdDesc = "_ID_DESC",
}

export enum SortFindManyEquipmentCategoryInput {
  IdAsc = "_ID_ASC",
  IdDesc = "_ID_DESC",
}

export enum SortFindManyEquipmentInput {
  IdAsc = "_ID_ASC",
  IdDesc = "_ID_DESC",
}

export enum SortFindManyFeatureInput {
  IdAsc = "_ID_ASC",
  IdDesc = "_ID_DESC",
}

export enum SortFindManyLanguageInput {
  IdAsc = "_ID_ASC",
  IdDesc = "_ID_DESC",
}

export enum SortFindManyLevelInput {
  IdAsc = "_ID_ASC",
  IdDesc = "_ID_DESC",
}

export enum SortFindManyMagicItemInput {
  IdAsc = "_ID_ASC",
  IdDesc = "_ID_DESC",
}

export enum SortFindManyMagicSchoolInput {
  IdAsc = "_ID_ASC",
  IdDesc = "_ID_DESC",
}

export enum SortFindManyMonsterInput {
  IdAsc = "_ID_ASC",
  IdDesc = "_ID_DESC",
}

export enum SortFindManyProficiencyInput {
  IdAsc = "_ID_ASC",
  IdDesc = "_ID_DESC",
}

export enum SortFindManyRaceInput {
  IdAsc = "_ID_ASC",
  IdDesc = "_ID_DESC",
}

export enum SortFindManyRuleInput {
  IdAsc = "_ID_ASC",
  IdDesc = "_ID_DESC",
}

export enum SortFindManyRuleSectionInput {
  IdAsc = "_ID_ASC",
  IdDesc = "_ID_DESC",
}

export enum SortFindManySpellInput {
  IdAsc = "_ID_ASC",
  IdDesc = "_ID_DESC",
}

export enum SortFindManyStartingEquipmentInput {
  IdAsc = "_ID_ASC",
  IdDesc = "_ID_DESC",
}

export enum SortFindManySubclassInput {
  IdAsc = "_ID_ASC",
  IdDesc = "_ID_DESC",
}

export enum SortFindManySubraceInput {
  IdAsc = "_ID_ASC",
  IdDesc = "_ID_DESC",
}

export enum SortFindManyTraitInput {
  IdAsc = "_ID_ASC",
  IdDesc = "_ID_DESC",
}

export enum SortFindManyWeaponPropertyInput {
  IdAsc = "_ID_ASC",
  IdDesc = "_ID_DESC",
}

export enum SortFindOneAbilityScoreInput {
  IdAsc = "_ID_ASC",
  IdDesc = "_ID_DESC",
}

export enum SortFindOneAlignmentInput {
  IdAsc = "_ID_ASC",
  IdDesc = "_ID_DESC",
}

export enum SortFindOneBackgroundInput {
  IdAsc = "_ID_ASC",
  IdDesc = "_ID_DESC",
}

export enum SortFindOneClassInput {
  IdAsc = "_ID_ASC",
  IdDesc = "_ID_DESC",
}

export enum SortFindOneConditionInput {
  IdAsc = "_ID_ASC",
  IdDesc = "_ID_DESC",
}

export enum SortFindOneDamageTypeInput {
  IdAsc = "_ID_ASC",
  IdDesc = "_ID_DESC",
}

export enum SortFindOneEquipmentCategoryInput {
  IdAsc = "_ID_ASC",
  IdDesc = "_ID_DESC",
}

export enum SortFindOneEquipmentInput {
  IdAsc = "_ID_ASC",
  IdDesc = "_ID_DESC",
}

export enum SortFindOneFeatureInput {
  IdAsc = "_ID_ASC",
  IdDesc = "_ID_DESC",
}

export enum SortFindOneLanguageInput {
  IdAsc = "_ID_ASC",
  IdDesc = "_ID_DESC",
}

export enum SortFindOneLevelInput {
  IdAsc = "_ID_ASC",
  IdDesc = "_ID_DESC",
}

export enum SortFindOneMagicItemInput {
  IdAsc = "_ID_ASC",
  IdDesc = "_ID_DESC",
}

export enum SortFindOneMagicSchoolInput {
  IdAsc = "_ID_ASC",
  IdDesc = "_ID_DESC",
}

export enum SortFindOneMonsterInput {
  IdAsc = "_ID_ASC",
  IdDesc = "_ID_DESC",
}

export enum SortFindOneProficiencyInput {
  IdAsc = "_ID_ASC",
  IdDesc = "_ID_DESC",
}

export enum SortFindOneRaceInput {
  IdAsc = "_ID_ASC",
  IdDesc = "_ID_DESC",
}

export enum SortFindOneRuleInput {
  IdAsc = "_ID_ASC",
  IdDesc = "_ID_DESC",
}

export enum SortFindOneRuleSectionInput {
  IdAsc = "_ID_ASC",
  IdDesc = "_ID_DESC",
}

export enum SortFindOneSpellInput {
  IdAsc = "_ID_ASC",
  IdDesc = "_ID_DESC",
}

export enum SortFindOneStartingEquipmentInput {
  IdAsc = "_ID_ASC",
  IdDesc = "_ID_DESC",
}

export enum SortFindOneSubclassInput {
  IdAsc = "_ID_ASC",
  IdDesc = "_ID_DESC",
}

export enum SortFindOneSubraceInput {
  IdAsc = "_ID_ASC",
  IdDesc = "_ID_DESC",
}

export enum SortFindOneTraitInput {
  IdAsc = "_ID_ASC",
  IdDesc = "_ID_DESC",
}

export enum SortFindOneWeaponPropertyInput {
  IdAsc = "_ID_ASC",
  IdDesc = "_ID_DESC",
}

export type Spell = {
  __typename?: "Spell";
  _id: Scalars["String"];
  area_of_effect?: Maybe<SpellArea_Of_Effect>;
  attack_type?: Maybe<Scalars["String"]>;
  casting_time?: Maybe<Scalars["String"]>;
  classes?: Maybe<Array<Maybe<AbilityScoreSkills>>>;
  components?: Maybe<Array<Maybe<Scalars["String"]>>>;
  concentration?: Maybe<Scalars["Boolean"]>;
  damage?: Maybe<SpellDamage>;
  dc?: Maybe<SpellDc>;
  desc?: Maybe<Array<Maybe<Scalars["String"]>>>;
  duration?: Maybe<Scalars["String"]>;
  heal_at_slot_level?: Maybe<Scalars["JSON"]>;
  higher_level?: Maybe<Array<Maybe<Scalars["String"]>>>;
  index?: Maybe<Scalars["String"]>;
  level?: Maybe<Scalars["Float"]>;
  material?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  range?: Maybe<Scalars["String"]>;
  ritual?: Maybe<Scalars["Boolean"]>;
  school?: Maybe<AbilityScoreSkills>;
  subclasses?: Maybe<Array<Maybe<AbilityScoreSkills>>>;
  url?: Maybe<Scalars["String"]>;
};

export type SpellArea_Of_Effect = {
  __typename?: "SpellArea_of_effect";
  size?: Maybe<Scalars["Float"]>;
  type?: Maybe<Scalars["String"]>;
};

export type SpellDamage = {
  __typename?: "SpellDamage";
  damage_at_slot_level?: Maybe<Scalars["JSON"]>;
  damage_at_character_level?: Maybe<Scalars["JSON"]>;
  damage_type?: Maybe<AbilityScoreSkills>;
};

export type SpellDc = {
  __typename?: "SpellDc";
  dc_success?: Maybe<Scalars["String"]>;
  dc_type?: Maybe<AbilityScoreSkills>;
  desc?: Maybe<Scalars["String"]>;
};

export type StartingEquipment = {
  __typename?: "StartingEquipment";
  _id: Scalars["String"];
  class?: Maybe<AbilityScoreSkills>;
  index?: Maybe<Scalars["String"]>;
  starting_equipment?: Maybe<Array<Maybe<StartingEquipmentStarting_Equipment>>>;
  starting_equipment_options?: Maybe<
    Array<Maybe<StartingEquipmentStarting_Equipment_Options>>
  >;
  url?: Maybe<Scalars["String"]>;
};

export type StartingEquipmentStarting_Equipment = {
  __typename?: "StartingEquipmentStarting_equipment";
  equipment?: Maybe<AbilityScoreSkills>;
  quantity?: Maybe<Scalars["Float"]>;
};

export type StartingEquipmentStarting_Equipment_Options = {
  __typename?: "StartingEquipmentStarting_equipment_options";
  choose?: Maybe<Scalars["Float"]>;
  from?: Maybe<Array<Maybe<StartingEquipmentStarting_Equipment_OptionsFrom>>>;
  type?: Maybe<Scalars["String"]>;
};

export type StartingEquipmentStarting_Equipment_OptionsFrom = {
  __typename?: "StartingEquipmentStarting_equipment_optionsFrom";
  equipment?: Maybe<AbilityScoreSkills>;
  quantity?: Maybe<Scalars["Float"]>;
};

export type Subclass = {
  __typename?: "Subclass";
  _id: Scalars["String"];
  class?: Maybe<AbilityScoreSkills>;
  desc?: Maybe<Array<Maybe<Scalars["String"]>>>;
  index?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  spells?: Maybe<Array<Maybe<SubclassSpells>>>;
  subclass_flavor?: Maybe<Scalars["String"]>;
  subclass_levels?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
};

export type SubclassSpells = {
  __typename?: "SubclassSpells";
  prerequisites?: Maybe<Array<Maybe<SubclassSpellsPrerequisites>>>;
  spell?: Maybe<AbilityScoreSkills>;
};

export type SubclassSpellsPrerequisites = {
  __typename?: "SubclassSpellsPrerequisites";
  index?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
};

export type Subrace = {
  __typename?: "Subrace";
  _id: Scalars["String"];
  ability_bonuses?: Maybe<Array<Maybe<SubraceAbility_Bonuses>>>;
  desc?: Maybe<Scalars["String"]>;
  index?: Maybe<Scalars["String"]>;
  language_options?: Maybe<SubraceLanguage_Options>;
  name?: Maybe<Scalars["String"]>;
  race?: Maybe<AbilityScoreSkills>;
  racial_trait_options?: Maybe<SubraceRacial_Trait_Options>;
  racial_traits?: Maybe<Array<Maybe<AbilityScoreSkills>>>;
  starting_proficiencies?: Maybe<Array<Maybe<AbilityScoreSkills>>>;
  url?: Maybe<Scalars["String"]>;
};

export type SubraceAbility_Bonuses = {
  __typename?: "SubraceAbility_bonuses";
  ability_score?: Maybe<AbilityScoreSkills>;
  bonus?: Maybe<Scalars["Float"]>;
};

export type SubraceLanguage_Options = {
  __typename?: "SubraceLanguage_options";
  choose?: Maybe<Scalars["Float"]>;
  from?: Maybe<Array<Maybe<AbilityScoreSkills>>>;
  type?: Maybe<Scalars["String"]>;
};

export type SubraceRacial_Trait_Options = {
  __typename?: "SubraceRacial_trait_options";
  choose?: Maybe<Scalars["Float"]>;
  from?: Maybe<Array<Maybe<AbilityScoreSkills>>>;
  type?: Maybe<Scalars["String"]>;
};

export type Trait = {
  __typename?: "Trait";
  _id: Scalars["String"];
  desc?: Maybe<Array<Maybe<Scalars["String"]>>>;
  index?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  proficiencies?: Maybe<Array<Maybe<TraitProficiencies>>>;
  proficiency_choices?: Maybe<TraitProficiency_Choices>;
  races?: Maybe<Array<Maybe<AbilityScoreSkills>>>;
  subraces?: Maybe<Array<Maybe<AbilityScoreSkills>>>;
  url?: Maybe<Scalars["String"]>;
};

export type TraitProficiencies = {
  __typename?: "TraitProficiencies";
  index?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
};

export type TraitProficiency_Choices = {
  __typename?: "TraitProficiency_choices";
  choose?: Maybe<Scalars["Float"]>;
  from?: Maybe<Array<Maybe<AbilityScoreSkills>>>;
  type?: Maybe<Scalars["String"]>;
};

export type WeaponProperty = {
  __typename?: "WeaponProperty";
  _id: Scalars["String"];
  desc?: Maybe<Array<Maybe<Scalars["String"]>>>;
  index?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
};
