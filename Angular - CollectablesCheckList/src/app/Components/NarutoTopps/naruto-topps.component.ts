import { Component } from '@angular/core';
import { Title } from "@angular/platform-browser";
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { CommonModule } from '@angular/common';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { FormsModule } from '@angular/forms';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import NarutoToppsData from './NarutoToppsData';
import { NzTableModule } from 'ng-zorro-antd/table';

@Component({
  selector: 'app-naruto-topps',
  standalone: true,
  imports: [NzTableModule, CommonModule, NzGridModule, NzButtonModule, NzCheckboxModule, FormsModule, NzToolTipModule, NzSwitchModule, NzInputModule, NzIconModule, FormsModule],
  templateUrl: './naruto-topps.component.html',
  styleUrl: './naruto-topps.component.css'
})

export class NarutoToppsComponent {

  NarutoToppsData = NarutoToppsData;
  LocalStorageName = "NarutoToppsCollected";
  ShowOnlyPendingCards: boolean = false;
  ImageFullScreenShow: boolean = false;
  ShowGrid: boolean = true;
  FullScreenImageLink: string = "";
  FullScreenBackImageLink: string = "";
  FullScreenRotateDegree: number = 0;
  searchText: string = "";

  constructor(private _Title: Title) {
    this._Title.setTitle("Naruto - Topps");
    this.UpdateCollectedData();
  }

  ShowCard(carddata: any) {
    if (!this.ShowOnlyPendingCards && !this.searchText) {
      return true;
    }
    return (!this.ShowOnlyPendingCards || !carddata.isCollected) && (carddata.textOnCard + " " + carddata.cardNumber).toLowerCase().includes(this.searchText.toLowerCase());
  }

  ImageFullScreen(imageLink: string, backImageLink: string) {
    this.ImageFullScreenShow = true;
    this.FullScreenImageLink = imageLink;
    this.FullScreenBackImageLink = backImageLink;
    this.FullScreenRotateDegree = 0;
  }

  FullScreenRotateLeft() {
    this.FullScreenRotateDegree -= 90;
  }

  FullScreenRotateRight() {
    this.FullScreenRotateDegree += 90;
  }

  FilpFullScreenImage() {
    var temp = this.FullScreenImageLink;
    this.FullScreenImageLink = this.FullScreenBackImageLink;
    this.FullScreenBackImageLink = temp;
  }

  CloseFulLScreenImage() {
    this.ImageFullScreenShow = false;
    this.FullScreenRotateDegree = 0;
  }

  getCollectedCardsCount() {
    return this.NarutoToppsData.baseCardsRolePlayingCards.filter(x => x.isCollected).length +
      this.NarutoToppsData.baseCardsSpawnCards.filter(x => x.isCollected).length +
      this.NarutoToppsData.baseCardsLightAttack.filter(x => x.isCollected).length +
      this.NarutoToppsData.baseCardsLiveAction.filter(x => x.isCollected).length +
      this.NarutoToppsData.baseCardsChakraCard.filter(x => x.isCollected).length +
      this.NarutoToppsData.baseCardsDefenseCard.filter(x => x.isCollected).length +
      this.NarutoToppsData.baseCardsExtensionActionScene.filter(x => x.isCollected).length +
      this.NarutoToppsData.ulitimaCardsScodix.filter(x => x.isCollected).length +
      this.NarutoToppsData.insertCards.filter(x => x.isCollected).length +
      this.NarutoToppsData.rareCardsCharacterBIO.filter(x => x.isCollected).length +
      this.NarutoToppsData.limitedEditionCards.filter(x => x.isCollected).length +
      this.NarutoToppsData.redCrystalCards.filter(x => x.isCollected).length +
      this.NarutoToppsData.thunderboltThemeCards.filter(x => x.isCollected).length +
      this.NarutoToppsData.jetBlackThemeCards.filter(x => x.isCollected).length +
      this.NarutoToppsData.fireIceThemeCards.filter(x => x.isCollected).length +
      this.NarutoToppsData.tacticCards.filter(x => x.isCollected).length +
      this.NarutoToppsData.unknownCards.filter(x => x.isCollected).length +
      this.NarutoToppsData.diecutCards.filter(x => x.isCollected).length
  }

  getTotalCards() {
    return this.NarutoToppsData.baseCardsRolePlayingCards.length +
      this.NarutoToppsData.baseCardsSpawnCards.length +
      this.NarutoToppsData.baseCardsLightAttack.length +
      this.NarutoToppsData.baseCardsLiveAction.length +
      this.NarutoToppsData.baseCardsChakraCard.length +
      this.NarutoToppsData.baseCardsDefenseCard.length +
      this.NarutoToppsData.baseCardsExtensionActionScene.length +
      this.NarutoToppsData.ulitimaCardsScodix.length +
      this.NarutoToppsData.insertCards.length +
      this.NarutoToppsData.rareCardsCharacterBIO.length +
      this.NarutoToppsData.limitedEditionCards.length +
      this.NarutoToppsData.redCrystalCards.length +
      this.NarutoToppsData.thunderboltThemeCards.length +
      this.NarutoToppsData.jetBlackThemeCards.length +
      this.NarutoToppsData.fireIceThemeCards.length +
      this.NarutoToppsData.tacticCards.length +
      this.NarutoToppsData.unknownCards.length +
      this.NarutoToppsData.diecutCards.length
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
    allCollectedIds = allCollectedIds.concat(this.NarutoToppsData.insertCards.filter(x => x.isCollected).map(x => x.id));
    allCollectedIds = allCollectedIds.concat(this.NarutoToppsData.rareCardsCharacterBIO.filter(x => x.isCollected).map(x => x.id));
    allCollectedIds = allCollectedIds.concat(this.NarutoToppsData.limitedEditionCards.filter(x => x.isCollected).map(x => x.id));
    allCollectedIds = allCollectedIds.concat(this.NarutoToppsData.redCrystalCards.filter(x => x.isCollected).map(x => x.id));
    allCollectedIds = allCollectedIds.concat(this.NarutoToppsData.thunderboltThemeCards.filter(x => x.isCollected).map(x => x.id));
    allCollectedIds = allCollectedIds.concat(this.NarutoToppsData.jetBlackThemeCards.filter(x => x.isCollected).map(x => x.id));
    allCollectedIds = allCollectedIds.concat(this.NarutoToppsData.fireIceThemeCards.filter(x => x.isCollected).map(x => x.id));
    allCollectedIds = allCollectedIds.concat(this.NarutoToppsData.tacticCards.filter(x => x.isCollected).map(x => x.id));
    allCollectedIds = allCollectedIds.concat(this.NarutoToppsData.unknownCards.filter(x => x.isCollected).map(x => x.id));
    allCollectedIds = allCollectedIds.concat(this.NarutoToppsData.diecutCards.filter(x => x.isCollected).map(x => x.id));
    localStorage.setItem(this.LocalStorageName, JSON.stringify(allCollectedIds));
  }

  UpdateCollectedData() {
    let allCollectedIds: Array<string> = JSON.parse(localStorage.getItem(this.LocalStorageName) || "[]");
    this.NarutoToppsData.baseCardsRolePlayingCards.forEach(card => { if (allCollectedIds.includes(card.id)) { card.isCollected = true; } });
    this.NarutoToppsData.baseCardsSpawnCards.forEach(card => { if (allCollectedIds.includes(card.id)) { card.isCollected = true; } });
    this.NarutoToppsData.baseCardsLightAttack.forEach(card => { if (allCollectedIds.includes(card.id)) { card.isCollected = true; } });
    this.NarutoToppsData.baseCardsLiveAction.forEach(card => { if (allCollectedIds.includes(card.id)) { card.isCollected = true; } });
    this.NarutoToppsData.baseCardsChakraCard.forEach(card => { if (allCollectedIds.includes(card.id)) { card.isCollected = true; } });
    this.NarutoToppsData.baseCardsDefenseCard.forEach(card => { if (allCollectedIds.includes(card.id)) { card.isCollected = true; } });
    this.NarutoToppsData.baseCardsExtensionActionScene.forEach(card => { if (allCollectedIds.includes(card.id)) { card.isCollected = true; } });
    this.NarutoToppsData.ulitimaCardsScodix.forEach(card => { if (allCollectedIds.includes(card.id)) { card.isCollected = true; } });
    this.NarutoToppsData.insertCards.forEach(card => { if (allCollectedIds.includes(card.id)) { card.isCollected = true; } });
    this.NarutoToppsData.rareCardsCharacterBIO.forEach(card => { if (allCollectedIds.includes(card.id)) { card.isCollected = true; } });
    this.NarutoToppsData.limitedEditionCards.forEach(card => { if (allCollectedIds.includes(card.id)) { card.isCollected = true; } });
    this.NarutoToppsData.redCrystalCards.forEach(card => { if (allCollectedIds.includes(card.id)) { card.isCollected = true; } });
    this.NarutoToppsData.thunderboltThemeCards.forEach(card => { if (allCollectedIds.includes(card.id)) { card.isCollected = true; } });
    this.NarutoToppsData.jetBlackThemeCards.forEach(card => { if (allCollectedIds.includes(card.id)) { card.isCollected = true; } });
    this.NarutoToppsData.fireIceThemeCards.forEach(card => { if (allCollectedIds.includes(card.id)) { card.isCollected = true; } });
    this.NarutoToppsData.tacticCards.forEach(card => { if (allCollectedIds.includes(card.id)) { card.isCollected = true; } });
    this.NarutoToppsData.unknownCards.forEach(card => { if (allCollectedIds.includes(card.id)) { card.isCollected = true; } });
    this.NarutoToppsData.diecutCards.forEach(card => { if (allCollectedIds.includes(card.id)) { card.isCollected = true; } });
  }
}
