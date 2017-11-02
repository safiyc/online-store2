import { Component, OnInit } from '@angular/core';
import { Album } from '../album.model';
import { Router } from '@angular/router';

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

  goToDetailPage(clickedAlbum: Album) {
    this.router.navigate(['albums', clickedAlbum.id]);
  };

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
