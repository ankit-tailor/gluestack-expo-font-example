import { SafeAreaView } from "react-native";
import {
  Box,
  Text,
  GluestackUIProvider,
  VStack,
  Image,
  Heading,
  Link,
  LinkText,
} from "@gluestack-ui/themed";

import {
  useFonts,
  Almarai_300Light,
  Almarai_400Regular,
  Almarai_700Bold,
  Almarai_800ExtraBold,
} from "@expo-google-fonts/almarai";
import { config } from "./gluestack-ui.config";

const Example = () => {
  const [fontsLoaded] = useFonts({
    Almarai_300Light,
    Almarai_400Regular,
    Almarai_700Bold,
    Almarai_800ExtraBold,
  });

  if (!fontsLoaded) {
    return <Text>Loading</Text>;
  } else {
    return (
      <Box flex={1} justifyContent="center" px={4} bg="$backgroundLight0">
        <VStack alignItems="center" space="lg">
          <Image
            source={require("./assets/gluestack-ui-logo.png")}
            alt="gluestack-logo"
            resizeMode="center"
            height={100}
            width={100}
          />
          <Heading>Welcome to gluestack-ui</Heading>
          <Text>
            Edit{" "}
            <Text px="$2" py="$1" rounded="$sm" bg="$backgroundLight100">
              src/App.tsx
            </Text>{" "}
            and save to reload.
          </Text>
          <Link href="https://ui.gluestack.io/docs/" isExternal>
            <LinkText color="$primary500" fontSize="$xl">
              Learn gluestack-ui
            </LinkText>
          </Link>
        </VStack>
      </Box>
    );
  }
};

export default function App() {
  return (
    <SafeAreaView>
      <GluestackUIProvider config={config}>
        <Example />
      </GluestackUIProvider>
    </SafeAreaView>
  );
}
