import { Page, Locator, expect } from "@playwright/test";


export class SearchPlayerByTeam {
readonly page: Page;
readonly logo: Locator;
readonly menuOptionsSearchPlayer: Locator;
readonly inputTeamField: Locator;
readonly searchButton: Locator;
readonly tableRows: Locator;
readonly playerTeam: Locator;

constructor(page: Page) {
this.page = page;
this.logo = page.locator('div').nth(2);
this.menuOptionsSearchPlayer = page.getByRole('link', { name: 'Search player' });
this.inputTeamField = page.getByRole('textbox', { name: 'FC Barcelona' });
this.searchButton = page.getByRole('button', { name: 'Search' });
this.tableRows = page.locator('.player').first();
this.playerTeam = page.getByText('FC Barcelona').first();
}


async goto() {
    await this.page.goto("/");
    await this.logo.click();

  }
async gotoSearchPlayerPage() {
    await this.menuOptionsSearchPlayer.click();
}

async inputTeam(team: string) {
await this.inputTeamField.click();
await this.inputTeamField.fill(team);
}

async SearchByTeam() {
await this.searchButton.click();
}

async TableUpdated() {
    await expect(this.tableRows.first()).toBeVisible();   
    await expect(this.playerTeam).toBeVisible();
  }


}