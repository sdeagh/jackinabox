import { container } from '../assets/css/material-kit-react';

const FooterStyle = {
  left: {
    padding: '15px 0',
    float: 'left!important',
    display: 'block',
  },
  right: {
    padding: '15px 0',
    margin: '0',
    float: 'right!important',
  },
  footer: {
    textAlign: 'center',
    display: 'flex',
    zIndex: '2',
    position: 'relative',
  },
  footerWhiteFont: {
    '&,&:hover,&:focus': {
      color: '#FFFFFF',
    },
  },
  container,
  list: {
    marginBottom: '0',
    padding: '0',
    marginTop: '0',
  },
  icon: {
    width: '18px',
    height: '18px',
    position: 'relative',
    top: '3px',
    color: 'red',
  },
};
export default FooterStyle;
