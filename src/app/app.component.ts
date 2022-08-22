import { EventEmitterServiceService } from './services/event-emitter-service.service';
import { AutorServiceService } from './services/autor-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'douglas-aparecido-goncalves-front-end';

  autorId:any;
  constructor(private  autorServiceService: AutorServiceService){}
  ngOnInit(): void {
    EventEmitterServiceService.get("aoAlterar").subscribe((autorId) =>{
      this.autorId = autorId;
    })
  }


  alterarAutor($event:any){
    console.log("APP-COMP: " + $event)
    this.autorId = $event.autorId
  }
}
