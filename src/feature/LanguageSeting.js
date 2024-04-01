import React, { useState } from 'react';
import { View, Text } from 'react-native';
import CheckBox from 'expo-checkbox';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../tools/Colors';


const LanguageSetting = () => {
    const [selectedLanguages, setSelectedLanguages] = useState([]);

    const handleLanguageSelection = (language) => {
        if (selectedLanguages.includes(language)) {
            setSelectedLanguages(selectedLanguages.filter((lang) => lang !== language));
        } else {
            setSelectedLanguages([...selectedLanguages, language]);
        }
    };

    return (
        <View style={{ flex: 1, alignItems: 'center'}}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '90%', marginBottom: 40, marginTop: 50 }}>
                <Ionicons name="menu" size={28} color= {Colors.green} />
                <Text style={{ fontSize: 18, fontWeight: '500', color: Colors.TextColor, lineHeight: 22, marginTop: 5 }}>Language</Text>
                {/* <TouchableOpacity onPress={() => navigation.navigate('Notifications')}> */}
                <Ionicons name="notifications" size={28} color={Colors.black} />
                {/* </TouchableOpacity> */}
            </View>
            <View style={{ flexDirection: 'column', alignItems: 'center', width: '100%', justifyContent: 'space-between' }}>
                <Text style={{ fontSize: 15, fontWeight: '700', color: '#303535', lineHeight: 22, marginTop: 5, marginBottom: 10, width: '90%'}}>Suggested</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', width: '90%' }}>
                    <CheckBox
                        value={selectedLanguages.includes('English')}
                        onValueChange={() => handleLanguageSelection('English')}
                        tintColors={{ true: 'black', false: 'black' }}
                    />
                    <Text>English</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', width: '90%' }}>
                    {/* <CheckBox
                        value={selectedLanguages.includes('Spanish')}
                        onValueChange={() => handleLanguageSelection('Spanish')}
                        tintColors={{ true: 'black', false: 'black' }}
                    /> */}
                    <Text>Spanish</Text>
                </View>
            </View>
        </View>
    );
};

export default LanguageSetting;
