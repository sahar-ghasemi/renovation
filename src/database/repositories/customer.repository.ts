import prisma from "../prisma/prismaClient";
import { Customer } from "../models/customer.model";
export const CustomerRepository = {
  async getAll(): Promise<Customer[]> {
    return await prisma.customer.findMany();
  },
  async getById(id: string): Promise<Customer | null> {
    return await prisma.customer.findUnique({ where: { id } });
  },
  async create(data: Omit<Customer, "id">): Promise<Customer> {
    return await prisma.customer.create({ data });
  },
};
