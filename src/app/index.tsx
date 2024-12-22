import { View } from "react-native";
import { Text } from "react-native";

const Home = () => {
  return (
    <View className="flex-1 items-center p-6 bg-slate-500">
      <View className="flex-1 justify-center max-w-[960px] mx-auto">
        <Text className="text-6xl font-bold text-red-500">Hello World</Text>
        <Text className="text-3xl text-[#38434D]">This is the first page of your app.</Text>
      </View>
    </View>
  );
}

export default Home