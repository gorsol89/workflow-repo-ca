import { test, expect } from "@playwright/test";

const EMAIL = process.env.E2E_EMAIL || "";
const PASSWORD = process.env.E2E_PASSWORD || "";

test("logs in successfully with env credentials", async ({ page }) => {
  await page.goto("/login/");
  await page.getByLabel(/email|e-post/i).fill(EMAIL);
  await page.getByLabel(/password|passord/i).fill(PASSWORD);
  await page.getByRole("button", { name: /log in|logg inn|sign in/i }).click();

  // success = left the login page
  await expect(page).not.toHaveURL(/login/i);
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
});

test("shows an error for invalid credentials", async ({ page }) => {
  await page.goto("/login/");
  await page.getByLabel(/email|e-post/i).fill("nope@example.com");
  await page.getByLabel(/password|passord/i).fill("wrong-password-123");
  await page.getByRole("button", { name: /log in|logg inn|sign in/i }).click();

  const error = page
    .getByRole("alert")
    .or(page.getByText(/invalid|incorrect|error|feil/i));
  await expect(error).toBeVisible();
});
