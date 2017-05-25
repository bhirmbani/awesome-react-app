import axios from 'axios';

export const fetchPhotosSuccess = (movie) => {
  return {
    type: 'FETCH_PHOTOS_SUCCESS',
    payload: movie
  }
}

export const fetchPhotos = () => {
  return (dispatch) => {
    fetch('http://localhost:3000/photos/')
    .then(res => res.json())
    .then(data => dispatch(fetchPhotosSuccess(data)));
  }
}

export const addPhotoSuccess = (newPhoto) => ({
  type: 'ADD_PHOTO_SUCCESS',
  payload: newPhoto
})

export const addPhoto = (newPhoto) => {
  const newPhotoWithDate = { ...newPhoto, createdAt: new Date().toISOString(), updatedAt: '' }
  return (dispatch) => {
    axios.post(`http://localhost:3000/photos`, newPhotoWithDate)
    .then(res => dispatch(addPhotoSuccess(res.data)));
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