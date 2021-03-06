/**
 * Created by jayu on 2017/8/24.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableHighlight
} from 'react-native';

import {ItemStyles} from "../component/util/CommonStyles"

export default class HomeItemNoImageComponent extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TouchableHighlight
                underlayColor='gainsboro'
                onPress={this.props.itemPress}>
                <View style={ItemStyles.rightContainer}>
                    <Text style={ItemStyles.textTopStyle}>
                        {this.props.who}
                    </Text>

                    <Text style={ItemStyles.textBottomStyle}>
                        {this.props.desc}
                    </Text>
                </View>
            </TouchableHighlight>);
    }
}