import styled from 'styled-components'
import color from '@styled-system/color'

const Details = styled.details`
  & > summary {
    list-style: none;
  }
  
  & > summary::-webkit-details-marker {
    display: none;
  }

  ${color}
`


export default Details
