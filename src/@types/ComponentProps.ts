export type AuthInputProps = {
  placeholder: string;
  type?: 'email' | 'password' | 'text';
  value?: string;
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
