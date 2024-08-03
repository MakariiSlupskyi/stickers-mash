import { StyleSheet, View, Image } from "react-native";

export default function ImageViewer({ imageSource }) {
    return (
        <View style={styles.container}>
            <Image source={imageSource} style={styles.image} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: 320,
        height: 440,
        borderRadius: 18,
    },
});