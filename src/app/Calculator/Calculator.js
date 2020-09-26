import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Calculator.less";

export class Calculator extends Component {
  state = {
    expression: "",
  };

  handleInput(input) {
    const { expression } = this.state;

    if (/^[0-9]$/.test(input) || /^[\+\-\*]$/.test(input)) {
      this.setState({ expression: expression + input });
    } else if (input === "=") {
      try {
        const result = eval(expression);
        this.setState({ expression: String(result) });
      } catch {
        alert("输入错误！");
      }
    } else if (input === "clear") {
      this.setState({ expression: "" });
    }
  }

  onButtonClick = (event) => {
    const { target } = event;

    if (target instanceof HTMLButtonElement) {
      const { input } = target.dataset;

      this.handleInput(input);
    }
  };

  calculatorRender() {
    const { onButtonClick } = this;
    let { expression } = this.state;

    expression = expression.replaceAll("*", "×");

    return (
      <div className="calculator" onClick={onButtonClick}>
        <input type="text" readOnly value={expression} />
        <div className="calculator-buttons">
          <button data-color="yellow" data-input="+">
            +
          </button>
          <button data-color="yellow" data-input="-">
            -
          </button>
          <button data-color="yellow" data-input="*">
            &#215;
          </button>
          <button data-color="orange" data-input="7">
            7
          </button>
          <button data-color="orange" data-input="8">
            8
          </button>
          <button data-color="orange" data-input="9">
            9
          </button>
          <button data-color="orange" data-input="4">
            4
          </button>
          <button data-color="orange" data-input="5">
            5
          </button>
          <button data-color="orange" data-input="6">
            6
          </button>
          <button data-color="orange" data-input="1">
            1
          </button>
          <button data-color="orange" data-input="2">
            2
          </button>
          <button data-color="orange" data-input="3">
            3
          </button>
          <button data-color="orange" data-input="0">
            0
          </button>
          <button data-color="pink" data-input="clear">
            Clear
          </button>
          <button data-color="red" data-input="=">
            =
          </button>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="calculator-container">
        <h1>在线计算器</h1>
        {this.calculatorRender()}
        <Link to="/">回到主页</Link>
      </div>
    );
  }
}
