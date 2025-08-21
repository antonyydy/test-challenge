import { Page, Locator, expect } from "@playwright/test";

export class ListForTheBestPlayers {
  readonly page: Page;
  readonly logo: Locator;
  readonly menuOptionsTopPlayers: Locator;
  readonly topXfield: Locator;
  readonly searchButton: Locator;
  readonly paginationUpdate: Locator;
  
  constructor(page: Page) {
    this.page = page;
    this.logo = page.locator('div').nth(2);
    this.menuOptionsTopPlayers = page.getByRole('link', { name: 'Top players' });
    this.topXfield = page.locator('div').filter({ hasText: /^TOP X35102550100$/ }).getByRole('combobox');
    this.searchButton = page.getByRole('button', { name: 'Search' });
    this.paginationUpdate = page.locator('div').filter({ hasText: /^25$/ });  
}


async goto() {
    await this.page.goto("/");
    await this.logo.click();
  }

async gotoSearchTopPlayersPage() {
await this.menuOptionsTopPlayers.click();
}

async selectTopX() {
await this.topXfield.click();
await this.topXfield.selectOption("100");
}

async SearchByTopX() {
await this.searchButton.click();
}

async pagination() {
await expect(this.paginationUpdate).toBeVisible();
  }

}