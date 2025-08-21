import { test } from "../fixtures/test-fixtures";

test.describe("List For The Best Players", () => {
  test("The Top Players page should return the top X correctly.", async ({ listForTheBestPlayers }) => {
    await listForTheBestPlayers.goto();
    await listForTheBestPlayers.gotoSearchTopPlayersPage();
    await listForTheBestPlayers.selectTopX();
    await listForTheBestPlayers.SearchByTopX();
    await listForTheBestPlayers.pagination();
    
  });
});
