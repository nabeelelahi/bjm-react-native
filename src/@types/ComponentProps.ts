export type AuthInputProps = {
  placeholder: string;
  type?: 'email' | 'password' | 'text';
  value?: string;
  disabled?: boolean
  onChange?: (value: string) => void;
  onChangeText?: (text: string) => void;
  onChangeBlur?: (text: string) => void;
};

export type BaseButtonProps = {
  title: string;
  onPress?: () => void;
  backgroundColor?: 'primary' | 'text' | 'background' | 'tint';
  textColor?: 'primary' | 'text' | 'background' | 'tint';
};

export type ArticleCardProps = {
  id: string;
  category: string;
  title: string;
  time: string;
  description: string;
  thumbnail: string;
  categoryColor: string;
};


export interface FlatListComponentProps<T> {
  keyExtractor: (item: T, index: number) => string;
  renderItem: ({ item }: { item: T }) => JSX.Element;
  refreshing?: boolean;
  onEndReached?: () => void;
  isLoading?: boolean;
  style?: object
  showsVerticalScrollIndicator?: boolean
  contentContainerStyle?: object
  route: string
  method: 'get' | 'post' | 'patch' | 'delete'
}