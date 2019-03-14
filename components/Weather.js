import React from "react";
import fetchGet from "../fetch/get";
import { FlatList, StyleSheet, Text, View, Alert } from 'react-native';

export default class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: [] };
    }
    componentDidMount() {
        var ws = new WebSocket('ws://121.40.165.18:8800');

        ws.onopen = () => {
            ws.send('something');
        };

        ws.onmessage = (e) => {
            alert(e.data);
        };

        ws.onerror = (e) => {
            alert(e.message);
        };

        ws.onclose = (e) => {
            console.log(e.code, e.reason);
        };
        fetchGet('https://api.apiopen.top/getSongPoetry',
            {
                page: 1,
                count: 20,
            },
            (data) => {
                this.setState({ data: data.result });
            },
            function (error) {
                console.log(error);
            });
    }
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.data}
                    renderItem={({ item }) => <Text style={styles.item}>{item.title + ' ' + item.authors + ' ' + item.content}</Text>}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    item: {
        padding: 10,
        fontSize: 18,
    },
});