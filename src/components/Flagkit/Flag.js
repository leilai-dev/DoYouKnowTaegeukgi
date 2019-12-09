/**
 * SVG or PNG
 *
 * width : height = 21 : 15
 */
import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';
import { getFlagByDollarCode } from './index'

export default class Flag extends Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        id: PropTypes.string,
        size: PropTypes.number,

        width: PropTypes.number,
        height: PropTypes.number,

        onPress: PropTypes.func,
        style: ViewPropTypes.style,
    };

    static defaultProps = {
        size: 1,
        width: 210,
        height: 150
    };
    _renderIcon() {
        const { size, width, height, id } = this.props
        const flag = getFlagByDollarCode(id)
        if (typeof flag === 'function') {
            const SvgComponent = flag
            return <SvgComponent
                width={width * size}
                height={height * size}
                disabled={!this.props.onPress}
                onPress={this._onPress}
                {...this.props}
            />
        }
        return (
            <Image
                style={{ width: width * size, height: height * size }}
                source={flag}
            />
        )
    }
    _onPress = () => {
        this.props.onPress && this.props.onPress(this.props.id)
    }
    render() {
        return (
            <TouchableOpacity>
                {this._renderIcon()}
            </TouchableOpacity>
        )
    }
}

