import { test as base } from "@playwright/test";
import { PlayerListPage } from "../pages/PlayerListPage";
import { SearchPlayerByName } from "../pages/SearchPlayerByName";
import { SearchPlayerByTeam } from "../pages/SearchPlayerByTeam";
import { SearchPlayerByLeague } from "../pages/SearchPlayerByLeague";
import { SearchPlayerByNationality } from "../pages/SearchPlayerByNationality";
import { SearchPlayerByPosition } from "../pages/SearchPlayerByPosition";
import { ListForTheBestPlayers } from "../pages/ListForTheBestPlayers";
import { ListForTheBestTeam } from "../pages/ListForTheBestTeam";

type MyFixtures = {
  playerListPage: PlayerListPage;
  searchPlayerByName: SearchPlayerByName;
  searchPlayerByTeam: SearchPlayerByTeam;
  searchPlayerByLeague: SearchPlayerByLeague;
  searchPlayerByNationality: SearchPlayerByNationality;
  searchPlayerByPosition: SearchPlayerByPosition;
  listForTheBestPlayers: ListForTheBestPlayers;
  listForTheBestTeam: ListForTheBestTeam;
};

export const test = base.extend<MyFixtures>({
  playerListPage: async ({ page }, use) => {
    const playerListPage = new PlayerListPage(page);
    await use(playerListPage);
  },

  searchPlayerByName: async ({ page }, use) => {
    const searchPlayerByName = new SearchPlayerByName(page);
    await use(searchPlayerByName);
  },

  searchPlayerByTeam: async ({ page }, use) => {
    const searchPlayerByTeam = new SearchPlayerByTeam(page);
    await use(searchPlayerByTeam);
  },
  searchPlayerByLeague: async ({ page }, use) => {
    const searchPlayerByLeague = new SearchPlayerByLeague(page);
    await use(searchPlayerByLeague);
  },
  searchPlayerByNationality: async ({ page }, use) => {
    const searchPlayerByNationality = new SearchPlayerByNationality(page);
    await use(searchPlayerByNationality);
  },
  searchPlayerByPosition: async ({ page }, use) => {
    const searchPlayerByPosition = new SearchPlayerByPosition(page);
    await use(searchPlayerByPosition);
  },
  listForTheBestPlayers: async ({ page }, use) => {
    const listForTheBestPlayers = new ListForTheBestPlayers(page);
    await use(listForTheBestPlayers);
  },
  listForTheBestTeam: async ({ page }, use) => {
    const listForTheBestTeam = new ListForTheBestTeam(page);
    await use(listForTheBestTeam);
  },
});

export { expect } from "@playwright/test";
