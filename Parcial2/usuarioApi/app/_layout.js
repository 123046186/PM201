import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>

      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="detalles"
        options={{
          title: "Detalles del Usuario",
          headerBackTitleVisible: false,
        }}
      />

      <Stack.Screen
        name="editar"
        options={{
          title: "Editar Usuario",
          headerBackTitleVisible: false,
        }}
      />

    </Stack>
  );
}