import Link from "next/link";
import { blocks } from "@/lib/source";
import { Tab, Tabs } from "fumadocs-ui/components/tabs";
import Image from "next/image";

export default function Home() {
  const posts = blocks.getPages();
  console.log(posts);

  const components = [
    {
      id: 1,
      title: "Navbar Component",
      description: "A responsive navigation bar with user avatar and branding",
      tags: ["Navigation", "Avatar", "Header"],
      code: `import React from "react";
import { Text, View } from "react-native";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const NavbarBlock = () => {
  return (
    <View className="flex flex-row justify-between items-center px-4 py-2">
      <Text className="text-2xl font-bold text-black">onHabit</Text>
      <Avatar alt="User Avatar">
        <AvatarImage source={{ uri: "https://unsplash.com/photos/dog-holding-flower-2s6ORaJY6gI" }} />
        <AvatarFallback>
          <Text className="text-white">LN</Text>
        </AvatarFallback>
      </Avatar>
    </View>
  );
};

export default NavbarBlock;`,
      preview: "/navbar.png",
    },
    {
      id: 2,
      title: "Todo List Component",
      description:
        "Interactive todo list with add, check, and delete functionality",
      preview: "/todo.png",
      tags: ["Todo", "List", "Interactive"],
      code: `import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Plus, Trash } from "lucide-react-native";
import React, { useState } from "react";
import { FlatList, KeyboardAvoidingView, Platform, Text, View } from "react-native";

type TodoItem = { label: string; checked: boolean };

const TodoBlock = () => {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState<TodoItem[]>([]);

  const handleAdd = () => {
    if (!value.trim()) return;
    setTodos([...todos, { label: value, checked: false }]);
    setValue("");
  };

  const toggleCheck = (index: number) => {
    const updated = todos.map((todo, i) =>
      i === index ? { ...todo, checked: !todo.checked } : todo
    );
    setTodos(updated);
  };

  const handleDelete = (index: number) => {
    const updated = todos.filter((_, i) => i !== index);
    setTodos(updated);
  };

  return (
    <View className="gap-4 bg-white flex-1">
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} className="flex-row gap-2">
        <Input
          className="flex-1 bg-white text-black"
          placeholder="Write something..."
          value={value}
          onChangeText={setValue}
        />
        <Button className="w-12 bg-black" onPress={handleAdd}>
          <Plus color="white" />
        </Button>
      </KeyboardAvoidingView>

      <FlatList
        data={todos}
        keyExtractor={(_, i) => i.toString()}
        ItemSeparatorComponent={() => <View className="h-2" />}
        ListEmptyComponent={() => <Text className="text-center text-black">No items yet</Text>}
        renderItem={({ item, index }) => (
          <View className="flex-row justify-between items-center bg-gray-100 p-4 rounded-md">
            <Text className="text-black">{item.label}</Text>
            <View className="flex-row gap-4 items-center">
              <Checkbox
                className="border-black border-[1.5px] rounded-full"
                checked={item.checked}
                onCheckedChange={() => toggleCheck(index)}
              />
              <Trash size={20} onPress={() => handleDelete(index)} />
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default TodoBlock;`,
    },
    {
      id: 3,
      title: "Invite Team Block",
      description:
       "Send workspace invites with role selection and validation",
      preview: "/invite-block.png",
      tags: ["Todo", "List", "Interactive"],
      code: `
import React from "react";
import { Alert, Text, TextInput, View } from "react-native";
import { Button } from "~/components/ui/button";
import { Checkbox } from "~/components/ui/checkbox";

export const InviteTeamBlock = () => {
  const [email, setEmail] = React.useState("");
  const [isAdmin, setIsAdmin] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [emailError, setEmailError] = React.useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (value) => {
    setEmail(value);
    if (emailError) {
      setEmailError("");
    }
  };

  const handleInvite = async () => {
    if (!email.trim()) {
      setEmailError("Email is required");
      return;
    }

    if (!validateEmail(email.trim())) {
      setEmailError("Please enter a valid email address");
      return;
    }

    setIsLoading(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      Alert.alert(
        "Invitation Sent!",
        \`Invitation sent to \${email}\${isAdmin ? " as admin" : ""}.\`,
        [{ text: "OK" }]
      );

      setEmail("");
      setIsAdmin(false);
      setEmailError("");
      
    } catch (error) {
      Alert.alert("Error", "Failed to send invitation. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const isFormValid = email.trim() && !emailError && !isLoading;

  return (
    <View className="p-4 rounded-2xl bg-white shadow-md gap-4 w-full">
      <Text className="text-xl font-semibold">Invite a Teammate</Text>
      <Text className="text-gray-500">
        Send an invite to someone to join your workspace.
      </Text>

      <View className="gap-2">
        <TextInput
          placeholder="Enter email address"
          value={email}
          onChangeText={handleEmailChange}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          editable={!isLoading}
          className={\`px-4 py-3 border rounded-xl \${emailError 
            ? "border-red-500 bg-red-50" 
            : "border-gray-300 bg-white"}\`}
        />
        {emailError ? (
          <Text className="text-red-500 text-sm ml-1">{emailError}</Text>
        ) : null}
      </View>

      <View className="flex-row items-center gap-3">
        <Checkbox
          className="border-gray-300 rounded-full"
          checked={isAdmin}
          onCheckedChange={() => setIsAdmin(!isAdmin)}
          disabled={isLoading}
        />
        <View className="flex-1">
          <Text className="font-medium">Add as admin</Text>
          <Text className="text-gray-500 text-sm">
            Admins can manage workspace settings and invite others
          </Text>
        </View>
      </View>

      <Button 
        onPress={handleInvite}
        disabled={!isFormValid}
        className={\`\${!isFormValid 
          ? "bg-gray-300" 
          : "bg-blue-600 hover:bg-blue-700"}\`}
      >
        <Text className="text-white font-medium">
          {isLoading ? "Sending..." : "Send Invite"}
        </Text>
      </Button>

      {email && validateEmail(email) && (
        <View className="bg-blue-50 p-3 rounded-xl">
          <Text className="text-blue-800 text-sm">
            📧 Invite will be sent to: <Text className="font-medium">{email}</Text>
            {isAdmin && (
              <Text className="text-blue-600"> (Admin privileges)</Text>
            )}
          </Text>
        </View>
      )}
    </View>
  );
};
`,
    },
  ];

  return (
    <div className="">
      {/* Header Section */}
      <header className=" shadow-sm border-b">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-extrabold  mb-4">
              Prebuilt Component Blocks
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              Browse a collection of ready-to-use React Native UI
              blocks—composed using reusable components.
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Components Grid */}
        <div className="grid gap-8 lg:grid-cols-2">
          {components.map((component) => (
            <article
              key={component.id}
              className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {/* Card Header */}
              {/* <div className="p-6 border-b border-gray-100">
                <div className="flex items-start justify-between mb-3">
                  <h2 className="text-2xl font-bold text-gray-900">
                    {component.title}
                  </h2>
                  <div className="flex gap-1">
                    {component.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {component.description}
                </p>
              </div> */}

              {/* Tabs Content */}
              <div className="p-6">
                <Tabs items={["Preview", "Code"]} className="w-full">
                  <Tab value="Preview">
                    {component.preview ? (
                      <Image
                        src={component.preview}
                        alt={`${component.title} Preview`}
                        width={200}
                        height={200}
                        className="w-full h-auto rounded-lg"
                      />
                    ) : (
                      <div className="bg-gray-50 rounded-xl p-8 border-2 border-dashed border-gray-200 text-center min-h-[200px] flex items-center justify-center">
                        <div className="text-gray-500">
                          <div className="w-16 h-16 bg-gray-200 rounded-lg mx-auto mb-4 flex items-center justify-center">
                            <svg
                              className="w-8 h-8 text-gray-400"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                              />
                            </svg>
                          </div>
                          <p className="font-medium">Preview Coming Soon</p>
                          <p className="text-sm mt-1">
                            Mobile component preview
                          </p>
                        </div>
                      </div>
                    )}
                  </Tab>

                  <Tab value="Code">
                    <div className="relative">
                      <div className="absolute top-4 right-4 z-10">
                        <button className="bg-gray-800 hover:bg-gray-700 text-white px-3 py-1.5 rounded-md text-sm font-medium transition-colors">
                          Copy Code
                        </button>
                      </div>
                      <pre className="bg-gray-900 text-gray-100 p-6 rounded-xl overflow-x-auto text-sm leading-relaxed border">
                        <code className="language-typescript">
                          {component.code}
                        </code>
                      </pre>
                    </div>
                  </Tab>
                </Tabs>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
