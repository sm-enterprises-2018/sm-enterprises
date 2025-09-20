import { Component } from '@angular/core';
import { NavComponent } from "./nav/nav.component";
import { HomeComponent } from "./home/home.component";
import { AboutusComponent } from "./aboutus/aboutus.component";
import { ContactusComponent } from "./contactus/contactus.component";
import { FooterComponent } from "./footer/footer.component";
import { CategoryComponent } from "./category/category.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavComponent, HomeComponent,  AboutusComponent, ContactusComponent, FooterComponent, CategoryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Aps_website';
}
