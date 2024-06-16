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
    //hardcoded:  mocking the data to ensure the test is reliable

    // create a new search locator
    const searchNameTest = page.getByLabel("Search", { exact: true });

    // Create input for searchname.
    await searchNameTest.fill(NAME_TO_SEARCH);

    // Make sure the list only has the right answere.
    await expect(page.getByRole("cell")).toHaveText(SEARCH_RESULT);
  });
}),
  test.describe("only one result  ", () => {
    test("should display single Entries if searched for Name with only single entry", async ({
      page,
      browserName,
    }) => {
      test.skip(browserName === "webkit", "still working on this one ");
      const NAME_TO_SEARCH = "Ray Bloom"; // lenght of database array
      await page.getByLabel("Search", { exact: true }).fill(NAME_TO_SEARCH);
      const rows = await page.getByRole("row", { exact: true }).all();
      await expect(rows.length).toBe(1);
    });
  });

//

//
test.describe("Alert no match found", () => {
  test("should display error message when there is no search match", async ({
    page,
  }) => {
    const RANDOM_STRING = "abcdefghi";
    const SEARCH_RESULT = "Entry could not be found";

    //create a new search locator
    const AlertTest = page.getByLabel("Search", { exact: true });
    // create input for search name
    await AlertTest.fill(RANDOM_STRING);
    //make sure alert comes if no match
    await expect(page.getByRole("alert")).toHaveText(SEARCH_RESULT);
  });
});

test.describe("Empty Search ", () => {
  test("should display all Entries if nothing is searched for ", async ({
    page,
  }) => {
    const SEARCH_RESULT = 120; // hardcoded, next: dynamically checking the expected number of entries based on the mock data

    //create new search locator and click it === empty search
    await page.getByLabel("Search", { exact: true }).click();

    // if no searchstring, every entry should be displayed === all rows in the table
    // geht all rows
    const rows = await page.getByRole("row", { exact: true }).all();
    //length of array of rows should me max of 120
    await expect(rows.length).toBe(120);
  });
});

// hat geklappt aber 120 is erstmal hardcoded, besser wenn ich eine fest ein DB habe mit der ich dann die test immer mache, dann sind es immer so und so viele
//fixture und mock
