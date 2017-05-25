import React from 'react';
import { connect } from 'react-redux';
import { Card } from 'semantic-ui-react'
import { Message } from 'semantic-ui-react'
import { Redirect } from 'react-router-dom';


import { fetchPhotos, addToFavorite } from '../actions';
import { ButtonComponent } from './Button';


const styles = {
  card: {
    width: 1200,
    margin: '50px auto'
  },
  container: {
    textAlign: 'center'
  }
};

class PhotoCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      photographer: '',
      url: '',
      isFavClicked: false
    }
  }

  componentWillMount() {
    this.props.fetchPhotos()
  }


  render() {
    return (

      <div style={styles.container}>
        { (this.state.isFavClicked) && <Message
          success
          header='Congrats!'
          content='You have succesfully added photo to your favorite list'
        /> }
        <Card.Group style={styles.card} itemsPerRow={6}>
          {this.props.photoList.length === 0 && <h1>Now Loading...</h1>}
            {this.props.photoList.map((photo, idx) => 
              <form key={idx} onSubmit={(e) => {
                e.preventDefault();
                let photo = {
                  photographer: this.props.photoList[idx].photographer,
                  url: this.props.photoList[idx].url
                }
                this.setState({
                  isFavClicked: true
                })
                this.props.addToFavorite(photo)                
              }}>
                <div>
                  <Card raised
                  image={photo.url}
                  header={`Credits: ${photo.photographer}`}
                  extra={<ButtonComponent />}
                  />
                </div>
              </form>
              
            )}
        </Card.Group>
      </div>
      
    )
  }
}

// onSubmit={(e) => {
//             e.preventDefault();
//             this.props.addPost(this.state);
//             this.setState({ title: '', description: '', isSubmitted: true });
//           }}

const mapStateToProps = (state) => {
  return {
    photoList: state.photos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPhotos: () => dispatch(fetchPhotos()),
    addToFavorite: photo => dispatch(addToFavorite(photo))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PhotoCard);