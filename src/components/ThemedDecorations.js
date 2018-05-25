// Code ThemedDecoration Component Here


import React from 'react';

class ThemedDecorations extends React.Component {

  render() {
    const childrenWithExtraProp = React.Children.map(this.props.children, child => React.cloneElement(child, {
      className: this.props.theme,
    }));

    return (
      <div>
        {childrenWithExtraProp}
      </div>
    );
  }
}

export default ThemedDecorations;

// THIS IS WHAT I HAD; WOULD NOT PASS FOR SOME REASON:
// import React from 'react';
//
// export default class ThemedDecorations extends React.Component {
//   render() {
//     const childrenWithWrapperDiv = React.Children.map(this.props.children, child => {
//       React.cloneElement(child, {
//       className: this.props.theme
//       // return (
//       //   <div className={theme}>{child}</div>
//       // );
//     })});
//     return (
//       <div>
//         {childrenWithWrapperDiv}
//       </div>
//
//     )
//   }
// }
