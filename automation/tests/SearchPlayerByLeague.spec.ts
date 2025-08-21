import { test } from "../fixtures/test-fixtures";

test.describe("Search Player by League", () => {
  test("Search player by league should return Manchester City as first option", async ({ searchPlayerByLeague }) => {
   await searchPlayerByLeague.goto();
   await searchPlayerByLeague.gotoSearchPlayerPage();
   await searchPlayerByLeague.selectLeague(); 
   await searchPlayerByLeague.SearchByLeague();
   await searchPlayerByLeague.TableUpdated(); 
  });
});
