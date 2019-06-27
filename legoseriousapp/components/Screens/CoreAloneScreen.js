import React, {Component} from 'react';
import { Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';

export default class CoreAloneScreen extends React.Component {
  constructor(props) {
    super(props);
    this.openNavigator = this.openNavigator.bind(this);
  }

  openNavigator() {
    if ((this.props.navigation || {}).navigate) {
      this.props.navigation.openDrawer() 
    }  
  }


  render() {
    const callable = this.openNavigator || (() => console.log('SideMenuButton: Callable'));
    
    return (
        <View style={{flex:1, backgroundColor: '#F9C137'}}>
            <TouchableOpacity onPress={() => callable()}>
                    <Icon name='three-bars' size={30} color='#000' style={{marginTop: 35, marginLeft:'4%'}}/>
            </TouchableOpacity>
            <Text style={{fontSize: 24, color: 'white',fontWeight: 'bold', marginTop:'1%', marginLeft:157, fontWeight:'500'}}>CORE</Text>

            <TouchableOpacity style={{position: 'absolute', top: 125, left: 150}} onPress={()=> this.props.navigation.navigate('EtiquetteScreen')}>
                <View style={{height: 80, width : 80, borderRadius: 40, backgroundColor: '#c1911b'}}> </View>
                <Text style={{fontSize: 14, color: 'white',fontWeight: 'bold', marginTop:'2%', marginLeft:'5%', fontWeight:'400'}}>Etiquette</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{position: 'absolute', top: 250, left: 75}} onPress={()=> this.props.navigation.navigate('HowToBuildScreen')}>
                <View style={{height: 80, width : 80, borderRadius: 40,backgroundColor: '#c1911b'}}> </View>
                <Text style={{fontSize: 14, color: 'white',fontWeight: 'bold', marginTop:'2%', marginLeft:'18%', fontWeight:'400'}}>Build</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{position: 'absolute', top: 250, right: 75}} onPress={()=> this.props.navigation.navigate('StorytellingScreen')}>
                <View style={{ height: 80, width : 80, borderRadius: 40, backgroundColor: '#c1911b'}}> </View>
                <Text style={{fontSize: 14, color: 'white',fontWeight: 'bold', marginTop:'2%', marginLeft:'0%', fontWeight:'400'}}>Storytelling</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{position: 'absolute', top: 375, left: 150}} onPress={()=> this.props.navigation.navigate('MetaphorsScreen')}>
                <View style={{ height: 80, width : 80, borderRadius: 40, backgroundColor: '#c1911b'}}> </View>
                <Text style={{fontSize: 14, color: 'white',fontWeight: 'bold', marginTop:'2%', marginLeft:'5%', fontWeight:'400'}}>Metaphor</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{position: 'absolute', top: 500, left: 25}} onPress={()=> this.props.navigation.navigate('MindGame')}>
                <View style={{ height: 80, width : 80, borderRadius: 40, backgroundColor: '#c1911b'}}> </View>
                <Text style={{fontSize:14, color: 'white',fontWeight: 'bold', marginTop:'2%', marginLeft:'0%', fontWeight:'400'}}>Mind game</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{position: 'absolute', top: 500, left: 150}} onPress={()=> this.props.navigation.navigate('Game')}>
                <View style={{ height: 80, width : 80, borderRadius: 40, backgroundColor: '#c1911b'}}> </View>
                <Text style={{fontSize: 14, color: 'white',fontWeight: 'bold', marginTop:'2%', marginLeft:'0%', fontWeight:'400'}}>Collab game</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{position: 'absolute', top: 500, right: 25}} onPress={()=> this.props.navigation.navigate('')}>
                <View style={{ height: 80, width : 80, borderRadius: 40, backgroundColor: '#c1911b'}}> </View>
                <Text style={{fontSize: 14, color: 'white',fontWeight: 'bold', marginTop:'2%', paddingLeft:10, fontWeight:'400'}}>Practical</Text>
            </TouchableOpacity>
            

        </View>
    );
  }
}
