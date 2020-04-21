import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import ResultDetails from './ResultsDetail';
import { withNavigation } from 'react-navigation';

const ResultList = ({ title, results, navigation }) => {

    console.log(results);
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
                        return (
                            <TouchableOpacity onPress={() => navigation.navigate('ResultShow', { id: item.id })}>
                                <ResultDetails result={item} />
                            </TouchableOpacity>
                        );
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

export default withNavigation( ResultList );