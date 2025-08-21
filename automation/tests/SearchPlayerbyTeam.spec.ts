import { test } from "../fixtures/test-fixtures";

test.describe("Search Player by Team", () => {
  test("Search player by team should return Barcelona as first option", async ({ searchPlayerByTeam }) => {
   await searchPlayerByTeam.goto();
   await searchPlayerByTeam.gotoSearchPlayerPage();
   await searchPlayerByTeam.inputTeam('Barcelona'); 
   await searchPlayerByTeam.SearchByTeam();
   await searchPlayerByTeam.TableUpdated(); 
  });
});
