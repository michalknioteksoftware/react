/**
 * Server-side data layer. These functions are intended to be called from
 * Server Components or Route Handlers. They can be replaced with DB or API calls.
 */

export async function getExercises() {
  // Simulate async fetch (e.g. from CMS or API)
  await delay(50);
  return [
    { id: 1, title: "JSX & Components", description: "Create a new component that renders your name and a short bio." },
    { id: 2, title: "Props", description: "Turn the bio into a reusable component that receives data via props." },
    { id: 3, title: "State & Events", description: "Add a button that increments a counter and display the value on screen." },
    { id: 4, title: "Lists & Keys", description: "Render a list of your favourite movies from an array of objects." },
    { id: 5, title: "Conditional Rendering", description: "Show a message only when a piece of state is true (e.g. \"Dark mode on\")." },
  ];
}

export async function getMovies() {
  // Simulate async fetch (e.g. from API or database)
  await delay(80);
  return [
    { title: "Silver Horizon", description: "A skilled thief enters people's dreams to steal secrets and plant new ideas.", releaseDate: "2010-07-16", rating: 8.5 },
    { title: "Neon City", description: "A hacker discovers the world is a simulation and joins a rebellion against its controllers.", releaseDate: "1999-03-31", rating: 7.9 },
    { title: "Echoes of Time", description: "Explorers travel through a wormhole in space to save humanity from a dying Earth.", releaseDate: "2014-11-07", rating: 8.9 },
    { title: "Midnight Vigil", description: "Batman faces the Joker, a criminal mastermind determined to plunge Gotham into chaos.", releaseDate: "2008-07-18", rating: 8.2 },
    { title: "Whispers of the Forest", description: "A young girl becomes trapped in a mysterious spirit world and must find her way back.", releaseDate: "2001-07-20", rating: 9.1 },
  ];
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
