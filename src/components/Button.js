import React from 'react';
import { Button, Icon } from 'semantic-ui-react'

export const ButtonComponent = () => (
  <div>
    <Button primary animated>
      <Button.Content visible>Add To Favorite</Button.Content>
      <Button.Content hidden>
        <Icon name='heart' />
      </Button.Content>
    </Button>
  </div>
)

export const ButtonPrimary = () => (
    <Button primary>Submit</Button>
)

export default ButtonPrimary