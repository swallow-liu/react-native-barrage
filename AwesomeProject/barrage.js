import React, {Component} from 'react'
import {Animated, View, Text, StyleSheet} from 'react-native'

export default class Barrage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            positionAnmi: new Animated.Value(400),
            barrage:[["包子","要","减肥肥"],["包子","要","减肥肥"],["吃得好撑","护航护航"]]
        }
    }
    componentDidMount(){
        /*该方法只执行一次*/
        // Animated.timing(
        //     this.state.positionAnmi,
        //     {
        //         toValue: -666,
        //         duration: 10000,
        //     }
        // ).start(function(){
        //     console.log("动画执行结束")
        // })
        let listenVariable  = "新加的"
        /*获取随机数*/
        let random = Math.ceil(Math.random()*3)
        let newBarrage = this.state.barrage
        newBarrage[random].push(listenVariable)
        this.setState({barrage:newBarrage})
        /*该方法将 循环执行 iterations 是循环的次数*/
        Animated.loop( Animated.timing(
            this.state.positionAnmi,
            {
                toValue: -666,
                duration: 10000,
            }
        ),{iterations:2}).start()
    }
    /*实时监听，当监听到新的变化的时候，将监听到的东西追加到 后面*/
    render() {
        const { barrage} = this.state
        return (
            <View style={styles.container}>
                <View style={styles.barrageView}>
                    <Animated.Text style={{left:this.state.positionAnmi}}>
                        {barrage[1].length !== 0?barrage[1].map((item,index)=>{
                            return <Text style={styles.barrageText} key={index}>{item}</Text>
                        }):''}
                    </Animated.Text>
                </View>
                <View style={styles.barrageView}>
                    <Animated.Text style={{left:this.state.positionAnmi}}>
                        {barrage[0].length !== 0?barrage[0].map((item,index)=>{
                            return <Text style={styles.barrageText} key={index}>{item}</Text>
                        }):''}
                    </Animated.Text>
                </View>
                <View style={styles.barrageView}>
                    <Animated.Text style={{left:this.state.positionAnmi}}>
                        {barrage[2].length !== 0 ?barrage[2].map((item,index)=>{
                            return <Text style={styles.barrageText} key={index}>{item}</Text>
                        }):''}
                    </Animated.Text>
                </View>
            </View>
        )
    }

}
const styles = StyleSheet.create({
    barrageView:{
        backgroundColor:'rgba(0,0,0,0.7)',
        width:'100%',
        height:40,
        borderBottomWidth:1,
        borderColor:'#ffffff'
    },
    barrageText:{
        position:'absolute',
        left:400,
        color:'#ffffff',
    },
    container:{
        marginTop:80
    }
})