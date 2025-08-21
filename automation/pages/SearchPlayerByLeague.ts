import { Page, Locator, expect } from "@playwright/test";


export class SearchPlayerByLeague {
readonly page: Page;
readonly logo: Locator;
readonly menuOptionsSearchPlayer: Locator;
readonly leagueField: Locator;
readonly searchButton: Locator;
readonly tableRows: Locator;
readonly playerTeam: Locator;

constructor(page: Page) {
this.page = page;
this.logo = page.locator('div').nth(2);
this.menuOptionsSearchPlayer = page.getByRole('link', { name: 'Search player' });
this.leagueField = page.getByRole('combobox').first();
this.searchButton = page.getByRole('button', { name: 'Search' });
this.tableRows = page.locator('.player').first();
this.playerTeam = page.getByText('Manchester City').first();
}


async goto() {
    await this.page.goto("/");
    await this.logo.click();

  }
async gotoSearchPlayerPage() {
    await this.menuOptionsSearchPlayer.click();
}

async selectLeague() {
await this.leagueField.click();
await this.leagueField.selectOption('English Premier League');
}

async SearchByLeague() {
await this.searchButton.click();
}

async TableUpdated() {
    await expect(this.tableRows.first()).toBeVisible();   
    await expect(this.playerTeam).toBeVisible();
  }


}