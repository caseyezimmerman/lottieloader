import React, { Component } from 'react'
import { ScrollView, Image, Text, View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import FadeImage from 'react-native-fade-image'
import Ionicons from 'react-native-vector-icons/Ionicons';
import LottieCheckSuccess from './check'
import ProgressCircle from 'react-native-progress-circle'

class Results extends Component{
  constructor(){
    super();
  }


  render(){
  	if( this.props.results.data === undefined){
  		this.props.results.data = ""
  	}

    var lottie = undefined
    if(this.props.results.data.minutes != undefined){
      lottie = <LottieCheckSuccess />
    }else{
      lottie = <Text></Text>
    }

  	// var distance = (this.props.results.data.distance).toFixed(2)
  	// console.log(distance)
  	// }else if(this.props.results.data.seconds === undefined){
  	// 	this.props.results.data.seconds = ""
  	// }
  	if(this.props.results.data.minutes === undefined){
  		var minutes = '00'
  	}else {
  		minutes = this.props.results.data.minutes
  	}
  	
  	if(this.props.results.data.seconds === undefined){
  		var seconds = '00'
  	}else{
  		seconds = this.props.results.data.seconds
  	}

  	if(this.props.results.data.distance != undefined){
  	var distance = (this.props.results.data.distance).toFixed(2)
  	console.log(distance)
  	}
  	var calories = ((this.props.results.data.distance)*100).toFixed(2)
    var percent = (distance)*100
    return (
    <ScrollView style={{backgroundColor:'#337ab2'}}>
      <View>
      {lottie}
        <ProgressCircle
              percent={percent}
              radius={120}
              borderWidth={10}
              color="#eb8124"
              shadowColor="lightgrey"
              bgColor="white"
              // containerStyle={{backgroundColor:'red', position:'absolute', left:30}}
          /> 
        </View>
        <Text style={styles.miles}>{distance} miles</Text>
    <Ionicons
            name={'md-alarm'}
            size={45}
            style={styles.timeIcon}
        ></Ionicons>
        <Ionicons
            name={'ios-flame'}
            size={45}
            style={styles.calIcon}
        ></Ionicons>
      <Text style={styles.time}>{minutes}:{seconds}</Text>
      <Text style={styles.cal}>{calories}</Text>
    </ScrollView>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
	return {
		results: state.map
	};
}

const styles = StyleSheet.create({
	cal:{
		// flex:1,
		textAlign:'center',
		fontSize:30,
		marginTop:50,
		position:'absolute',
		top:470,
		right:70
	},
	image:{
		marginLeft:45,
		marginTop:70,
	},
	miles:{
		fontSize:40,
		position:'absolute',
		left:105,
		top:280
	},
	timeIcon:{
		position:'absolute',
		top:460,
		left:90
	},
	time:{
		textAlign:'center',
		fontSize:30,
		marginTop:50,
		position:'absolute',
		top:470,
		left:70
	},
	calIcon:{
		position:'absolute',
		top:460,
		right:100
	}

})


export default connect(mapStateToProps)(Results);

// export default Results


