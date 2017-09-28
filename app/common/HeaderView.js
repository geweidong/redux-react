/**
 * Created by ljunb on 16/5/8.
 * 导航栏标题
 */
import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Common from '../common/common';
import {connect} from 'react-redux';

class HeaderView extends React.Component {

    constructor(props){
        super(props);

        this.state = {

        }
    }

    render() {
        console.log(this.props)
        const { titleTheme } = this.props.setReducer;
        let NavigationBar = [];

        // 左边图片按钮
        if (this.props.leftIcon != undefined) {
            NavigationBar.push(
                <TouchableOpacity
                    key={'leftIcon'}
                    activeOpacity={0.75}
                    style={styles.leftIcon}
                    onPress={this.props.leftIconAction}
                    >
                    <Icon color="black" size={30} name={this.props.leftIcon}/>
                </TouchableOpacity>
            )
        }

        // 标题
        if (this.props.title != undefined) {
            NavigationBar.push(
                <Text key={'title'} style={styles.title}>{this.props.title}</Text>
            )
        }

        // 自定义标题View
        if (this.props.titleView != undefined) {
            let Component = this.props.titleView;

            NavigationBar.push(
                <Text key={'titleView'} style={[styles.titleView, {color: titleTheme ? '#FFF' : '#000'}]}>{this.props.titleView}</Text>
            )
        }


        return (
            <View style={[styles.navigationBarContainer, {backgroundColor: titleTheme ? 'blue' : '#fff'}]}>
                {NavigationBar}
            </View>
        )
    }
}

const styles = StyleSheet.create({

    navigationBarContainer: {
        marginTop: 20,
        flexDirection: 'row',
        height: 44,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: '#ccc',
        borderBottomWidth: 0.5,
        backgroundColor: 'white'
    },

    title: {
        fontSize: 15,
        marginLeft: 15,
    },
    titleView: {
        fontSize: 15,
    },
    leftIcon: {
       left: -Common.window.width/2+40,
    },
})


export default connect((state) => {
    
    const { setReducer } = state;
    return {
        setReducer
    }

})(HeaderView);