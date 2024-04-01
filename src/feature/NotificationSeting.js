import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors } from '../tools/Colors';
import { Ionicons } from '@expo/vector-icons';

const NotificationSetting = ({navigation}) => {
  const [notification, setNotification] = useState(true);
  const [sound, setSound] = useState(true);
  const [vibrate, setVibrate] = useState(true);
  const [appUpdate, setAppUpdate] = useState(true);
  const [stockReminder, setStockReminder] = useState(true);
  const [newService, setNewService] = useState(true);
  const [newTips, setNewTips] = useState(true);

  const toggleNotification = () => setNotification(previousState => !previousState);
  const toggleSound = () => setSound(previousState => !previousState);
  const toggleVibrate = () => setVibrate(previousState => !previousState);
    const toggleAppUpdate = () => setAppUpdate(previousState => !previousState);
    const toggleStockReminder = () => setStockReminder(previousState => !previousState);
    const toggleNewService = () => setNewService(previousState => !previousState);
    const toggleNewTips = () => setNewTips(previousState => !previousState);


  return (
    <View style={styles.container}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginBottom: 50, marginTop: 30}}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back-outline" size={28} color= {Colors.TextColor} />
          </TouchableOpacity>
            <Text style={{ fontSize: 18, fontWeight: '500', color: Colors.TextColor, lineHeight: 22, marginTop: 5 }}>Setings</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
          <Ionicons name="notifications" size={28} color={Colors.black} />
          </TouchableOpacity>
        </View>
        <View style={{width: '100%', alignItems: 'flex-start'}}>
            <Text style={{ fontSize: 15, fontWeight: '700', color: '#303535', lineHeight: 22, marginTop: 5, marginBottom: 10}}>General</Text>
            <View style={styles.option}>
                <Text style={styles.optionText}>Notification</Text>
                <Switch
                trackColor={{ false: Colors.white, true: Colors.black }}
                thumbColor={notification ? '#f4f3f4' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleNotification}
                value={notification}
                />
            </View>
            <View style={styles.option}>
                <Text style={styles.optionText}>Sound</Text>
                <Switch
                trackColor={{ false: Colors.white, true: Colors.black }}
                thumbColor={sound ? '#f4f3f4' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSound}
                value={sound}
                />
            </View>
            <View style={styles.option}>
                <Text style={styles.optionText}>Vibrate</Text>
                <Switch
                trackColor={{ false: Colors.white, true: Colors.black }}
                thumbColor={vibrate ? '#f4f3f4' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleVibrate}
                value={vibrate}
                />
            </View>
        </View>
        {/* line in center */}
        <View style={{width: '90%', height: 2, backgroundColor: Colors.black, marginTop: 20, marginBottom: 20}}></View>
        <View style={{width: '100%', alignItems: 'flex-start'}}>
            <Text style={{ fontSize: 15, fontWeight: '700', color: '#303535', lineHeight: 22, marginTop: 5, marginBottom: 10}}>System & Services Updates</Text>
            <View style={styles.option}>
                <Text style={styles.optionText}>App Updates</Text>
                <Switch
                trackColor={{ false: Colors.white, true: Colors.black }}
                thumbColor={appUpdate ? '#f4f3f4' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleAppUpdate}
                value={appUpdate}
                />
            </View>
            <View style={styles.option}>
                <Text style={styles.optionText}>Stock Reminder</Text>
                <Switch
                trackColor={{ false: Colors.white, true: Colors.black }}
                thumbColor={stockReminder ? '#f4f3f4' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleStockReminder}
                value={stockReminder}
                />
            </View>
        </View>
        {/* line in center */}
        <View style={{width: '90%', height: 2, backgroundColor: Colors.black, marginTop: 20, marginBottom: 20}}></View>
        <View style={{width: '100%', alignItems: 'flex-start'}}>
            <Text style={{ fontSize: 15, fontWeight: '700', color: '#303535', lineHeight: 22, marginTop: 5, marginBottom: 10}}>System & Services Updates</Text>
            <View style={styles.option}>
                <Text style={styles.optionText}>New Service Available</Text>
                <Switch
                trackColor={{ false: Colors.white, true: Colors.black }}
                thumbColor={newService ? '#f4f3f4' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleNewService}
                value={newService}
                />
            </View>
            <View style={styles.option}>
                <Text style={styles.optionText}>New Tips Available</Text>
                <Switch
                trackColor={{ false: Colors.white, true: Colors.black }}
                thumbColor={newTips ? '#f4f3f4' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleNewTips}
                value={newTips}
                />
            </View>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 20,
    alignItems: 'center',
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
  },
  optionText: {
    fontSize: 15,
    color: '#303535',
  },
});

export default NotificationSetting;