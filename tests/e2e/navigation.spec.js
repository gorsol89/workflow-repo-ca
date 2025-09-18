import { test, expect } from "@playwright/test";

test("home → first venue → details shows 'Venue details'", async ({ page }) => {
  await page.goto("/");

  const firstVenueLink = page
    .locator('#venue-list a, [data-testid="venue-card"] a, a[href*="venue"]')
    .first();
  await firstVenueLink.waitFor();
  await firstVenueLink.click();

  const detailsHeading = page.getByRole("heading", { name: /venue details/i });
  await expect(detailsHeading).toBeVisible();
});
