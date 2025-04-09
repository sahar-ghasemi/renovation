import prisma from "../prisma/prismaClient";
import { Customer } from "../models/Customer.model";

export const CustomerRepository = {
  async getAll(): Promise<Customer[]> {
    try {
      return await prisma.customer.findMany();
    } catch (error) {
      console.error("Error fetching all customers:", error);
      throw new Error("Unable to fetch customers");
    }
  },

  async getById(id: string): Promise<Customer | null> {
    try {
      return await prisma.customer.findUnique({
        where: { id },
      });
    } catch (error) {
      console.error(`Error fetching customer with ID ${id}:`, error);
      throw new Error(`Unable to fetch customer with ID ${id}`);
    }
  },

  async create(data: Omit<Customer, "id">): Promise<Customer> {
    try {
      return await prisma.customer.create({ data });
    } catch (error) {
      console.error("Error creating new customer:", error);
      throw new Error("Unable to create new customer");
    }
  },
};
