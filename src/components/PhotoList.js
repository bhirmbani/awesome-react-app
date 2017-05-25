import React from 'react';
import { connect } from 'react-redux';
import { Card } from 'semantic-ui-react'
import { Message, Input } from 'semantic-ui-react'
import { Redirect } from 'react-router-dom';


import { fetchPhotos, addToFavorite } from '../actions';
import { ButtonComponent, ButtonPrimary } from './Button';


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
      isFavClicked: false,
      search: ''
    }
  }

  componentDidMount() {
    this.props.fetchPhotos()
  }

  searchPhotoSuccess (e) {
    e.preventDefault();
    this.setState({
      isSubmitted: true,
    })
    console.log('masuk')
    this.props.fetchPhotos(this.state.search);

    const back = {
      search: ''
    }
    this.setState(back);
  }
  
  handleChange(e) {
   const updateState = this.state;
   updateState[e.target.name] = e.target.value;
   this.setState(updateState);
  }

  render() {
    return (

      <div style={styles.container}>
          { (this.state.isFavClicked) && <Message
            success
            header='Congrats!'
            content='You have succesfully added photo to your favorite list'
          /> }
          <div>
            <form onSubmit={this.searchPhotoSuccess.bind(this)}>
              <Input onChange={this.handleChange.bind(this)} value={this.state.search} name='search' type='text' placeholder='Search...' label='Search for photos:' />
              <ButtonPrimary color="blue" label="Submit" type="submit" />
            </form>
          </div>
        
        <Card.Group style={styles.card} itemsPerRow={6}>
          {this.props.photoList.length === 0 && <h1>Please search your desired photo first...</h1>}
            {this.props.photoList.map((photo, idx) => 
              <form key={idx} onSubmit={(e) => {
                e.preventDefault();
                let photo = {
                  photographer: this.props.photoList[idx].photographer,
                  url: this.props.photoList[idx].url,
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
    fetchPhotos: (query) => dispatch(fetchPhotos(query)),
    addToFavorite: photo => dispatch(addToFavorite(photo))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PhotoCard);