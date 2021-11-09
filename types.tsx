export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type MainTabParamList = {
  Camera: undefined;
  Chats: undefined;
  Status: undefined;
  Calls: undefined;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export type User ={
  id: String;
  name: string;
  imageUri: string;
}

export type Message = {
  id: string;
  content: string;
  createdAt: number;
}

export type ChatRoom ={
  id: String;
  users: [User];
  lastMessage: Message;
}