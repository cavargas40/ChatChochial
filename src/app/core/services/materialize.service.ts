import { Injectable } from '@angular/core';

declare var Materialize: any;
declare var $: any;

@Injectable()
export class MaterializeService {

  constructor() { }

  toast(text: string, duration: number = 3000, style: string = "") {
    Materialize.toast(text, duration, style);
  }

}
