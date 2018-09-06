import "./index.css";
import React, { Component } from "react";

class Flipper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [1, 2, [3, 4, 5], [6, [7, 8], 9]]
    };

    this.flipList = this.flipList.bind(this);
  }

  flipList() {
    const { list } = this.state;
    const reverse = arr => {
      const flipped = [];
      arr.map(i => {
        if (Array.isArray(i)) {
          const reversed = reverse(i);
          flipped.unshift(reversed);
        } else {
          flipped.unshift(i);
        }
        return i;
      });
      return flipped;
    };
    const flippedList = reverse(list);
    this.setState({ list: flippedList });
  }

  render() {
    const { list } = this.state;

    const renderArr = arr => (
      <div className="array">
        {arr.map(item => (
          <div key={item} className="array__item">
            {Array.isArray(item) ? renderArr(item) : item}
          </div>
        ))}
      </div>
    );

    return (
      <div className="array-flipper">
        {list.length && <div>{renderArr(list)}</div>}
        <button type="button" onClick={this.flipList} className="array__button">
          Flip!
        </button>
      </div>
    );
  }
}

export default Flipper;
