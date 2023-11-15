import { AppPage } from "./app.po";

describe("demo app", () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it("should display welcome message", async () => {
    page.navigateTo();
    expect(await page.getParagraphText()).toBe("ngx-slider");
  });
});
