import { Component } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  standalone: true,
  imports: [],
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.css'
})
export class AboutusComponent {

description: string = ``;
mission: string = `To provide exceptional value and foster long-term relationships through our commitment to excellence.`;
vision: string = `To be a leader in our industry by setting standards of quality, innovation, and trust.`;


}
