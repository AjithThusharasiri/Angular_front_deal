
import {Component, OnInit} from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import { ReplaySubject, Observable } from 'rxjs';
import { DealService } from '../services/deal.service';
export interface Esuit {
  id: number;
  d_size: string;
  d_category: string;
  d_employee: string;
  d_location: string;
  d_pipe: string;
  d_stage: string;
  l_updated: string;
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements OnInit {

  esuit: Esuit[] = [];  // Use the Esuit interface to type esuit
  creatingMode: boolean = true;

  constructor(private dataService: DealService) {}

  ngOnInit(): void {
    this.getAllUsers();
  }

  // Get All Users
  getAllUsers(): void {
    this.dataService.getAll().subscribe((response: any) => {
      this.esuit = response as Esuit[]; // Ensure response is of type Esuit[]
      console.log(this.esuit);
    }, error => {
      console.error('Error getting:', error);
    });
  }
}
