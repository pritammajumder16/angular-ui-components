import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UiItems } from '../../constants/uiItems';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  public items = UiItems;
}
