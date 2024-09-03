import { Component, OnInit } from '@angular/core';
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
  selector: 'app-deal',
  templateUrl: './deal.component.html',
  styleUrls: ['./deal.component.css'],
})
export class DealComponent implements OnInit {
  esuit: Esuit[] = []; 

  constructor(private dataService: DealService) {}

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers(): void {
    this.dataService.getAll().subscribe((response: any) => {
      this.esuit = response as Esuit[];
      console.log(this.esuit);
    }, error => {
      console.error('Error getting data:', error);
    });
  }
}
