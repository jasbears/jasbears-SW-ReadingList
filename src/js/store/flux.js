const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      characters: [],
      planets: [],
      favorites: [],
      person: null,
      planet: null,
    },
    actions: {
      getCharacters: () => {
        fetch("https://swapi.dev/api/people/")
          .then((res) => res.json())
          .then((data) => setStore({ characters: data.results }))
          .catch((error) => console.log(error));
      },
      getPerson: (url) => {
        fetch(url)
          .then((response) => response.json())
          .then((data) => setStore({ person: data }))
          .catch((error) => console.log(error));
      },
      getPlanets: () => {
        fetch("https://swapi.dev/api/planets/")
          .then((res) => res.json())
          .then((data) => setStore({ planets: data.results }))
          .catch((error) => console.log(error));
      },
      getPlanet: (url) => {
        fetch(url)
          .then((response) => response.json())
          .then((data) => setStore({ planet: data }))
          .catch((error) => console.log(error));
      },
      addFavorite: (item) => {
        const { favorites } = getStore();
        if (favorites.find((fav) => fav === item)) {
          console.log("Found");
        } else {
          favorites.push(item);
          setStore({ favorites });
        }
      },
      filterFavorites: (item) => {
        const { favorites } = getStore();
        let filtered = favorites.filter((fav) => fav !== item);
        setStore({ favorites: filtered });
      },
    },
  };
};

export default getState;
