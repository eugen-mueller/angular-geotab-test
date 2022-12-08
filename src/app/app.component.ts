import { Component, OnInit } from '@angular/core';
declare function loadApp(): any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  title = 'angular-geotab-test';
  api: any;
  username: any;
  randomDevice: any;

  async ngOnInit() {

    // Brings in the Geotab API object from the main.js file
    // This will allow you to use this.api to make any api calls against MyGeotab
    this.api = await loadApp();

    this.username = await this.getSession();
    console.log(this.username);

    this.randomDevice = await this.getRandomDevice();
    console.log(this.randomDevice);


  }

  getSession() {

    return new Promise<any>((resolve, reject) => {

      this.api.getSession((session: { userName: any; }) => {
         resolve(session.userName);
      });

    });
  }


  getRandomDevice() {
    
    return new Promise<any>((resolve, reject) => {

        this.api.call("Get", {
            "typeName": "Device",
            "resultsLimit": 1
        }, result => {
            resolve(result);
        }, err => {
            console.error("Failed:", err);
            reject();
        });

    });
  }




}
