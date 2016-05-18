export class TourOfHeroesPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('tour-of-heroes-app h1')).getText();
  }
}
