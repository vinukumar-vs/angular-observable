import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalContextService {

  TYPES: any = {ADD_TO_GROUP: "ADD_TO_GROUP" };
  context: any = {}

  constructor() { }

  setContext(contextType: string, data: any) {
    this.context[contextType] = data;
  }

  getContext(contextType: string): any {
    return this.context[contextType];
  }

  clear(contextType) {
    if(contextType) {
      delete this.context[contextType];
    } else {
      console.log("Content type not exist", contextType);
    }
  }
}

//# sourceMappingURL=pathToSourceMaps