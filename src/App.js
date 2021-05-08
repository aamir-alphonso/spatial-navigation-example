import logo from './logo.svg';
import './App.css';
import React, {PureComponent} from "react"
import {initNavigation, setKeyMap, withFocusable} from '@noriginmedia/react-spatial-navigation';

initNavigation();

// Optional
setKeyMap({
  'left': 37,
  'up': 38,
  'right': 39,
  'down': 40,
  'enter': 13
});

const Component2 = (props) => {
  console.log(props)
  const divStyle={
    color: 'blue',
  }
    return(
      <div style={props.focused ? divStyle : null}>
        Hello World!!
      </div>
    )
}

const FocusableComponent2 = withFocusable()(Component2)


const Component = ({focused, setFocus}) => (<div>
  Hello World!
</div>);

const FocusableComponent = withFocusable()(Component);

const Menu = (props) => {
  props.setFocus();
  const onEnterPress = () => {
    console.log("Enter pressed and working")
  }
  return(<>
  <FocusableComponent2 />
  <FocusableComponent2 onEnterPress={onEnterPress}/>
  <FocusableComponent2 />
  <FocusableComponent2 />
  </>)
}

const MenuFocusable = withFocusable()(Menu)


function App() {
  return (
    <div className="App">
      <MenuFocusable />
    </div>
  );
}

export default App;
