import React from "react";
import { View, Text, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../redux/index"


const Home = () => {
    const { subContainerStyle, textStyle, textView, Container } = Styles;

    const counter = useSelector((state) => state.AccountReducer)
    console.log(counter)

    const dispatch = useDispatch();

    const { increase_counter, decrease_counter } = bindActionCreators(actionCreators, dispatch)

    return (

        <View style={Container}>
            <View style={textView}>
                <Text>{counter}</Text>
            </View>
            <View style={subContainerStyle}>
                <Button title="arttır" onPress={() => increase_counter(100)} />
                <Button color="red" title="azalt" onPress={() => decrease_counter(100)} />
            </View>
        </View>
    )
}

const Styles = {
    Container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    subContainerStyle: {
        margin: 20,
        flexDirection: "row"
    },
    textStyle: {
        fontSize: 30,
        fontWeight: "bold",

    },
    textView: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20
    }
}
export default Home;