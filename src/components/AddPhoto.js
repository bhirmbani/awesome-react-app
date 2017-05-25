import React from 'react';
import { Button, Form } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { addPhoto } from '../actions';

class AddPhoto extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      photographer: '',
      url: '',
      isSubmitted: false
    }
  }
  componentDidMount() {
    console.log(this.state.isSubmitted)
  }

  addPhotoSuccess (e) {
    e.preventDefault();
    this.state.isSubmitted = true
    this.props.addPhoto(this.state);

    const back = {
      photographer: '',
      url: '',
    }
    this.setState(back);
    console.log(this.state.isSubmitted)
  }

  handleChange(e) {
   const updateState = this.state;
   updateState[e.target.name] = e.target.value;
   this.setState(updateState);
  }

  render() {
    return (
      <div>
        { (this.state.isSubmitted) && <Redirect to={{
            pathname: '/',
          }}/> }
        <Form onSubmit={this.addPhotoSuccess.bind(this)}>
          <Form.Field>
            <label>Photographer</label>
            <input name="photographer" type="text" onChange={this.handleChange.bind(this)} value={this.state.photographer} placeholder='Photographer' />
          </Form.Field>
          <Form.Field>
            <label>Url</label>
            <input name="url" type="text" placeholder='Url' onChange={this.handleChange.bind(this)} value={this.state.url} />
          </Form.Field>
          <Button type='submit'>Submit</Button>
        </Form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addPhoto: newPhoto => dispatch(addPhoto(newPhoto))
  }
}

export default connect(null, mapDispatchToProps)(AddPhoto);
