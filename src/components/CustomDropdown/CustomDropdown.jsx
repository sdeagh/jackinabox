/* eslint-disable react/no-array-index-key */
import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// nodejs library to set properties for components
import PropTypes from 'prop-types';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Paper from '@material-ui/core/Paper';
import Grow from '@material-ui/core/Grow';
import Divider from '@material-ui/core/Divider';
import Icon from '@material-ui/core/Icon';
import Popper from '@material-ui/core/Popper';

// core components
import Button from '../CustomButtons/Button';

import CustomDropdownStyle from './CustomDropdownStyle';

class CustomDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClick() {
    this.setState(state => ({ open: !state.open }));
  }

  handleClose(param) {
    const { onClick } = this.props;
    this.setState({ open: false });
    if (this.props && onClick) {
      onClick(param);
    }
  }

  handleCloseAway(event) {
    if (this.anchorEl.contains(event.target)) {
      return;
    }
    this.setState({ open: false });
  }

  render() {
    const { open } = this.state;
    const {
      classes,
      buttonText,
      buttonIcon,
      dropdownList,
      buttonProps,
      dropup,
      dropdownHeader,
      caret,
      hoverColor,
      noLiPadding,
    } = this.props;
    const caretClasses = classNames({
      [classes.caret]: true,
      [classes.caretActive]: open,
    });
    const dropdownItem = classNames({
      [classes.dropdownItem]: true,
      [classes[`${hoverColor}Hover`]]: true,
      [classes.noLiPadding]: noLiPadding,
    });
    let icon = null;
    switch (typeof buttonIcon) {
      case 'function':
        icon = <this.props.buttonIcon className={classes.buttonIcon} />;
        break;
      case 'string':
        icon = <Icon className={classes.buttonIcon}>{buttonIcon}</Icon>;
        break;
      default:
        icon = null;
        break;
    }
    return (
      <div>
        <div>
          <Button
            aria-label="Notifications"
            aria-owns={open ? 'menu-list' : null}
            aria-haspopup="true"
            {...buttonProps}
            buttonRef={node => {
              this.anchorEl = node;
            }}
            onClick={this.handleClick}
          >
            {icon}
            {buttonText !== undefined ? buttonText : null}
            {caret ? <b className={caretClasses} /> : null}
          </Button>
        </div>
        <Popper
          open={open}
          anchorEl={this.anchorEl}
          transition
          disablePortal
          placement="bottom"
          className={classNames({
            [classes.popperClose]: !open,
            [classes.popperResponsive]: true,
          })}
        >
          {() => (
            <Grow
              in={open}
              id="menu-list"
              style={
                dropup
                  ? { transformOrigin: '0 100% 0' }
                  : { transformOrigin: '0 0 0' }
              }
            >
              <Paper className={classes.dropdown}>
                <ClickAwayListener onClickAway={this.handleCloseAway}>
                  <MenuList role="menu" className={classes.menuList}>
                    {dropdownHeader !== undefined ? (
                      <MenuItem
                        onClick={this.handleClose}
                        className={classes.dropdownHeader}
                      >
                        {dropdownHeader}
                      </MenuItem>
                    ) : null}
                    {dropdownList.map((prop, key) => {
                      if (prop.divider) {
                        return (
                          <Divider
                            key={key}
                            onClick={this.handleClose}
                            className={classes.dropdownDividerItem}
                          />
                        );
                      }
                      return (
                        <MenuItem
                          key={key}
                          onClick={this.handleClose}
                          className={dropdownItem}
                        >
                          {prop}
                        </MenuItem>
                      );
                    })}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    );
  }
}

CustomDropdown.defaultProps = {
  caret: true,
  hoverColor: 'primary',
  buttonText: null,
  buttonIcon: null,
  dropdownList: null,
  buttonProps: null,
  dropup: false,
  dropdownHeader: null,
  left: false,
  noLiPadding: true,
  onClick: null,
};

CustomDropdown.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  hoverColor: PropTypes.oneOf([
    'black',
    'primary',
    'info',
    'success',
    'warning',
    'danger',
    'rose',
  ]),
  buttonText: PropTypes.node,
  buttonIcon: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  dropdownList: PropTypes.instanceOf(Array),
  buttonProps: PropTypes.objectOf(PropTypes.string),
  dropup: PropTypes.bool,
  dropdownHeader: PropTypes.node,
  caret: PropTypes.bool,
  left: PropTypes.bool,
  noLiPadding: PropTypes.bool,
  // function that retuns the selected item
  onClick: PropTypes.func,
};

export default withStyles(CustomDropdownStyle)(CustomDropdown);
