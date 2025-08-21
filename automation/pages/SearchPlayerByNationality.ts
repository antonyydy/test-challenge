import { Page, Locator, expect } from "@playwright/test";


export class SearchPlayerByNationality {
readonly page: Page;
readonly logo: Locator;
readonly menuOptionsSearchPlayer: Locator;
readonly nationalityField: Locator;
readonly searchButton: Locator;
readonly tableRows: Locator;
readonly playerName: Locator;

constructor(page: Page) {
this.page = page;
this.logo = page.locator('div').nth(2);
this.menuOptionsSearchPlayer = page.getByRole('link', { name: 'Search player' });
this.nationalityField = page.getByRole('combobox').nth(1);
this.searchButton = page.getByRole('button', { name: 'Search' });
this.tableRows = page.locator('.player').first();
this.playerName = page.getByText('Neymar da Silva Santos Júnior');
}


async goto() {
    await this.page.goto("/");
    await this.logo.click();

  }
async gotoSearchPlayerPage() {
    await this.menuOptionsSearchPlayer.click();
}

async selectNationality() {
await this.nationalityField.click();
await this.nationalityField.selectOption('Brazil');
}

async SearchByNationality() {
await this.searchButton.click();
}

async TableUpdated() {
    await expect(this.tableRows.first()).toBeVisible();   
    await expect(this.playerName).toBeVisible();
  }


}