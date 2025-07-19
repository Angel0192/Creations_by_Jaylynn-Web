import React from "react";
import { StyleSheet, Text, View } from "react-native";

const productTile = () => {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Text style={styles.category}>ACCESSORIES</Text>
                <Text style={styles.price}>$3.99</Text>
            </View>

            <View style={styles.image}>
                <Text>Image</Text>
            </View>

            <View style={styles.product}>
                <Text style={styles.productText}>FOOTBALL MOM PEN</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#e9e9e9",
        height: 350,
        width: 250,
        marginRight: 10,
        marginLeft: 10,
        borderRadius: 8,
        alignContent: "center"
    },

    category:{
        padding: 8,
        color: "black",
        fontSize: 15,
        fontFamily: 'Inter_300Regular',
        userSelect: "none",
    },

    price: {
        padding: 8,
        color: "black",
        fontSize: 15,
        fontFamily: 'Inter_300Regular',
        userSelect: "none",
    },

    row:{
        justifyContent: 'space-between',
        flexDirection: 'row',
    },

    image:{
        flex: 1, // Takes up available space
        justifyContent: "center",
        alignItems: "center",
    },

    product:{
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: 15, // Space from bottom edge
        paddingHorizontal: 8, // Left and right padding
    },

    productText: {
        color: "black",
        fontSize: 15,
        fontFamily: 'Inter_300Regular',
        fontWeight: "bold",
        userSelect: "none",
        textAlign: "center", // Centers text if it wraps to multiple lines
    }
});

export default productTile;