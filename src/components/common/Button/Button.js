import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';

const Btn = ({
   buttonId,
   type,
   className,
   onClick,
   children,
   loading,
   ...props
}) => (
   <Button
      id={buttonId}
      type={type}
      className={className}
      onClick={onClick}
      loading={loading}
      {...props}
   >
      {children}
   </Button>
);
Btn.propTypes = {
   buttonId: PropTypes.string,
   type: PropTypes.string,
   loading: PropTypes.bool,
   children: PropTypes.any,
   className: PropTypes.string,
   onClick: PropTypes.func.isRequired,
};

Btn.defaultProps = {
   type: 'button',
   children: 'button',
   onClick: (e) => e,
   loading: false,
};

export default Btn;
