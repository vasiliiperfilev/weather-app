import listeners from './listeners';

function renderLeftColumn() {
  const leftColumn = document.createElement('div');
  leftColumn.classList.add('left');
  const searchForm = document.createElement('form');
  const label = document.createElement('label');
  label.for = 'city';
  const input = document.createElement('input');
  input.type = 'text';
  input.id = 'city';
  input.name = 'city';
  const searchBtn = document.createElement('button');
  searchBtn.innerText = 'Search';
  searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    listeners.searchListener();
  });
  label.append(input);
  searchForm.append(label, searchBtn);
  leftColumn.append(searchForm);
  return leftColumn;
}

export default renderLeftColumn;
