export type QuestionAnswerDto = {
  _id: string;
  community: string;
  created_at: string;
  description?: string;
  parent: string | null;
  slug: string;
  status: boolean;
  title: string;
  user: User;
};

export type User = {
  _id: string;
  address: string;
  email: string;
  mobile_no: string;
  name: string;
  role: string;
  username: string;
};
