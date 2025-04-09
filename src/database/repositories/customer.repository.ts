import prisma from "../prisma/prismaClient";
import { Customer } from "../models/Customer.model";
import { handleError } from "@/utils/errorHandler";

export const CustomerRepository = {
  async getAll(): Promise<Customer[]> {
    try {
      return await prisma.customer.findMany();
    } catch (error) {
      handleError(error, "Error fetching all customers");
      throw new Error("Unable to fetch customers");
    }
  },

  async getById(id: string): Promise<Customer | null> {
    try {
      return await prisma.customer.findUnique({
        where: { id },
      });
    } catch (error) {
      handleError(error, `Error fetching customer with ID ${id}`);
      throw new Error(`Unable to fetch customer with ID ${id}`);
    }
  },

  async create(data: Omit<Customer, "id">): Promise<Customer> {
    try {
      return await prisma.customer.create({ data });
    } catch (error) {
      handleError(error, `Error creating new customer`);
      throw new Error("Unable to create new customer");
    }
  },
};
