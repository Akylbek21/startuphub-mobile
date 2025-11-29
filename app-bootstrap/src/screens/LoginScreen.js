import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const onLogin = () => {
    console.log("login", email, pass);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Войти</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Пароль"
        secureTextEntry
        value={pass}
        onChangeText={setPass}
      />

      <Pressable style={styles.button} onPress={onLogin}>
        <Text style={styles.buttonText}>Войти</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#F9FAFB" },
  title: { fontSize: 22, fontWeight: "700", marginBottom: 24 },
  input: {
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
  button: {
    backgroundColor: "#1D4ED8",
    paddingVertical: 10,
    borderRadius: 8,
    marginTop: 8,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "600",
    fontSize: 16,
  },
});
