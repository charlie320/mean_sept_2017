import { Component, OnInit } from '@angular/core';
import { Player } from '../../player';
import { PlayerService } from '../../player.service';

@Component({
  selector: 'app-player-status',
  templateUrl: './player-status.component.html',
  styleUrls: ['./player-status.component.css']
})
export class PlayerStatusComponent implements OnInit {

  players: Player[];
  game: number = 1;
  // game1: boolean = true;
  // game2: boolean = false;
  // game3: boolean = false;

  constructor(private _playerService: PlayerService) { }

  ngOnInit() {
    this.getPlayers();
  }

  whichGame(game){
    if(game == 1){
      this.game = 1;
      // this.game1 = true;
      // this.game2 = false;
      // this.game3 = false;
      // return this.game1;
      return this.game;
    }
    if(game == 2){
      this.game = 2;
      // this.game1 = false;
      // this.game2 = true;
      // this.game3 = false;
      // return this.game2;
      return this.game;
    }
    if(game == 3){
      this.game = 3;
      // this.game1 = false;
      // this.game2 = false;
      // this.game3 = true;
      // return this.game3;
      return this.game;
    }
  }

  getPlayers() {
    this._playerService.index(players => this.players = players);
  }

  updatePlayerStatus(player, game, status) {
    if(game == 1){
      player.game1 = status;
      console.log(player.game1);
      return player;
    }
    else if(game == 2){
      player.game2 = status;
      console.log(player.game2);
      return player;
    }
    else if(game == 3){
      player.game3 = status;
      console.log(player.game3);
      return player;
    }
  }

}
