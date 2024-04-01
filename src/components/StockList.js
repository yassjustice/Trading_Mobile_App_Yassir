import React from 'react';
import { View, StyleSheet, Text, Image, Dimensions, ScrollView } from 'react-native';
import { Colors } from '../tools/Colors';
// import {ChartDot, ChartPath, ChartPathProvider, monotoneCubicInterpolation} from '@rainbow-me/animated-charts';
import { VictoryLine } from "victory-native";
import { getTopStocksRecommendations } from '../api/stockApi';
import { useState } from 'react';
import { useEffect } from 'react';

const StockList = () => {
    const { width } = Dimensions.get('window');
    const [recommendationMessage, setRecommendationMessage] = useState('');

    // const getStockRecom = async () => {
    //     try {
    //         // handle sign in with google logic here
    //         const response = await getTopStocksRecommendations();
    
    //         if (response.data && response.data.message) {
    //             setRecommendationMessage(response.data.message);
    //             // the get method is working
    //             console.log(response.data.message);
    //         } else {
    //             setRecommendationMessage('No message received');
    //         }
    //     } catch (error) {
    //         console.error('Error fetching recommendations:', error);
    //         setRecommendationMessage('Error fetching recommendations');
    //     }
    // };
    

     // Call the function when the component mounts
     useEffect(() => {
        getStockRecom();
    }, []);

    const data = [
        { x: 1, y: 3 },
        { x: 2, y: 3.3 },
        { x: 3, y: 2.9 },
        { x: 4, y: 4.2 },
        { x: 5, y: 3.5 },
        { x: 6, y: 4.5 },
        { x: 7, y: 3.9 },
        { x: 8, y: 3.8 },
        { x: 9, y: 4.1 },
        { x: 10, y: 3.6 },
        { x: 11, y: 3.8 },
        { x: 12, y: 3.4 },
        { x: 13, y: 3.7 },
        { x: 14, y: 3.5 },
        { x: 15, y: 3.8 },
        { x: 16, y: 3.6 },
        { x: 17, y: 3.9 },
        { x: 18, y: 3.7 },
        { x: 19, y: 3.8 },
        { x: 20, y: 3.6 },
        { x: 21, y: 3.9 },
        { x: 22, y: 3.7 },
        { x: 23, y: 3.8 },
        { x: 24, y: 4.6 },
      ];


      
    return (
        <ScrollView style={{marginBottom: 40, height: 800, width: '100%'}}>
            <View style={styles.container}>
                 <View style={{width: '95%', marginBottom: 30, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    <Text style={{ fontSize: 18, fontWeight: '500', color: Colors.TextColor, lineHeight: 22 }}>Top Stocks</Text>
                    <Text style={{ fontSize: 15, fontWeight: '500', color: Colors.green, lineHeight: 22 }} onPress={getStockRecom} >See All</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '95%', marginBottom: 20, height: 74, backgroundColor: '#e6f2ec', borderRadius: 15, alignItems: 'center', padding: 10}}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '22%', alignItems: 'center'}}> 
                        <Image source={require('../../assets/google.png')} style={{width: 40, height: 40}} />
                        <Text style={{ fontSize: 16, fontWeight: '500', color: Colors.TextColor, lineHeight: 22}}>Google</Text>
                    </View>
                    {/* <VictoryChart> */}
                        <VictoryLine
                            style={{
                            data: { 
                                stroke: "#30E0A1",
                                strokeWidth: 1
                            },
                            parent: { border: "1px solid #ccc"}
                            }}
                            animate
                            data={data}
                            width={width * 0.5}
                            height={width * 0.40}
                            x="x"
                            y="y"
                        />
                    {/* </VictoryChart> */}
                    <View style={{ flexDirection: 'column', justifyContent: 'space-between', width: '25%', alignItems: 'center'}}>
                        <Text style={{ fontSize: 16, fontWeight: '500', color: Colors.TextColor, lineHeight: 22}}>$2,673.90</Text>
                        <Text style={{ fontSize: 16, fontWeight: '500', color: Colors.green, lineHeight: 22}}>+%5.58</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        alignContent: 'center',
        width: '100%',
    }
});

export default StockList;
