import React from 'react'
// import Button from './components/Button'

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Counter from './Counter'
import Navigation from './Navigation/Navigation'
import MenuItem from 'material-ui/MenuItem'

const App = (props) => (
  <div>
    <Router>
      <div>
        <Navigation
          title={'JFDDL'}
        >
          <Link to='/'>
            <MenuItem>
              Dashboard
         </MenuItem>
          </Link>
          <Link to='/counter'>
            <MenuItem>
              Counter
          </MenuItem>
          </Link>
        </Navigation>
        <Route path="/counter" component={() => <counter startNumber={5} />} />
      </div>
    </Router>
  </div >

)

export default App;
