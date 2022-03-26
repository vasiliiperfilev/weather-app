import dataFetcher from './dataFetcher';
import renderDOM from './renderDOM';

async function createPage(city = 'Coquitlam') {
  const data = await dataFetcher.getWeatherDataSafe(city);
  document.querySelector('body').append(renderDOM({ city, ...data }));
  document.querySelector('.search-btn').addEventListener('click', (e) => {
    e.preventDefault();
    const newCity = document.querySelector('#city').value;
    createPage(newCity);
  });
}

export default createPage;
