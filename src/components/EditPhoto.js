import React from 'react';
import { Button, Form } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { editPhoto } from '../actions';

const styles = {
  formContainer: {
    margin: '0 auto',
    width: '50%'
  }
}

class EditPhoto extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      photographer: '',
      url: '',
      isSubmitted: false
    }
  }

  editPhotoSuccess (e) {
    e.preventDefault();
    this.setState({
      isSubmitted: true
    })
    this.props.editPhoto(this.state);

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

  render(props) {
    return (
      <div style={styles.formContainer}>
        <Form onSubmit={this.editPhotoSuccess.bind(this)}>
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
    editPhoto: (photoId, newPhoto) => dispatch(editPhoto(photoId, newPhoto))
  }
}

export default connect(null, mapDispatchToProps)(EditPhoto);