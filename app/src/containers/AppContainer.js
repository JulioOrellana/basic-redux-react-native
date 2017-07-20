import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { ActionCreators } from '../actions'



class AppContainer extends Component {

    componentWillMount(){
        // Always call redux props from componentWillMount(), never from constructor.
        // this.props.stateToProps
    }

    render() {
        return (
            <View>
                <Text>
                    Sup
                </Text>
            </View>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch)
}

export default connect( (state) => { 
        return { 
            //stateToProps: state.stateToProps
        }
    }, mapDispatchToProps)(AppContainer)