import { gql } from "@apollo/client";

export const HERO_CLASS = gql`
  query GetHeroesClasses($classIndex: String!) {
    class(filter: { name: $classIndex }) {
      hit_die
      index
      name
      proficiencies {
        index
        name
      }
      saving_throws {
        index
        name
      }
      proficiency_choices {
        choose
        from {
          name
          index
        }
      }
      spellcasting {
        level
        spellcasting_ability {
          index
          name
        }
      }
      starting_equipment {
        equipment {
          name
          index
        }
        quantity
      }
      starting_equipment_options {
        choose
        from {
          equipment {
            name
            index
          }
          quantity
        }
      }
      subclasses {
        index
        name
      }
    }
  }
`;

export const HEROES_CLASSES = gql`
  query GetHeroesClasses {
    classes {
      name
      index
    }
  }
`;
