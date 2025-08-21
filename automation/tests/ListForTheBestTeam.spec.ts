import { test } from "../fixtures/test-fixtures";

test.describe("List For The Best Team", () => {
  test("The Top Teams page should return the top team correctly.", async ({ listForTheBestTeam }) => {
    await listForTheBestTeam.goto();
    await listForTheBestTeam.gotoSearchTopPlayersPage();
    await listForTheBestTeam.bestTeamCards();
  });
});
