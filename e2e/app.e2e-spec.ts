import { HackdayHeroesPage } from './app.po';

describe('hackday-heroes App', function() {
  let page: HackdayHeroesPage;

  beforeEach(() => {
    page = new HackdayHeroesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
