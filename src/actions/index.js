import axios from 'axios';

export const fetchPhotosSuccess = (movie) => {
  return {
    type: 'FETCH_PHOTOS_SUCCESS',
    payload: movie
  }
}

export const fetchPhotos = (searchQuery) => {
  return (dispatch) => {
    fetch(`http://api.pexels.com/v1/search?query=${searchQuery}&per_page=24&page=1`, {
      headers: {
      'Authorization': '563492ad6f9170000100000143de09da7d704c1d67462c54f4d9a25e'
    }
    })
    .then(res => res.json())
    .then(data => dispatch(fetchPhotosSuccess(data.photos)));
  }
}

export const addPhotoSuccess = (newPhoto) => ({
  type: 'ADD_PHOTO_SUCCESS',
  payload: newPhoto
})

export const addPhoto = (newPhoto) => {
  const newPhotoWithDate = { ...newPhoto, createdAt: new Date().toISOString(), updatedAt: '' }
  return (dispatch) => {
    axios.post(`http://localhost:3000/favoritePhotos`, newPhotoWithDate)
    .then(res => dispatch(addPhotoSuccess(res.data)));
  }
}

export const getByPhotographerSuccess = (result) => ({
  type: 'GET_BY_PHOTOGRAPHER_SUCCESS',
  payload: result
})

export const getByPhotographer = (photographer) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/favoritePhotos/?photographer=${photographer}`)
    .then(res => res.json())
    .then(data => dispatch(getByPhotographerSuccess(data)));
  }
}

export const getFavoriteSuccess = (favorite) => ({
  type: 'GET_FAVORITE_SUCCESS',
  payload: favorite
})

export const getFavoritePhotos = () => {
  return (dispatch) => {
    fetch('http://localhost:3000/favoritePhotos')
    .then(res => res.json())
    .then(data => dispatch(getFavoriteSuccess(data)));
  }
}

export const addToFavoriteSuccess = (result) => ({
  type: 'ADD_TO_FAVORITE_SUCCESS',
  payload: result
})

export const addToFavorite = (photo) => {
  return (dispatch) => {
    axios.post(`http://localhost:3000/favoritePhotos`, photo)
    .then(res => dispatch(addToFavoriteSuccess(res.data)));
  }
}

export const delFavSuccess = (photoId, idx) => ({
 type: 'DEL_FAV_SUCCESS',
 payload: {photoId, idx}
})

export const deleteFavorite = (photoId, idx) => {
  return (dispatch) => {
    axios.delete(`http://localhost:3000/favoritePhotos/${photoId}`)
    .then(res => dispatch(delFavSuccess(photoId, idx)));
  }
}

export const editPhotoSuccess = (photoId, newPhoto) => ({
  type: 'EDIT_PHOTO_SUCCESS',
  payload: {photoId, newPhoto}
});

export const editPhoto = (photoId, newPhoto) => {
  return (dispatch) => {
    axios.patch(`http://localhost:3000/favoritePhotos/${photoId}`)
    .then(res => dispatch(editPhotoSuccess(photoId, newPhoto)));
  }
}

// export const addPost = newPost => (dispatch) => {
//   newPost.createdAt = new Date().toISOString();
//   fetch('http://localhost:1234/posts', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(newPost),
//   })
//     .then(res => res.json())
//     .then(data => dispatch(addPostSuccess(newPost)))
//     .catch(err => console.log(err));
// };