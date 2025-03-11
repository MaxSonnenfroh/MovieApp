import SearchBar from "@/components/SearchBar";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { Image, ScrollView, View } from "react-native";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  const onSearch = () => {
    router.push("/search");
  }

  return (
    <View className="flex-1 bg-primary"> 
      <Image source={images.bg} className="absolute w-full z-0"></Image>
      <ScrollView className="flex-1 pd-5" showsVerticalScrollIndicator={false} contentContainerStyle={{ minHeight: "100%", paddingBottom: 10 }}>
        <Image source={icons.logo} className="w-12 h-10 mt-20 mb-5 mx-auto"></Image>
        <View className="flex-1 mt-5">
          <SearchBar 
            onPress={onSearch}
            placeholder="Search for a movie"
          />
        </View>
      </ScrollView>
    </View>
  );
}
