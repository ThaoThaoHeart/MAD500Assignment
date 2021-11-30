import { Injectable } from '@angular/core';
import {SwUpdate} from "@angular/service-worker";
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class LogUpdateService {


  constructor(updates: SwUpdate, public updateSnackBar: MatSnackBar, public updatedSnackBar: MatSnackBar) {
    let snackBarRef = updateSnackBar.open("An update is available!", "Load Update");
    let updatedSnackBarRef = updatedSnackBar.open("An update has been applied!", "Ok!");

    updates.available.subscribe(event => {
      console.log('current version is', event.current);//displays current hash
      console.log('available version is', event.available);//displays new available hash
      if(event.current != event.available){
        snackBarRef._open();
      }
    });

    updates.activated.subscribe(event => {
      console.log('old version was', event.previous);
      console.log('new version is', event.current);
      if(event.previous == event.current){
        updatedSnackBarRef._open();
      }
    });

    snackBarRef.onAction().subscribe(() => {
      location.reload();
      snackBarRef.dismiss();
    });

    updatedSnackBarRef.onAction().subscribe(()=>{
      updatedSnackBarRef.dismiss();
    });

  }



}
