import { Component } from '@angular/core';
import { DeviceService } from 'alinma-global';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ersal';

  constructor(private deviceService: DeviceService) {
    this.deviceService.isAndroid();
  }
}
