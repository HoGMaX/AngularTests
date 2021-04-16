import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor() { }

  
  cardTitle = 'Maksim Hoha';
  cardSubTitle = 'Web developer(HTML, CSS, JS)';
  cardEmal = 'maksim.hoha@ukr.net';
  cardTelegramm = '@MaksimGoga';
  cardPhone = '+380 (97) 505 49 28';
  cardGithub = 'My GitHub';



  ngOnInit(): void {
  }

}
