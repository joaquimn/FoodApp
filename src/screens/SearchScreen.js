import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet,  ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultList from '../components/ResultList';

const SearchScreen = () => {

    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = (price) => {
        return results.filter(result => {
            return result.price === price;
        });
    };

    return (
        <>
            <SearchBar
                term={term}
                onTermChange={newTerm => setTerm(newTerm)}
                onTermSubmit={() => searchApi(term)}
            />

            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <ScrollView >
                <ResultList results={filterResultsByPrice('$')} title="Cost Effective" />
                <ResultList results={filterResultsByPrice('$$')} title="Bit Pricier" />
                <ResultList results={filterResultsByPrice('$$$')} title="Big Spender" />
                <ResultList results={filterResultsByPrice('$$$$')} title="Super expensive" />
            </ScrollView >
        </>
        );
}

//show # of restaurants
//<Text style={styles.container}>We have found {results.length} results</Text>

const styles = StyleSheet.create({

});

export default SearchScreen;