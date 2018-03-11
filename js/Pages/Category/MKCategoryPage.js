/**
 * MonkeyNews
 *
 * author: xietao3
 *
 * blog: xietao3.com
 */

'use strict';

import React, {Component} from 'react';
import {
    StyleSheet,
    Text
} from 'react-native'

import MKBasePage from '../MKBasePage'
import commonStyles, {colors} from '../../Styles/commonStyles'

export default class MKCategoryPage extends MKBasePage {
    static navigationOptions = {
        headerTitle: '分类'
    };

    constructor(props) {
        super(props)
    }

    render() {
        return super.render(
            <Text style={[colors.black,{marginTop:100}]}> 知识分类</Text>
        );

    }
}

const styles = StyleSheet.create({

});