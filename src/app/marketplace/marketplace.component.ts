import { Component, OnInit } from '@angular/core';
import { Album } from '../album.model';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css']
})

export class MarketplaceComponent implements OnInit {
  albums: Album[] = [
    new Album("Pulse", "Pink Floyd", "A live album by the English progressive rock band.", 1),
    new Album("Funhouse", "The Stooges", "The second album from an American rock band.", 2)
  ];
  constructor() { }

  ngOnInit() {
  }

}
