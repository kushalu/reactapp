
import React, { Component } from "react";
//var descending = require('sort-desc');
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false
    };
  }
  componentDidMount() {
    // fetch("https://jsonplaceholder.typicode.com/users")
    //fetch("https://api.github.com/users")
    fetch("https://api.github.com/users")
      // https://api.github.com/users
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json
          // de:json.descending
        });
      });
  }

  render() {
    var { isLoaded, items } = this.state;

    var t = [];
    if (!isLoaded) {
      return <div> Loading..</div>;
    } else {
      var i;
      for (i = (items.length - 10); i <= items.length - 1; i++) {
        t[i] = items[i];
      }
      return (
        <div className="App">
          <ul>

            {t.reverse().map(item => (
              <li key={item.id}>
                <tbody>
                  <tr>
                    <td> id:{item.id} </td> |
              <td>  Name: {item.login} </td>|<td> Url: {item.url} </td>
                  </tr>
                </tbody>
              </li>
              //  <%  } %>
            ))}
            ;
          </ul>
        </div>
      );
    }
  }
}
export default App;
//<!-- {t.sort().map(item => ( -->