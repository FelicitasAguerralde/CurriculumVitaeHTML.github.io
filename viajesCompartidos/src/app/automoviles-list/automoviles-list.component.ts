import {Component} from '@angular/core';
import {Automoviles} from './automoviles';
import { AutomovilesDataService } from '../automoviles-data.service';
@Component({
  selector: 'app-automoviles-list',
  templateUrl: './automoviles-list.component.html',
  styleUrls: ['./automoviles-list.component.css']
})
export class AutomovilesListComponent {
  automoviles : Automoviles []=[];
  constructor(private automovilesDataService: AutomovilesDataService) { }
  ngOnInit():void{
    this.automovilesDataService.getAll()
    .subscribe((automoviles: Automoviles[])=>this.automoviles=automoviles);
  }

}
