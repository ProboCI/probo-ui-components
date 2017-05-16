import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './button.scss';

/**
 * Button styles and markup options.
 */
class Button extends Component {
  static propTypes = {
    children: PropTypes.string,
    className: PropTypes.string,
    icon: PropTypes.string,
    type: PropTypes.string,
    style: PropTypes.object,
    size: PropTypes.oneOf([
      'isSmall',
      'isMedium',
      'isLarge',
    ]),
    color: PropTypes.oneOf([
      'primary',
      'info',
      'success',
      'warning',
      'danger',
      'link',
      'white',
      'light',
      'dark',
      'black',
      'link',
    ]),
    buttonStyle: PropTypes.oneOf([
      'isOutlined',
      'isInverted',
    ]),
    state: PropTypes.oneOf([
      'isLoading',
      'isActive',
      'isDisabled',
    ]),
    delete: PropTypes.bool,
    isIconRight: PropTypes.bool,
    data: PropTypes.array,
    safeHtml: PropTypes.string,
  };

  static defaultProps = {
    style: {},
    className: '',
  };

  createClassName() {
    return [
      'extra-class',
      'button',
      this.props.size,
      this.props.color ? 'button--' + this.props.color : '',
      this.props.buttonStyle,
      this.props.state,
      this.props.delete ? 'delete' : '',
      this.props.className,
    ].join(' ').trim();
  }

  createIconSize() {
    if (this.props.size === 'isLarge') return 'isMedium';
    if (this.props.size === 'isSmall') return 'isSmall';
    return '';
  }

  renderLeftIcon() {
    return (
      <span>
        <span className={['icon', this.createIconSize()].join(' ')}>
          <i className={['fa', this.props.icon].join(' ')} />
        </span>
        <span style={{ lineHeight: this.props.size === 'isLarge' ? '32px' : 'auto' }}>
          {this.props.children}
        </span>
      </span>
    );
  }

  renderRightIcon() {
    return (
      <span>
        <span style={{ lineHeight: this.props.size === 'isLarge' ? '32px' : 'auto' }}>
          {this.props.children}
        </span>
        <span className={['icon', this.createIconSize()].join(' ')}>
          <i className={['fa', this.props.icon].join(' ')} />
        </span>
      </span>
    );
  }

  renderIcon() {
    return this.props.isIconRight
      ? this.renderRightIcon()
      : this.renderLeftIcon();
  }

  renderBody() {
    return this.props.safeHtml
      ? (<span dangerouslySetInnerHTML={{ __html: this.props.safeHtml }}></span>)
      : (<span>{this.props.children}</span>);
  }

  render() {
    return (
      <button style={this.props.style} className={this.createClassName()}>
        {this.props.icon ? this.renderIcon() : this.renderBody()}
      </button>
    );
  }
}

export default Button;
