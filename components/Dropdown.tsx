import styled from 'styled-components'
import Button from './Button'
import Details from './Details'

const Dropdown = ({ children, ...rest }) => {
  return (
    <Details {...rest} >
      {children}
    </Details>
  )
}

const DropdownButton = ({ children, ...rest }) => {
  return (
    <Button as="summary" aria-haspopup="true" {...rest}>
      {children}
    </Button>
  )
}

const DropdownMenu = styled.ul`
  background-clip: padding-box;
  background-color: white;
  left: 0;
  list-style: none;
`

const DropdownItem = styled(Button)``

DropdownMenu.displayName = 'Dropdown.Menu'

DropdownItem.displayName = 'Dropdown.Item'

DropdownButton.displayName = 'Dropdown.Button'

export default Object.assign(Dropdown, {
  Menu: DropdownMenu,
  Item: DropdownItem,
  Button: DropdownButton
})
