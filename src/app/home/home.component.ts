import { Component } from '@angular/core';
import { AboutComponent } from '../about/about.component';
import { ServicesComponent } from '../services/services.component';
import { ProjectsComponent } from '../projects/projects.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
