import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import ResultDetails from './ResultsDetail';

const ResultList = ({ title, results }) => {
    if (results.length > 0) {
        return (
            <View style={styles.container}>
                <Text style={styles.titleStyle}>
                    {title}
                </Text>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={results}
                    keyExtractor={result => result.id}
                    renderItem={({ item }) => {
                        return <ResultDetails result={item} />
                    }}
                />
            </View>
        )
    }
    else {
        return null;
    }
}

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: 15,
        marginBottom: 5
    },
    container: {
        marginBottom: 10
    }
});

export default ResultList;