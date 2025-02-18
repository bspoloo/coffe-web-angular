import { FormArray, FormBuilder, FormControl, Validators } from "@angular/forms";
import { Flavor } from "../interfaces/coffe.interfaces";

export class ArrayFlavor{
  static arrayToObject(flavorArray : FormArray) : Flavor[]{
    const flavorsObject : Flavor[] = [];
    flavorArray.controls.forEach( (flavor) => {
          flavorsObject.push({name: (flavor as FormControl).value});
        });

    return flavorsObject;
  }
  static objectToArrayString(arrayObject : Flavor[]) :  string[]{
    const arrayFlavor : string[] =[]
    arrayObject.forEach((flavor) => {
      arrayFlavor.push(flavor.name);
    });
    return arrayFlavor;
  }
}
