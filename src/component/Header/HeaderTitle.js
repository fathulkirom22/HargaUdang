import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import {Text} from 'native-base'
import { Col, Row, Grid } from 'react-native-easy-grid';

export default class HeaderTitle extends Component {
    render() {
        return (
            <Grid style={styles.HeaderTitle}>
                <Row>
                    <Text style={styles.Title}>Harga Udang</Text>
                </Row>
                <Row>
                    <Text note>Ukuran 60</Text>
                </Row>
            </Grid>
        )
    }
}

const styles = StyleSheet.create({
    HeaderTitle : {
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#fff',
        flexGrow:1,
        alignSelf:'center',
        alignItems: 'center',
        marginTop : 1
    },
    Title : {
        fontSize : 24,
        fontWeight : 'bold'
    }
})
