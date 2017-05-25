import React from 'react';
import { connect } from 'react-redux';
import { Card } from 'semantic-ui-react'

import { fetchPhotos } from '../actions';
import { ButtonComponent } from './Button';


class PhotoCard extends React.Component {
  componentDidMount() {
    this.props.fetchPhotos()
  }

  render(props) {
    return (
      <Card.Group itemsPerRow={6}>
      {this.props.photoList.length === 0 && <h1>Now Loading...</h1>}
        {this.props.photoList.map((photo, idx) => 
          <div key={idx}>
            <Card raised
            image={photo.url}
            header={photo.photographer}
            extra={<ButtonComponent />}
            />
            
          </div>
        )}
        
      </Card.Group>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    photoList: state.photos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPhotos: () => dispatch(fetchPhotos()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PhotoCard);