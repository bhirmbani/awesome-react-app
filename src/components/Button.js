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

export const ButtonPrimary = (props) => (
    <Button onClick={props.onClick} color={props.color}>{props.label}</Button>
)

export default ButtonPrimary