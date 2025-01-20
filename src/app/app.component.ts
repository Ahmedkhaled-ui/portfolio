import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ProjectsComponent } from './projects/projects.component';
import { FooterComponent } from './footer/footer.component';
import { DetailsProjectComponent } from './details-project/details-project.component';
import { ContactComponent } from './contact/contact.component';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NavComponent } from './nav/nav.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    ProjectsComponent,
    FooterComponent,
    DetailsProjectComponent,
    ContactComponent,
    NavComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'portfoilo';
  ngOnInit(): void {
    initFlowbite();
  }
}

@Injectable({
  providedIn: 'root',
})
export class FlowbiteService {
  constructor(@Inject(PLATFORM_ID) private platformId: any) {}

  loadFlowbite(callback: (flowbite: any) => void) {
    if (isPlatformBrowser(this.platformId)) {
      import('flowbite').then((flowbite) => {
        callback(flowbite);
      });
    }
  }
}
