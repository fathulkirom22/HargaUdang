import React, { Component } from 'react'
import {  
    View,
    ScrollView,
    SafeAreaView 
} from 'react-native'
import { 
    Icon,
    Container, 
    Header, 
    Content, 
    List, 
    ListItem, 
    Text,
    Body,
    Left,
    Right,
    Button,
    Card, 
    CardItem,
} from 'native-base'
import { Col, Row, Grid } from 'react-native-easy-grid'
import { VictoryChart, VictoryTheme, VictoryLine, VictoryAxis, VictoryLabel} from 'victory-native'

export default class DetailHargaUdang extends Component {

    static navigationOptions = {
        /* header config here! */
        title: 
            "Detail Harga Udang"
        ,
        headerLeft: (
            <Icon name='ios-arrow-back' style={{margin : 10}} />
        ),
        headerRight: (
            <Icon name='md-share' style={{margin : 10}}/>
        ),
    };

    render() {
        const item = this.props.navigation.getParam('item', null);
        const RenderRegion = ({region}) => 
            region.name == region.province_name ?
            region.name :
            region.name+', '+region.province_name
        return (
            <Container>
                <Content>
                <List>
                    <Card>
                        <CardItem>
                            <Body>
                                <Text note>Spesies : {item.species.name}</Text>
                                <Text style={{color:'#0091ff', fontWeight:'bold'}}>
                                    <RenderRegion region={item.region}/>
                                </Text>
                            </Body>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem bordered>
                            <Body>
                                <Row>
                                    <Col>
                                        <Text note>Harga ukuran 100</Text>
                                    </Col>
                                    <Col>
                                        <Text style={{textAlign:'right'}}>Rp {item.size_100}</Text>
                                    </Col>
                                </Row>
                            </Body>
                        </CardItem>
                        <CardItem bordered>
                            <Body>
                                <Row>
                                    <Col>
                                        <Text note>Harga ukuran 90</Text>
                                    </Col>
                                    <Col>
                                        <Text style={{textAlign:'right'}}>Rp {item.size_90}</Text>
                                    </Col>
                                </Row>
                            </Body>
                        </CardItem>
                        <CardItem bordered>
                            <Body>
                                <Row>
                                    <Col>
                                        <Text note>Harga ukuran 80</Text>
                                    </Col>
                                    <Col>
                                        <Text style={{textAlign:'right'}}>Rp {item.size_80}</Text>
                                    </Col>
                                </Row>
                            </Body>
                        </CardItem>
                        <CardItem bordered>
                            <Body>
                                <Row>
                                    <Col>
                                        <Text note>Harga ukuran 70</Text>
                                    </Col>
                                    <Col>
                                        <Text style={{textAlign:'right'}}>Rp {item.size_70}</Text>
                                    </Col>
                                </Row>
                            </Body>
                        </CardItem>
                        <CardItem bordered>
                            <Body>
                                <Row>
                                    <Col>
                                        <Text note>Harga ukuran 60</Text>
                                    </Col>
                                    <Col>
                                        <Text style={{textAlign:'right'}}>Rp {item.size_60}</Text>
                                    </Col>
                                </Row>
                            </Body>
                        </CardItem>
                        <CardItem bordered>
                            <Body>
                                <Row>
                                    <Col>
                                        <Text note>Harga ukuran 50</Text>
                                    </Col>
                                    <Col>
                                        <Text style={{textAlign:'right'}}>Rp {item.size_50}</Text>
                                    </Col>
                                </Row>
                            </Body>
                        </CardItem>
                    </Card>

                    <Card>
                        <CardItem>
                            <Body>
                                <Text>Perkembangan harga (ukuran 60)</Text>
                                <View pointerEvents="none">
                                    <VictoryChart
                                        theme={VictoryTheme.material}
                                        minDomain={{y:50}}
                                        maxDomain={{y:80}}>
                                        <VictoryLine
                                            interpolation="natural"
                                            style={{
                                                data: { stroke: "#c43a31" },
                                                parent: { border: "1px solid #ccc"}
                                            }}
                                            data={[
                                                { x: 'Maret', y: 66 },
                                                { x: 'April', y: 60 },
                                                { x: 'Mei', y: 70 },
                                                { x: 'Juni', y: 65 },
                                                { x: 'Juli', y: 63 }
                                            ]}
                                            animate={{
                                                duration: 2000,
                                                onLoad: { duration: 1000 }
                                            }}
                                        />
                        
                                    </VictoryChart> 
                                </View>
                            </Body>
                        </CardItem>
                    </Card>

                    <Card>
                        <CardItem>
                            <Body>
                                <Text note>Catatan :</Text>
                                <Text>Harga dapat berubah sewaktu-waktu</Text>
                            </Body>
                        </CardItem>
                    </Card>

                    <Card>
                        <CardItem>
                            <Body>
                                <Text note>Diedit pada :</Text>
                                <Text>{item.updated_at}</Text>
                            </Body>
                        </CardItem>
                    </Card>
                </List>
                </Content>
            </Container>
        )
    }
}
