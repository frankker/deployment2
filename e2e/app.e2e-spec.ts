import { Deployment2Page } from './app.po';

describe('deployment2 App', function() {
  let page: Deployment2Page;

  beforeEach(() => {
    page = new Deployment2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
