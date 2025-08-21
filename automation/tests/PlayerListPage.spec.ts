import { test } from "../fixtures/test-fixtures";

test.describe("Player List Page", () => {
  test("The Player List page should load correctly.", async ({ playerListPage }) => {
    await playerListPage.goto();
    await playerListPage.headerPlayerList();
    await playerListPage.descriptionPlayerList();
    await playerListPage.cardPlayer();
    await playerListPage.pagination();
    await playerListPage.menuOptions();



    
  });
});
