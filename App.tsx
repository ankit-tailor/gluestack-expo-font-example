import { SafeAreaView, Text as RNText } from "react-native";
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
import { myConfig } from "./gluestack-ui.config";

import {
  useFonts,
  Almarai_300Light,
  Almarai_400Regular,
  Almarai_700Bold,
  Almarai_800ExtraBold,
} from "@expo-google-fonts/almarai";

const Example = () => {
  let [fontsLoaded] = useFonts({
    Almarai_300Light,
    Almarai_400Regular,
    Almarai_700Bold,
    Almarai_800ExtraBold,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <RNText>Loading</RNText>;
  } else {
    return (
      <Box
        h="100%"
        justifyContent="center"
        px={4}
        bg="$backgroundLight0"
        $web-minHeight="100vh"
      >
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
      <GluestackUIProvider config={myConfig}>
        <Example />
      </GluestackUIProvider>
    </SafeAreaView>
  );
}
