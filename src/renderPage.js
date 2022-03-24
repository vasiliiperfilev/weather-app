import renderLeftColumn from './renderLeftColumn';

function renderPage() {
  const main = document.createElement('main');
  const topDiv = document.createElement('div');
  topDiv.classList.add('top');
  const leftColumn = renderLeftColumn();
  topDiv.append(leftColumn);
  main.append(topDiv);
  return main;
}

export default renderPage;
