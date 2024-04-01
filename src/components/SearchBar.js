import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../tools/Colors';

const SearchBar = ({ searchTerm, onSearchTermChange, onFilterPress }) => {
    return (
        <View style={styles.container}>
            <View style={styles.searchBarContainer}>
                <TextInput
                    style={styles.searchBar}
                    placeholder="Search"
                    value={searchTerm}
                    onChangeText={onSearchTermChange}
                />
                <TouchableOpacity>
                <Ionicons name="search" size={24} color="black" style={styles.searchIcon} />
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={onFilterPress} style={styles.filterBox}>
                <Ionicons name="filter" size={24} color="black" style={styles.filterIcon} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginVertical: 10,
    },
    searchBarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderRadius: 15,
        flex: 1,
        marginRight: 10,
    },
    searchIcon: {
        marginHorizontal: 10,
    },
    searchBar: {
        flex: 1,
        fontSize: 18,
        height: 52,
        padding: 10,
    },
    filterIcon: {
        color: '#ffffff',
    },
    filterBox: {
        width: 52,
        height: 52,
        borderRadius: 15,
        backgroundColor: Colors.green,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default SearchBar;
