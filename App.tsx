import React from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    Image,
    View,
    Text
} from "react-native";

const App = (): JSX.Element => {
    return <View
        style={styles.container}
    >
        <View
            style={styles.headerContainer}
        >
            <View
                style={styles.headerLeftContainer}
            >
                <Image
                    source={require("./manzara.jpg")}
                    height={50}
                    width={50}
                    style={styles.headerLogo}
                />
                <Text
                    style={styles.headerTitle}
                >
                    Furkan Atakan BOZKURT
                </Text>
            </View>
            <TouchableOpacity
                style={styles.close}
            >
                <Text>
                    Menu
                </Text>
            </TouchableOpacity>
        </View>

        <View
            style={{
                padding: 20,
                flex: 1
            }}
        >
            <TouchableOpacity
                onPress={() => {
                    alert("coo");
                }}
                style={{
                    justifyContent: "space-between",
                    backgroundColor: "white",
                    flexDirection: "row",
                    alignItems: "center",
                    borderRadius: 10,
                    padding: 20
                }}
            >
                <View
                    style={{
                        flexDirection: "column"
                    }}
                >
                    <Text>
                        Büyük Başlık
                    </Text>
                    <Text>
                        Küçük çokta uzun olmayan contentcik.
                    </Text>
                </View>
                <TouchableOpacity
                    onPress={() => {
                        alert("boo");
                    }}
                >
                    <Text
                        style={{
                            color: "red"
                        }}
                    >
                        KAPAT
                    </Text>
                </TouchableOpacity>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => {
                    alert("dıştaki");
                }}
                style={{
                    padding: 40
                }}
            >
                <Text
                    onPress={() => {
                        alert("içteki");
                    }}
                    style={{
                        fontSize: 20
                    }}
                >
                    TEST ET BENİ
                </Text>
            </TouchableOpacity>
        </View>
    </View>;
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#d0d0d0",
        flex: 1
    },
    headerContainer: {
        justifyContent: "space-between",
        backgroundColor: "#ffffff",
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        padding: 5,
        height: 60
    },
    headerLeftContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    headerLogo: {
        borderRadius: 30,
        marginRight: 10,
        height: 50,
        width: 50
    },
    headerTitle: {
        fontSize: 20
    },
    close: {
        backgroundColor: "red",
        height: 50,
        width: 50
    }
});
export default App;
