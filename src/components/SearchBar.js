import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return (
        <View style={styles.backgroundStyle}>
            <Feather style={styles.iconStyle} name="search" />
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.inputStyle}
                placeholder="Search"
                value={term}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}
            />
        </View>
        );
}

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#E6E6E6',
        height: 50,
        borderRadius: 5,
        flexDirection: 'row',
        marginTop: 15,
        marginHorizontal: 15
    },
    inputStyle: {
    fontSize: 18,
        flex: 1,
    },
    iconStyle:{
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 10
    }
});

export default SearchBar;