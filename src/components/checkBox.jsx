import React from 'react';

class Checkbox extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isChecked: true,
      };
    }
    toggleChange = () => {
      this.setState({
        isChecked: !this.state.isChecked,
      });
    }
    render() {
      return (
        <label>
          <input type="checkbox"
            checked={this.state.isChecked}
            onChange={this.toggleChange}
          />
          Check Me!
         </label>
      );
    }
  }
  