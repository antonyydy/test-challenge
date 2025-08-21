import { test } from "../fixtures/test-fixtures";

test.describe("Search Player by Name", () => {
  test("Search player by name should return Neymar as first option", async ({ searchPlayerByName }) => {
   await searchPlayerByName.goto();
   await searchPlayerByName.gotoSearchPlayerPage();
   await searchPlayerByName.inputName('Neymar'); 
   await searchPlayerByName.SearchByName();
   await searchPlayerByName.TableUpdated(); 
  });
});





