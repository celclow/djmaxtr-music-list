import React, { Component } from "react";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import MusicTable from "./MusicTable";

class App extends Component {
  constructor(props) {
    super(props);

    this.theme = createMuiTheme({
      overrides: {
        MuiTableCell: {
          root: {
            padding: "3px",
            margin: "1px"
          },
          head: {
            padding: "3px",
            margin: "1px"
          },
          body: {
            padding: "3px",
            margin: "1px"
          }
        }
      }
    });
  }

  render() {
    return (
      <div className="App">
        <MuiThemeProvider theme={this.theme}>
          <MusicTable />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
