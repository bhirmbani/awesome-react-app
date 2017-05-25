import React from 'react';
import { connect } from 'react-redux';
import { Card } from 'semantic-ui-react'
import { Input } from 'semantic-ui-react'
import { Icon } from 'semantic-ui-react'

import { getByPhotographer } from '../actions';
import { ButtonComponent } from './Button';
import ButtonPrimary from './Button'

const styles = {
  card: {
    width: 1200,
    margin: '50px auto'
  },
  container: {
    textAlign: 'center'
  }
};


class ByPhotographer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      photographer: '',
      url: '',
    }
  }

  componentDidMount() {
    this.props.getByPhotographer()
  }

  searchSuccess(e) {
    e.preventDefault();
    this.props.getByPhotographer(this.state.photographer)
    const back = {
      photographer: '',
      url: '',
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
        <div>
          <form onSubmit={this.searchSuccess.bind(this)}>
            <Input onChange={this.handleChange.bind(this)} value={this.state.photographer} name='photographer' type='text' placeholder='Search...' label='Search by photographer:' />
            <ButtonPrimary color="blue" label="Submit" type="submit" />
          </form>
        </div>
        <div>
          <Card.Group style={styles.card} itemsPerRow={6}>
            {}
            {this.props.byPhotographer.length === 0 && <h1>There are no photo available</h1>}
              {this.props.byPhotographer.map((photo, idx) => 
                <div key={idx}>
                  <Card raised
                  image={photo.url}
                  header={`Credits: ${photo.photographer}`}
                  />
                </div>
            )}
          </Card.Group>
        </div>
        
      </div>
      
    )
  }
}

const mapStateToProps = (state) => {
  return {
    byPhotographer: state.photos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getByPhotographer: searchQuery => dispatch(getByPhotographer(searchQuery)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ByPhotographer);