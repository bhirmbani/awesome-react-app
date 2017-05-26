import React from 'react';
import { connect } from 'react-redux';
import { Card, Input } from 'semantic-ui-react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import store from '../store';
import { getFavoritePhotos, deleteFavorite } from '../actions';
import ButtonPrimary from './Button'
import EditPhoto from './EditPhoto'

const styles = {
  card: {
    width: 1200,
    margin: '50px auto'
  },
  container: {
    textAlign: 'center'
  }
};




class FavoritePhotos extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      photographer: '',
      url: '',
      isEditClicked: false
    }
  }

  componentDidMount() {
    this.props.getFavoritePhotos()
    
  }

  confirmDelete(photoId, idx) {
    this.props.deleteFavorite(photoId, idx);
    this.props.favoritePhotos;
    console.log(this.props.favoritePhotos)
  }

  onClickEdit(photoId, oldPhoto) {
    // console.log(photoId)
    // console.log(oldPhoto)
    this.setState({
      photographer: oldPhoto.photographer,
      url: oldPhoto.url,
      isEditClicked: true,
    })
  }
  
  
  render(props) {
      if(this.state.isEditClicked) {
        return (
          <EditPhoto value="label"/>
        )
      } else {
        return (
          <div style={styles.container}>
            <Card.Group style={styles.card} itemsPerRow={6}>
              {this.props.favoritePhotos.length === 0 && <h1>There are no favorite photo yet...</h1>}
                {this.props.favoritePhotos.map((photo, idx) => 
                  <div key={idx}>
                    <Card raised
                    image={photo.url}
                    header={`Credits: ${photo.photographer}`}
                    extra={<ButtonPrimary onClick={() => this.confirmDelete(photo.photo_id, idx)} color="red" label="Delete"/>}
                    />
                    <ButtonPrimary onClick={() => {
                      this.onClickEdit(photo.photo_id, photo)
                    }} color="blue" label="Edit"/>
                  </div>
                )}
            </Card.Group>
          </div>
        )
      }

      

  }
}


const mapStateToProps = (state) => {
  return {
    favoritePhotos: state.photos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getFavoritePhotos: () => dispatch(getFavoritePhotos()),
    deleteFavorite: (photoId, idx) => dispatch(deleteFavorite(photoId, idx))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoritePhotos);