export interface CardProps {
  title: string;
  content: string;
}


export interface PostData {
  title: string;
  content: string;
}


export interface PostModalProps {
  onClose: () => void;
  onSubmit: (data: PostData) => void;
}


export interface ButtonProps {
  children: React.ReactNode; 
  size?: 'small' | 'medium' | 'large'; 
  shape?: 'rounded-sm' | 'rounded-md' | 'rounded-full';
  onClick?: () => void; 
}

export interface PostProps {
  userId: number;
  id: number;
  title: string;
  body: string; 
}

export interface Geo {
  lat: string;
  lng: string;
}


export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}


export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}


export interface UserProps {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}