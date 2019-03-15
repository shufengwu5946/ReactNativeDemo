import React from "react";
import fetchGet from "../fetch/get";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Alert,
  RefreshControl
} from "react-native";

export default class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [], refreshing: false };
    this.getList = this.getList.bind(this);
    this._onRefresh = this._onRefresh.bind(this);
  }

  getList() {
    this.setState({ refreshing: true });
    fetchGet(
      "https://api.apiopen.top/getSongPoetry",
      {
        page: 1,
        count: 20
      },
      data => {
        this.setState({ data: data.result, refreshing: false });
      },
      function(error) {
        console.log(error);
        this.setState({ refreshing: false });
      }
    );
  }

  _onRefresh() {
    this.getList();
  }

  componentDidMount() {
    // var ws = new WebSocket("ws://121.40.165.18:8800");

    // ws.onopen = () => {
    //   ws.send("something");
    // };

    // ws.onmessage = e => {
    //   alert(e.data);
    // };

    // ws.onerror = e => {
    //   alert(e.message);
    // };

    // ws.onclose = e => {
    //   console.log(e.code, e.reason);
    // };
    this.getList();
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => (
            <Text style={styles.item}>
              {item.title + " " + item.authors + " " + item.content}
            </Text>
          )}
          keyExtractor={(item, index) => index.toString()}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh}
            />
          }
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
    fontSize: 18
  }
});
