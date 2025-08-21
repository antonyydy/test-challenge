import { Page, Locator, expect } from "@playwright/test";


export class SearchPlayerByPosition {
readonly page: Page;
readonly logo: Locator;
readonly menuOptionsSearchPlayer: Locator;
readonly positionField: Locator;
readonly searchButton: Locator;
readonly tableRows: Locator;
readonly playerName: Locator;

constructor(page: Page) {
this.page = page;
this.logo = page.locator('div').nth(2);
this.menuOptionsSearchPlayer = page.getByRole('link', { name: 'Search player' });
this.positionField = page.getByRole('combobox').nth(2);
this.searchButton = page.getByRole('button', { name: 'Search' });
this.tableRows = page.locator('.player').first();
this.playerName = page.getByText('Robert Lewandowski');
}


async goto() {
    await this.page.goto("/");
    await this.logo.click();

  }
async gotoSearchPlayerPage() {
    await this.menuOptionsSearchPlayer.click();
}

async selectPosition() {
await this.positionField.click();
await this.positionField.selectOption('Striker');
}

async SearchByPosition() {
await this.searchButton.click();
}

async TableUpdated() {
    await expect(this.tableRows.first()).toBeVisible();   
    await expect(this.playerName).toBeVisible();
  }

}