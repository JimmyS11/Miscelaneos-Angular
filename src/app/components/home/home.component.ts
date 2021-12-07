import { Component, OnInit, OnChanges, DoCheck, AfterContentInit,
          AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `

    <app-ng-style></app-ng-style>
    <br>

    <app-css></app-css>
    <br>

    <app-clases></app-clases>
    <br><br> 

    <p [appResaltado]="'orange'">
        Hola Mundo
    </p>
  
    <br>
    <app-ng-switch></app-ng-switch>
  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit, OnChanges, DoCheck, AfterContentInit,
AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  constructor() { 
    console.log("constructor");
  }

  ngOnInit(){
    console.log("OnInit");
  }

  ngOnChanges(){
    console.log("OnChanges");
  }

  ngDoCheck(){
    console.log("OnDoCheck");
  }

  ngAfterContentInit(){
    console.log("OnAfterContentInit");
  }

  ngAfterContentChecked(){
    console.log("OnAfterContentChecked");
  }

  ngAfterViewInit(){
    console.log("OnAfterViewInit");
  }

  ngAfterViewChecked(){
    console.log("OnAfterViewChecked");
  }

  ngOnDestroy(){
    console.log("OnDestroy");
  }

}
