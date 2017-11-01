import { OnlineStore2Page } from './app.po';

describe('online-store2 App', () => {
  let page: OnlineStore2Page;

  beforeEach(() => {
    page = new OnlineStore2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
