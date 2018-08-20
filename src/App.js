import React from 'react'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'


class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Link to={'/hello/world'}> World</Link>
            <Link to={'/hello'}> Hello</Link>
           <Switch>
        <Route path={'/'} exact component={Hello} />
        <Route path={'/hello'} component={Hello} />
        <Route path={'/hello-world'} component={World} />
        </Switch>
        </div>
        </Router>

      </div>
    );
  }
}

const Hello = function(props){
  return <p>Hello</p>
}
const World = props => (
  <div>World</div>
)

export default App;
