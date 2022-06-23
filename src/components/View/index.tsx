import React, { forwardRef } from 'react';
import { Props, States } from './types';
import styles from './.module.css';

class View extends React.PureComponent<Props, States> {
  render(): React.ReactNode {
    const { id, viewRef, children, style, className, onClick } = this.props;
    return (
      <div
        id={id}
        ref={viewRef}
        className={`${styles.view} ${className}`}
        style={style}
        onClick={onClick}
      >
        {children}
      </div>
    );
  }
}

export { View as ViewType };

export default forwardRef<View, Props>((props, ref) => (
  <View viewRef={ref} {...props} />
));

// export default View;
