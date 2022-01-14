import { createContext, useState } from "react";

const FavContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFav: (favoriteMeetup) => {},
  removeFav: (meetupid) => {},
  itemFav: (meetupid) => {},
});

export function FavContentProvider(props) {
  const [userfav, setUserFav] = useState([]);

  function addFavHandler(favoriteMeetup) {
    setUserFav((prevUserFav) => {
      return prevUserFav.concat(favoriteMeetup);
    });
  }

  function removeFavHandler(meetupId) {
    setUserFav((prevUserFav) => {
      return prevUserFav.filter((meetup) => meetup.id !== meetupId);
    });
  }

  function itemFavHandler(meetupId) {
    return userfav.some((meetup) => meetup.id === meetupId);
  }

  const context = {
    favorites: userfav,
    totalFavorites: userfav.length,
    addFav: addFavHandler,
    removeFav: removeFavHandler,
    itemFav: itemFavHandler,
  };

  return (
    <FavContext.Provider value={context}>{props.children}</FavContext.Provider>
  );
}

export default FavContext;
