import { XlinusAPPPage } from './app.po';

describe('xlinus-app App', () => {
  let page: XlinusAPPPage;

  beforeEach(() => {
    page = new XlinusAPPPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
