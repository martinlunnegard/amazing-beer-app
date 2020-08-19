export default async function fetchData() {
  const res = await fetch("https://api.punkapi.com/v2/beers");
  const beers = await res.json();
  console.log(beers, 'beers'); 
  return beers;
}


