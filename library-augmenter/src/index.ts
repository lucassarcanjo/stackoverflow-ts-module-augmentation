// Adding these lines causes parcel to output a .d.ts file that includes the definition for "message" but no augmentation declarations.
import { Person } from "library-original";
Person.prototype.greet = function() { return `Hello ${this.name}!` }

// This will be present in the .d.ts file generated by parcel:
export const anotherThing: string = "hello";

// This will get dropped:
declare module "library-original" {
  interface Person {
    greet(): string;
  }
}

// This will also get dropped, if the "declare module" statement above is present:
export const somethingElse: string = "goodbye";
