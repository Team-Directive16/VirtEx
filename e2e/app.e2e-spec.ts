import { VirtExPage } from './app.po';

describe('virt-ex App', function() {
  let page: VirtExPage;

  beforeEach(() => {
    page = new VirtExPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
