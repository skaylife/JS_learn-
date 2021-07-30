const menuLoaded = (newMenu) => {
  return {
    type: 'MENU_LOADED',
    payload: newMenu
  };
}

const menuRequested = () => {
  return {
    type: 'MENU_REQUSTED'
  };
}

export {
  menuLoaded,
  menuRequested
};