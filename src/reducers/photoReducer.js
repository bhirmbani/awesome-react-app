const initialState = [];

const photoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_PHOTOS_SUCCESS': {
      const photos = action.payload.map(photo => {
        return {
          photo_id: photo.id,
          photographer: photo.photographer,
          url: photo.src.tiny
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
    case 'GET_BY_PHOTOGRAPHER_SUCCESS': {
      const photos = action.payload.map(photo => {
        return {
          photo_id: photo.id,
          photographer: photo.photographer,
          url: photo.url
        }
      })
      const newState = photos;
      return newState;
    }

    case 'GET_FAVORITE_SUCCESS': {
      const favorite = action.payload.map(photo => {
        return {
          photo_id: photo.id,
          photographer: photo.photographer,
          url: photo.url
        }
      })
      const newState = favorite;
      return newState
    }

    case 'ADD_TO_FAVORITE_SUCCESS': {
      const id = Math.max(...state.map(photo => photo.id)) + 1;
      const newFavPhoto = { ...action.payload, id };
      const data = [ ...state, newFavPhoto ];
      return data;
    }

    case 'DEL_FAV_SUCCESS': {
      console.log(action.payload)
      console.log(state)
      // this.props.favoritePhotos.splice(photoId, 1)
      // const deleted = state.filter(data => data.id !== action.payload);
      const deleted = state.splice(action.payload.idx, 1);
      const newState = [ ...state ]
      return newState;
    }

    default:
      return state;

  }
}

export default photoReducer;