import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-accoount-settings',
  templateUrl: './accoount-settings.component.html',
  styles: [
  ]
})
export class AccoountSettingsComponent implements OnInit {




  constructor(private settingsService: SettingsService) { }

  ngOnInit(): void {
	this.settingsService.checkCurrentTheme();
  }

  changeTheme( theme: string ) {

	this.settingsService.changeTheme( theme );

  }


}
