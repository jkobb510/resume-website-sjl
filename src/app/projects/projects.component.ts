import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  airesponsibilities: string[] = [];
  personalprofileresponsibilities: string[] = [];
    constructor(private http: HttpClient) { }

  ngOnInit(): void {

      this.http.get<string[]>('https://portfolio-website-e40e5-default-rtdb.firebaseio.com/profile/projects/0/responsibilities.json')
      .subscribe((data: string[]) => {
        this.airesponsibilities = data;
      });    
    this.http.get<string[]>('https://portfolio-website-e40e5-default-rtdb.firebaseio.com/profile/projects/1/responsibilities.json')
      .subscribe((data: string[]) => {
        this.personalprofileresponsibilities = data;
      });
    }
}

