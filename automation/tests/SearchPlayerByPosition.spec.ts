import { test } from "../fixtures/test-fixtures";

test.describe("Search Player by Position", () => {
  test("Search player by position should return Lewandowski as first option", async ({ searchPlayerByPosition }) => {
   await searchPlayerByPosition.goto();
   await searchPlayerByPosition.gotoSearchPlayerPage();
   await searchPlayerByPosition.selectPosition(); 
   await searchPlayerByPosition.SearchByPosition();
   await searchPlayerByPosition.TableUpdated(); 
  });
});
