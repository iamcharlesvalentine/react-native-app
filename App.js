import React, { Component } from 'react';
import {
    ImageBackground,
    StyleSheet,
    Dimensions,
    ScrollView,
    View, Image, Text
} from 'react-native';

export default class IScrolledDown extends Component {
    render() {
        return (
            <ScrollView>
                <View style={styles.bannerText}>
                    <Text>Bucket.ist</Text>
                </View>
                <View style={styles.container}>
                    <ImageBackground style={styles.backImage} source={{
                        uri: "https://cdn3.img.sputniknews.com/images/105192/87/1051928744.jpg"}} >
                    <Text style={styles.innerText}>Bug Feast</Text>
                </ImageBackground>
                </View>
                <View style={styles.container}>
                    <ImageBackground style={styles.backImage} source={{
                        uri: "https://www.millerwelds.com/-/media/miller-electric/images/article-images/5/3/f/3986_titanium-helmet.jpg?h=1800&w=2700&la=en&hash=44B4AF8EFCCDD61033BFA52EBAC4932C989D6EEF"}}>
                        <Text style={ styles.innerText }>Welding</Text>
                </ImageBackground>
                </View >
                <View style={styles.container}>
                    <ImageBackground style={styles.backImage} source={{
                        uri: "https://media-dev.company.wizards.com/s3fs-public/06%20News/03%20Article%20Content%20Images/HollywoodReporter_A_List_Stars_Are_Playing_DnD_Content-Image.jpg"}}>
                    <Text style={styles.innerText}>D&D</Text>
                </ImageBackground>
                </View >
                <View style={styles.container}>
                    <ImageBackground style={styles.backImage} source={{
                     uri: "https://images.unsplash.com/photo-1469827160215-9d29e96e72f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1652&q=80"}}> 
                <Text style={styles.innerText}> Go here now</Text>
                </ImageBackground>
                </View >
                <Text style={{ fontSize: 96 }}>If you like Pay me!</Text> 
            </ScrollView>  
             
        );
    }
}

const styles = StyleSheet.create({
    innerText: {
        color: 'white',
        fontSize: 36
    },
    bannerText: {
        color: 'white',
        fontSize: 36,
        height: 60,
        width: 250,
        justifyContent: 'center',
        alignItems: 'center',
    },
    backImage: {
        height: 180,
        width: 250,
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
});
