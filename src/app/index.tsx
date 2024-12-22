import { View } from "react-native";
import { Text } from "react-native";

const Home = () => {
  return (
    <View className="flex-1 justify-center items-center">
      {/* ヘッダー */}
      <View>
        <View>
          <Text>Memo App</Text>
          <Text>ログアウト</Text>
        </View>
      </View>

      {/* メモリスト */}
      <View>
        <View>
          <View>
            <Text>買い物リスト</Text>
            <Text>2023年10月1日 10:00</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>
      </View>

      {/* 追加ボタン */}
      <View>
        <Text>+</Text>
      </View>
    </View>
  );
}

export default Home