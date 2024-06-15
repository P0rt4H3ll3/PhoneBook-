// npx playwright test
//integration
//unit
//lazy git
//learngitbranching
/*
import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:5173/");
});

// End to End test

test.describe("Name to Search", () => {
  test("should search the name and display name and number", async ({
    page,
  }) => {
    const NAME_TO_SEARCH = "Ray Bloom";
    const SEARCH_RESULT = ["Ray Bloom", "0170/31952070"];
    // create a new todo locator
    const searchNameTest = page.getByLabel("Search", { exact: true });

    // Create 1st todo.
    await searchNameTest.fill(NAME_TO_SEARCH);
    //await searchNameTest.press("Enter");

    // Make sure the list only has one todo item.
    await expect(page.getByRole("cell")).toHaveText(SEARCH_RESULT);
  });
}),
  //

  //
  test.describe("Alert no Entry", () => {
    test("should display error message when there is no search match", async ({
      page,
    }) => {
      const RANDOM_STRING = "abcdefghi";
      const SEARCH_RESULT = "Entry could not be found";

      const AlertTest = page.getByLabel("Search", { exact: true });

      await AlertTest.fill(RANDOM_STRING);

      await expect(page.getByRole("alert")).toHaveText(SEARCH_RESULT);
    });
  });

//Data test ? is that the right word ?
*/

import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:5173/");
});

test.describe("Empty Search ", () => {
  test("should display all Entries if nothing is searched for ", async ({
    page,
  }) => {
    const EMPTY_STRING = "";
    const SEARCH_RESULT = 120; // lenght of database array

    await page.getByLabel("Search", { exact: true }).click();

    //attribute child-item-count:"120"
    // Property childrenCount: 120
    const getTable = await page.getByRole("table", { exact: true });
    console.log(getTable);
    const children = await getTable.getAttribute("child-item-count");

    await expect(children).toBe(120);
  });
});
