import React from 'react'
import { observer } from 'mobx-react'

const Grids = observer(class Grids extends React.Component {
    render() {
      return (
        <h1>{JSON.stringify(this.props.store)}</h1>
      )
    }
})

export default Grids
