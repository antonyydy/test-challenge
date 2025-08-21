import { test } from "../fixtures/test-fixtures";

test.describe("Search Player by nationality", () => {
  test("Search player by nationality should return Neymar as first option", async ({ searchPlayerByNationality }) => {
   await searchPlayerByNationality.goto();
   await searchPlayerByNationality.gotoSearchPlayerPage();
   await searchPlayerByNationality.selectNationality(); 
   await searchPlayerByNationality.SearchByNationality();
   await searchPlayerByNationality.TableUpdated(); 
  });
});
