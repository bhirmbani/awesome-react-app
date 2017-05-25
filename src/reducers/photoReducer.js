const initialState = [];

const photoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_PHOTOS_SUCCESS': {
      const photos = action.payload.map(photo => {
        return {
          photo_id: photo.id,
          photographer: photo.photographer,
          url: photo.url
        }
      });

      const newState = photos
      return newState;
    }
    case 'ADD_PHOTO_SUCCESS': {
      const id = Math.max(...state.map(photo => photo.id)) + 1;
      const newPhoto = { ...action.payload, id };
      const newPhotos = [ ...state, newPhoto ];
      return newPhotos;
    }
    default:
      return state;

  }
}

export default photoReducer;