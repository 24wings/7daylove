import { DaylovePublicPage } from './app.po';

describe('daylove-public App', () => {
  let page: DaylovePublicPage;

  beforeEach(() => {
    page = new DaylovePublicPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
