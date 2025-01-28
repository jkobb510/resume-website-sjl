import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  bakktResponsibilities: string[] = [];
  uniteDigitalResponsibilities: string[] = [];
  selfEmployedResponsibilities: string[] = [];
  airesponsibilities: string[] = [];
  personalprofileresponsibilities: string[] = [];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<string[]>('https://portfolio-website-e40e5-default-rtdb.firebaseio.com/profile/professionalExperience/bakkt/responsibilities.json')
      .subscribe((data: string[]) => {
        this.bakktResponsibilities = data;
      });
    this.http.get<string[]>('https://portfolio-website-e40e5-default-rtdb.firebaseio.com/profile/professionalExperience/uniteDigital/responsibilities.json')
      .subscribe((data: string[]) => {
        this.uniteDigitalResponsibilities = data;
      });
    this.http.get<string[]>('https://portfolio-website-e40e5-default-rtdb.firebaseio.com/profile/professionalExperience/selfEmployed/responsibilities.json')
      .subscribe((data: string[]) => {
        this.selfEmployedResponsibilities = data;
      }); 
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