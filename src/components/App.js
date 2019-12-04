import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import faker from 'faker';
import List from './List/List';
import Button from './Button/Button';
import Menu from './Menu/Menu';
// import popTransition from '../transitions/pop.module.css';
import slideTransition from '../transitions/slide.module.css';

export default class App extends Component {
  state = {
    items: [],
    isShow: true,
  };

  addItem = () => {
    this.setState(prevState => ({
      items: [
        ...prevState.items,
        { id: faker.random.uuid(), text: faker.lorem.words(5) },
      ],
    }));
  };

  removeItem = id => {
    this.setState(prevState => ({
      items: prevState.items.filter(item => item.id !== id),
    }));
  };

  showHideTitle = () => {
    this.setState(prevState => ({
      isShow: !prevState.isShow,
    }));
  };

  render() {
    const { items, isShow } = this.state;

    return (
      <>
        <Menu />
        <hr />
        <Button label="Add Item" onClick={this.addItem} />
        <hr />
        <List items={items} onDelete={this.removeItem} />

        <div>
          <button onClick={this.showHideTitle} type="button">
            Show/Hide
          </button>
          <CSSTransition
            in={isShow}
            timeout={2000}
            unmountOnExit
            classNames={slideTransition}
          >
            <h2>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis,
              cumque?
            </h2>
          </CSSTransition>
        </div>
      </>
    );
  }
}
