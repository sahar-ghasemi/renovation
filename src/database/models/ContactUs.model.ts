export interface ContactUs {
  id: number;
  name?: string;
  email?: string;
  phone: string;
  message?: string;
  createdAt: Date;
  status: string;
}
