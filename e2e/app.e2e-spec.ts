import { Angular2APIsPage } from './app.po';

describe('angular2-apis App', function() {
  let page: Angular2APIsPage;

  beforeEach(() => {
    page = new Angular2APIsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
