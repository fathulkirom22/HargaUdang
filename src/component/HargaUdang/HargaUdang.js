import React, { Component } from 'react'
import { 
    View, 
    StyleSheet,  
    FlatList, 
    ActivityIndicator, 
    TouchableOpacity,
    Modal 
} from 'react-native'
import { 
    Icon,
    Item,
    Input,
    Container, 
    Content, 
    List, 
    ListItem, 
    Text,
    Body,
    Right,
    Button,
    Footer,
    Card,
    CardItem
} from 'native-base'
import { Col, Row, Grid } from 'react-native-easy-grid';
import HeaderTitle from '../Header/HeaderTitle'

export default class HargaUdang extends Component {

    static navigationOptions = {
        /* header config here! */
        headerTitle: 
            <HeaderTitle />
        ,
        headerLeft: (
            <Icon name='ios-arrow-back' style={{margin : 10}} />
        ),
        headerRight: (
            <Icon name='md-share' style={{margin : 10}}/>
        ),
    };

    constructor(props){
        super(props);

        this.modalFilterRef = this.updateRef.bind(this, 'modalFilter')
        this.modalSortRef = this.updateRef.bind(this, 'modalSort')

        this.state ={ 
            isLoading: true,
            isMoreLoading : true,
            modalFilterVisible : false,
            modalSortVisible: false
        }
    }

    updateRef(name, ref) {
        this[name] = ref;
    }

    componentDidMount() {
        this.getShrimpPricesFromApi()
        this.getMoreShrimpPricesFromApi()
    }

    getShrimpPricesFromApi() {
        return fetch(
                'https://app.jala.tech/api/shrimp_prices?search&with=creator,species,region&sort=size_60|creator.name,desc&region_id=34'
            )
            .then((response) => response.json())
            .then((responseJson) => {
                data = responseJson.data.filter(data => 
                    data.size_60 != '' &&
                    data.size_60 != null 
                )
                this.setState({
                    isLoading: false,
                    dataSource: data,
                }, function(){

                });

            })
            .catch((error) =>{
                console.error(error);
            });
    }

    getMoreShrimpPricesFromApi() {
        return fetch(
                'https://app.jala.tech/api/shrimp_prices?search&with=creator,species,region&sort=size_60|creator.name,desc'
            )
            .then((response) => response.json())
            .then((responseJson) => {
                data = responseJson.data.filter(data => 
                    data.size_60 != '' &&
                    data.size_60 != null 
                )
                this.setState({
                    isMoreLoading: false,
                    moreDataSource: data,
                }, function(){

                });

            })
            .catch((error) =>{
                console.error(error);
            });
    }

    openModalFilter = ()=>{
        this['modalFilter'].openModal()
    }

    openModalSort = ()=>{
        this['modalSort'].openModal()
    }

    renderFooter (loading) {
        if (!loading) return null
        return (
            <View style={{flex: 1, padding: 20}}>
                <ActivityIndicator/>
            </View>
        )
    }

    moveToDetail(item){
        this.props.navigation.navigate('Detail',{item:item})
    }
      
    render() {
        const {
            dataSource, 
            moreDataSource, 
            isLoading, 
            isMoreLoading,
        } = this.state

        const RenderRegion = ({region}) => 
            region.name == region.province_name ?
            region.name :
            region.name+', '+region.province_name

        const ListItemHargaUdang = ({item}) => (
                        
            <ListItem
                onPress={()=>this.moveToDetail(item)}>
                <Body>
                    <Text>Rp {item.size_60}</Text>
                    <Text note style={{marginBottom: 20, color:'#0091ff', fontWeight:'bold'}}>
                        <RenderRegion region={item.region}/>
                    </Text>
                    <Text note>{item.species.created_at} oleh Syauq {item.creator.name}</Text>
                </Body>
                <Right>
                    <Icon name='md-share' fontSize='12' style={{marginBottom: 30}}/>
                    <Row style={{ alignItems:'flex-end', flex:1, flexDirection: 'row', alignItems: 'center'}}>
                            <Text note style={{textAlign:'center'}} >Detail </Text>
                            <Icon name="ios-arrow-forward" fontSize='1'/>
                    </Row>
                </Right>
            </ListItem>
                       
        )

        const RenderModalFilterLokasi=()=>(
            <ModalFilterLokasi 
                ref={this.modalFilterRef}
            />
        )

        const RenderModalSorting=()=>(
            <ModalSorting
                ref={this.modalSortRef}
            />
        )

        return (    
                <Container>
                    <Content>
                        <RenderModalFilterLokasi/>
                        <RenderModalSorting/>
                        <List>
                            <ListItem itemDivider>
                                <Text note>Harga Udang di Kota Anda</Text>
                            </ListItem>
                            {/* <Text>{dataSource[0].region.name}</Text>                     */}
                            <FlatList
                                data = {dataSource}
                                extraData={this.state}
                                keyExtractor = {item => item.id}
                                ListFooterComponent={this.renderFooter(isLoading)}
                                renderItem={({item})=>(
                                    <ListItemHargaUdang item={item}/>
                                )}
                            />
                            <ListItem itemDivider>
                                <Text note>Harga Udang di Kota Terdekat</Text>
                            </ListItem>
                            <FlatList
                                data = {moreDataSource}
                                extraData={this.state}
                                keyExtractor = {item => item.id}
                                ListFooterComponent={this.renderFooter(isMoreLoading)}
                                renderItem={({item})=>(
                                    <ListItemHargaUdang item={item}/>
                                )}
                            />  
                        </List>
                    </Content>
                    <Footer>
                        <View
                            style={{flex:1,flexDirection:'row'}}>
                            
                            <TouchableOpacity
                                style={{backgroundColor:'#003894', width:'50%'}}
                                onPress={this.openModalFilter}>
                                <Row style={{alignSelf :'center', alignContent:'center', marginTop:10, width:150}}>
                                    <Icon name='filter-list' type='MaterialIcons' color='#3178eb'/>
                                    <Col>
                                        <Text style={{textAlign:"center",fontSize:20,color:'#fff'}}>Filter Lokasi</Text>
                                        <Text note style={{textAlign:"center",fontSize:8,color:'#fff'}}>DI Yogyakarta</Text>
                                    </Col>
                                </Row>
                            </TouchableOpacity>
                            
                            <TouchableOpacity 
                                style={{backgroundColor:'#3178eb', width:'50%'}}
                                onPress={this.openModalSort}>
                                <Row style={{alignSelf :'center', alignContent:'center', marginTop:10, width:120}}>
                                    <Icon name='sort' type='MaterialIcons' color='#003894'/>
                                    <Col>
                                        <Text style={{textAlign:"center",fontSize:20,color:'#fff'}}>Urutkan</Text>
                                        <Text note style={{textAlign:"center",fontSize:8,color:'#fff'}}>Terdekat</Text>
                                    </Col>
                                </Row>
                            </TouchableOpacity>
                        </View>
                    </Footer>
                </Container>
            
        )
    }
}

class ModalFilterLokasi extends Component {
    /**
     * 
     * @param {
     * ref
     * } props 
     */
    constructor (props) {
        super(props)
        this.state = {
            modalVisible : false
        }
    }

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    openModal=()=> {
        this.setModalVisible(true);
    }

    closeModal=()=> {
        this.setModalVisible(false);
    }

    render(){
        const {modalVisible} = this.state
        return (
            <Modal
                transparent
                animationType='slide'
                visible={modalVisible}>
                <View
                style={{
                    height:'100%',
                    backgroundColor: 'rgba(1,1,1,0.4)',
                    flex: 1,
                    justifyContent:'flex-end'
                }}>
                <View 
                    style={{
                        backgroundColor:'#3178eb',
                        padding: 15,
                        maxHeight: 500,
                        minHeight: 150
                    }}>
                    <View style={{}}>
                        <View style={{alignItems:'flex-end', marginBottom:10}}>
                            <TouchableOpacity
                                onPress={this.closeModal}>
                                <Text note>Batal</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ marginBottom:5}}>
                        <Text note style={{color:'#fff'}}>Lokasi :</Text>
                    </View>
                    <Item regular style={{backgroundColor:'#fff'}}>
                        <Input placeholder='Ketik lokasi ...'/>
                        <Icon name='search' />
                    </Item>
                    
                </View>
                    <View style={{ padding:20, backgroundColor:'#003894', flexDirection:'row', justifyContent:'space-between'}}>
                        <Button bordered light style={{width:'45%', alignSelf :'center', alignContent:'center'}}>
                            <Text style={{textAlign:'center', flex:1}}>Reset</Text>
                        </Button>
                        <Button light style={{width:'45%', alignSelf :'center', alignContent:'center'}}>
                            <Text style={{textAlign:'center', flex:1}}>Terapkan</Text>
                        </Button>
                    </View>
                </View>
            </Modal>
        )
    }
}

class ModalSorting extends Component {
    /**
     * 
     * @param {
     * ref
     * } props 
     */
    constructor (props) {
        super(props)
        this.state = {
            modalVisible : false
        }
    }

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    openModal=()=> {
        this.setModalVisible(true);
    }

    closeModal=()=> {
        this.setModalVisible(false);
    }

    render(){
        const {modalVisible} = this.state
        return (
            <Modal
                transparent
                animationType='slide'
                visible={modalVisible}>
                <View
                style={{
                    height:'100%',
                    backgroundColor: 'rgba(1,1,1,0.4)',
                    flex: 1,
                    justifyContent:'flex-end'
                }}>
                <View 
                    style={{
                        backgroundColor:'#3178eb',
                        padding: 15,
                        maxHeight: 500,
                        minHeight: 230
                    }}>
                <Content>
                    <List>
                        <View style={{alignItems:'flex-end', marginBottom:10}}>
                            <TouchableOpacity
                                onPress={this.closeModal}>
                                <Text note>Batal</Text>
                            </TouchableOpacity>
                        </View>
                        <Card>
                            <CardItem button bordered header>
                                <Text>Terdekat</Text>
                            </CardItem>
                            <CardItem button bordered>
                                <Text>Termurah</Text>
                            </CardItem>
                            <CardItem button bordered>
                                <Text>Termahal</Text>
                            </CardItem>
                        </Card>
                    </List>
                </Content>
                </View>
                    <View style={{ padding:20, backgroundColor:'#003894', flexDirection:'row', justifyContent:'space-between'}}>
                        <Button light style={{width:'100%', alignSelf :'center', alignContent:'center'}}>
                            <Text style={{textAlign:'center', flex:1}}>Terapkan</Text>
                        </Button>
                    </View>
                </View>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    HeaderTitle : {
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: 'red',
        flexGrow:1,
        alignSelf:'center',
        alignItems: 'center'
    }
})
