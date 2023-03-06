import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Component from './components/react_component/component';
import ButtonPressEvent from './components/events/buttonPressEvent';
import State from './components/states/state';
import Props from './components/props/props';
import OnChangeTextEvent from './components/events/onChangeText';
import SimpleForm from './components/react_component/simpleform';
import FlatListExp from './components/react_component/flatListExp';
import MapListExp from './components/react_component/mapListExp';
import GridView from './components/react_component/gridList';
import ComponentInFlatList from './components/react_component/componentInFlatList';
import SelectionListExp from './components/react_component/selectionList';
import UseEffectHook from './components/hooks/useEffectHook';
import RadioButton from './components/snippets/radioButton';
import RadioButtonDynamic from './components/snippets/radioButtonDynamic';
import ActivityIndicatorExp from './components/snippets/ActivityIndiator';
import PressableEvent from './components/events/pressableEvent';
import PlatformOs from './components/react_component/platformOs';
import WebViewExp from './components/snippets/webViewExp';
import SimpleAPI from './components/restAPI/simpleApi';
import ListWithAPi from './components/restAPI/listWithApi';
export default function App() {
  let name = 'Adnan-Zaib';
  let email = 'adnanzaib486@gmail.com';
  return (
  <View style={styles.container}>
    <Text style={styles.heading}>React Native Developement</Text>
    <StatusBar style="auto" />
      {/* <Component /> */}
      {/* <ButtonPressEvent /> */}
      {/* <State /> */}
      {/* <Props name={name} email={email} /> */}
      {/* <OnChangeTextEvent /> */}
      {/* <SimpleForm /> */}
      {/* <FlatListExp /> */}
      {/* <MapListExp /> */}
      {/* <GridView /> */}
      {/* <ComponentInFlatList /> */}
      {/* <SelectionListExp /> */}
      {/* <UseEffectHook /> */}

      {/* <RadioButton />  */}
      {/* <RadioButtonDynamic /> */}

      {/* <ActivityIndicatorExp /> */}

      {/* <PressableEvent /> */}

      {/* <PlatformOs /> */}

      {/* <WebViewExp /> */}

      {/* Fetch Api */}

      {/* <SimpleAPI /> */}

      <ListWithAPi />



    </View>


    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:30
    
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  heading: {
    color: 'green',
    fontSize: 20,
  }
});
