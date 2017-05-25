import React from 'react';
import { connect } from 'react-redux';
import { Card } from 'semantic-ui-react'

import { getFavoritePhotos } from '../actions';

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
  componentDidMount() {
    this.props.getFavoritePhotos()
  }

  render() {
    return (
      <div>
        <Card.Group style={styles.card} itemsPerRow={6}>
          {this.props.favoritePhotos.length === 0 && <h1>There are no favorite photo yet...</h1>}
            {this.props.favoritePhotos.map((photo, idx) => 
              <div key={idx}>
                <Card raised
                image={photo.url}
                header={`Credits: ${photo.photographer}`}
                />
                
              </div>
            )}
        </Card.Group>
      </div>
    )
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoritePhotos);