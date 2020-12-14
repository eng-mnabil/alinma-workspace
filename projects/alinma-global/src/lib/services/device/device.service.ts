import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  constructor() { }

  isAndroid() {
    console.log('is Android called');
  }
}
