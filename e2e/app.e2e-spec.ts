import { BDRVisualizationPage } from './app.po';

describe('bdrvisualization App', function() {
  let page: BDRVisualizationPage;

  beforeEach(() => {
    page = new BDRVisualizationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
