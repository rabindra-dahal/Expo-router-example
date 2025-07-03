import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
      }}
    >
      <Text>Home Page</Text>
      <Link href={'/about'}>About</Link>
      <Link href={'/profile'} style={{ color: 'red',}}>Profile</Link>
    </View>
  );
}
