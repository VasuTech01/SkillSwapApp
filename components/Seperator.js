import { View,Text, StyleSheet } from "react-native";

const Seperator = ({title}) => {
    return <View style={{ flexDirection: 'row', alignItems: 'center',paddingHorizontal:0 }}>
        <View style={{ flex: 1, height: 1, backgroundColor: '#fa1' }} />
        {title&&<View>
            <Text style={{ width: "auto", textAlign: 'center', fontSize: 16,fontWeight:"bold", marginHorizontal: 5 }}>{title}</Text>
        </View>}
        <View style={{ flex: 1, height: 1, backgroundColor: '#faa' }} />
    </View>;
};

const styles = StyleSheet.create({
    seperator: {
        borderBottomColor: "#fff",
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
});

export default Seperator;