import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList,Image } from 'react-native';
import yelp from '../api/yelp';

const ResultShowScreen = ({ navigation }) => {
    const id = navigation.getParam('id');
    const [result, setResult] = useState(null);

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    }

    useEffect(() => {
        getResult(id);
    }, []);

    if (!result) {
        return null;
    }

    return (
        <>
            <Text>{result.name}</Text>

            <FlatList
                showsHorizontalScrollIndicator={false}
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={({ item }) => {
                    return (
                        <Image style={styles.Image} source={{ uri: item }} />
                    );
                }}
            />


        </>   
    );
}

const styles = StyleSheet.create({
    Image: {
        height: 200,
        width: 300
    }
});

export default ResultShowScreen;