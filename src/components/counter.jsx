import React, { Component } from "react";

class Counter extends Component {
  // state = {
  //   value: this.props.counter.value
  //   // tags: ["tag1", "tag2", "tag3"]
  // };

  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  // can be used if not using a css file
  //   styles = {
  //     fontSize: 50,
  //     fontWeight: "bold"
  //   };

  // renderTags() {
  //   const { tags } = this.state;
  //   if (tags.length === 0) return <p>There are no tags!</p>;

  //   return (
  //     // This is how to iterate thru a list of strings
  //     <ul>
  //       {this.state.tags.map(tag => (
  //         <li key={tag}>{tag}</li>
  //       ))}
  //     </ul>
  //   );
  // }

  // handleIncrement = () => {
  //   console.log("Increment Clicked");
  //   this.setState({ value: this.state.value + 1 });
  // };

  // dont do this!
  // doHandleIncrement = () => {
  //   this.handleIncrement({ id: 1 });
  // };

  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
    if (prevProps.counter.value !== this.props.counter.value) {
      // Ajax call and get new data from server or update database
    }
  }

  componentWillUnmount() {
    console.log("Counter - unmount");
  }

  render() {
    console.log("Counter - Rendered");

    return (
      <div>
        <h4>Product #{this.props.counter.id}</h4>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-primary btn-sm m-2"
        >
          +
        </button>
        <button
          onClick={() => this.props.onDecrement(this.props.counter)}
          className="btn btn-secondary btn-sm m-2"
        >
          -
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-"; // use the let keyword when the object is going to be modified, use the const if its not being modified
    classes += this.props.counter.value === 0 ? "warning" : "primary"; // Appends the text to the object, based on the condition
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter; // this line grabs the count from the state in the class
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
