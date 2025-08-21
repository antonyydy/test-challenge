import { Page, Locator, expect } from "@playwright/test";

export class ListForTheBestTeam {
  readonly page: Page;
  readonly logo: Locator;
  readonly menuOptionsTopTeam: Locator;
  readonly playerOblak: Locator;
  readonly playerVanDijk: Locator;
  readonly playerKroos: Locator;
  readonly playerSergioRamos: Locator;
  readonly playerRobertson: Locator;
  readonly playerKimmich: Locator;
  readonly playerMessi: Locator;
  readonly playerSanchoRM: Locator;
  readonly playerSanchoLM: Locator;
  readonly playerDeBruyne: Locator;
  readonly playerCristianoRonaldo: Locator;
  
  constructor(page: Page) {
    this.page = page;
    this.logo = page.locator('div').nth(2);
    this.menuOptionsTopTeam = page.getByRole('link', { name: 'Top team' });
    this.playerOblak = page.getByText('J. Oblak');
    this.playerVanDijk = page.getByText('V. van Dijk');
    this.playerKroos = page.getByText('T. Kroos');
    this.playerSergioRamos = page.getByText('Sergio Ramos');
    this.playerRobertson = page.getByText('A. Robertson');
    this.playerKimmich = page.getByText('J. Kimmich');
    this.playerMessi = page.getByText('L. Messi');
    this.playerSanchoRM = page.getByText('J. Sancho').nth(1)
    this.playerSanchoLM = page.getByText('J. Sancho').first();
    this.playerDeBruyne = page.getByText('K. De Bruyne');
    this.playerCristianoRonaldo = page.getByText('Cristiano Ronaldo');

   
}


async goto() {
    await this.page.goto("/");
    await this.logo.click();
  }

async gotoSearchTopPlayersPage() {
await this.menuOptionsTopTeam.click();
}

async bestTeamCards() {
    await expect(this.playerOblak).toBeVisible();
    await expect(this.playerVanDijk).toBeVisible();
    await expect(this.playerKroos).toBeVisible();    
    await expect(this.playerSergioRamos).toBeVisible();
    await expect(this.playerRobertson).toBeVisible();
    await expect(this.playerKimmich).toBeVisible();
    await expect(this.playerMessi).toBeVisible();   
    await expect(this.playerSanchoRM).toBeVisible();
    await expect(this.playerSanchoLM).toBeVisible();
    await expect(this.playerDeBruyne).toBeVisible();
    await expect(this.playerCristianoRonaldo).toBeVisible();

}

}