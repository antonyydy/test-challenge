import { Page, Locator, expect } from "@playwright/test";

export class PlayerListPage {
  readonly page: Page;
  readonly logo: Locator;
  readonly playerList: Locator;
  readonly pageDescription: Locator;
  readonly cardPlayerName: Locator;
  readonly cardPlayerClub: Locator;
  readonly cardPlayerAge: Locator;
  readonly cardPlayerCurrentPosition: Locator;
  readonly paginationList: Locator;
  readonly menuOptionsPlayerList: Locator;
  readonly menuOptionsSearchPlayer: Locator;
  readonly menuOptionsTopPlayers: Locator;
  readonly menuOptionsTopTeam: Locator;
  
  constructor(page: Page) {
    this.page = page;
    this.logo = page.locator('div').nth(2);
    this.playerList = page.getByText('Player List').first();
    this.pageDescription = page.getByText('Navigate through the list of');
    this.cardPlayerName = page.getByText('Lionel Andrés Messi Cuccittini');
    this.cardPlayerClub = page.getByText('Club').first();
    this.cardPlayerAge = page.getByText('Age').first();
    this.cardPlayerCurrentPosition = page.getByText('Current Position').first();
    this.paginationList = page.getByText('First|Previous123...3789Next|');
    this.menuOptionsPlayerList = page.getByText('Player List').nth(1);
    this.menuOptionsSearchPlayer = page.getByRole('link', { name: 'Search player' });
    this.menuOptionsTopPlayers = page.getByRole('link', { name: 'Top players' });
    this.menuOptionsTopTeam = page.getByRole('link', { name: 'Top team' });
  }


async goto() {
    await this.page.goto("/");
    await this.logo.click();

  }

async headerPlayerList() {
    await expect(this.playerList).toBeVisible({ timeout: 5000 });
}

async descriptionPlayerList() {
  await expect(this.pageDescription).toBeVisible({ timeout: 5000 }); 
}

async cardPlayer() {
await expect(this.cardPlayerName).toBeVisible({ timeout: 5000 });
await expect(this.cardPlayerClub).toBeVisible({ timeout: 5000 });
await expect(this.cardPlayerAge).toBeVisible({ timeout: 5000 });
await expect(this.cardPlayerCurrentPosition).toBeVisible({ timeout: 5000 });
}

async pagination() {
await expect(this.paginationList).toBeVisible({ timeout: 5000 });
}

async menuOptions() {
await expect(this.menuOptionsPlayerList).toBeVisible({ timeout: 5000 });
await expect(this.menuOptionsSearchPlayer).toBeVisible({ timeout: 5000 });
await expect(this.menuOptionsTopPlayers).toBeVisible({ timeout: 5000 });
await expect(this.menuOptionsTopTeam).toBeVisible({ timeout: 5000 });
}


}