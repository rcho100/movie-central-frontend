import React from 'react'
import { connect } from 'react-redux'

const Watchlist = (props) => {
    if (props.currentUser) {
        return (
            <div>
                <h2>My Watchlist</h2>
            </div>
        )
    } else {
        return <p>Loading...</p>
    }
    
}
const mapStateToProps = ({ currentUser }) => {
    return {
      currentUser
    }
}
  
export default connect(mapStateToProps)(Watchlist)