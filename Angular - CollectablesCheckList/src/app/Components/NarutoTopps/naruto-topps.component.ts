import { Component } from '@angular/core';
import { Title } from "@angular/platform-browser";
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { CommonModule } from '@angular/common';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { FormsModule } from '@angular/forms';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import NarutoToppsData from './NarutoToppsData';

@Component({
  selector: 'app-naruto-topps',
  standalone: true,
  imports: [CommonModule, NzGridModule, NzButtonModule, NzCheckboxModule, FormsModule, NzToolTipModule],
  templateUrl: './naruto-topps.component.html',
  styleUrl: './naruto-topps.component.css'
})

export class NarutoToppsComponent {

  NarutoToppsData = NarutoToppsData;
  LocalStorageName = "NarutoToppsCollected"

  constructor(private _Title: Title) {
    this._Title.setTitle("Naruto - Topps");
    this.UpdateCollectedData();
    console.log("NarutoToppsData", NarutoToppsData);
  }

  isCollectedChanged() {
    let allCollectedIds: Array<string> = [];
    allCollectedIds = allCollectedIds.concat(this.NarutoToppsData.baseCardsRolePlayingCards.filter(x => x.isCollected).map(x => x.id));
    allCollectedIds = allCollectedIds.concat(this.NarutoToppsData.baseCardsSpawnCards.filter(x => x.isCollected).map(x => x.id));
    allCollectedIds = allCollectedIds.concat(this.NarutoToppsData.baseCardsLightAttack.filter(x => x.isCollected).map(x => x.id));
    allCollectedIds = allCollectedIds.concat(this.NarutoToppsData.baseCardsLiveAction.filter(x => x.isCollected).map(x => x.id));
    allCollectedIds = allCollectedIds.concat(this.NarutoToppsData.baseCardsChakraCard.filter(x => x.isCollected).map(x => x.id));
    allCollectedIds = allCollectedIds.concat(this.NarutoToppsData.baseCardsDefenseCard.filter(x => x.isCollected).map(x => x.id));
    allCollectedIds = allCollectedIds.concat(this.NarutoToppsData.baseCardsExtensionActionScene.filter(x => x.isCollected).map(x => x.id));
    allCollectedIds = allCollectedIds.concat(this.NarutoToppsData.ulitimaCardsScodix.filter(x => x.isCollected).map(x => x.id));
    localStorage.setItem(this.LocalStorageName, JSON.stringify(allCollectedIds));
  }

  UpdateCollectedData() {
    let allCollectedIds: Array<string> = JSON.parse(localStorage.getItem(this.LocalStorageName) || "[]");
    this.NarutoToppsData.baseCardsRolePlayingCards.forEach(card => {
      if (allCollectedIds.includes(card.id)) {
        card.isCollected = true;
      }
    });
    this.NarutoToppsData.baseCardsSpawnCards.forEach(card => {
      if (allCollectedIds.includes(card.id)) {
        card.isCollected = true;
      }
    });
    this.NarutoToppsData.baseCardsLightAttack.forEach(card => {
      if (allCollectedIds.includes(card.id)) {
        card.isCollected = true;
      }
    });
    this.NarutoToppsData.baseCardsLiveAction.forEach(card => {
      if (allCollectedIds.includes(card.id)) {
        card.isCollected = true;
      }
    });
    this.NarutoToppsData.baseCardsChakraCard.forEach(card => {
      if (allCollectedIds.includes(card.id)) {
        card.isCollected = true;
      }
    });
    this.NarutoToppsData.baseCardsDefenseCard.forEach(card => {
      if (allCollectedIds.includes(card.id)) {
        card.isCollected = true;
      }
    });
    this.NarutoToppsData.baseCardsExtensionActionScene.forEach(card => {
      if (allCollectedIds.includes(card.id)) {
        card.isCollected = true;
      }
    });
    this.NarutoToppsData.ulitimaCardsScodix.forEach(card => {
      if (allCollectedIds.includes(card.id)) {
        card.isCollected = true;
      }
    });
  }
}
