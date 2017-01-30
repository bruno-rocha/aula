import { AulaPage } from './app.po';

describe('aula App', function() {
  let page: AulaPage;

  beforeEach(() => {
    page = new AulaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
