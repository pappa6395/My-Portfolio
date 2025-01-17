"use server";
import { db } from "@/prisma/db";
import { ContactProps } from "@/utils/type";
import { revalidatePath } from "next/cache";

export async function createMessage(data: ContactProps) {
  try {
    const newMessage = await db.message.create({
      data,
    });
    // console.log(newCategory);
    revalidatePath("/dashboard/contacts");
    return newMessage;
  } catch (error) {
    console.log(error);
    return null;
  }
}
export async function getMessages() {
  try {
    const messages = await db.message.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return messages;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function updateMessage(id: string, data: ContactProps) {
  
  console.log("Payload check:", id, data);
  
  try {
    const updatedMessage = await db.message.update({
      where: {
        id,
      },
      data,
    });
    console.log("Updated message successful:", updatedMessage);
    return updatedMessage;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function deleteMessage(id: string) {
  if (id) {
    try {
      const deletedMessage = await db.message.delete({
        where: {
          id,
        },
      });
      return {
        ok: true,
        data: deletedMessage,
      };
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}

export async function createBulkCategories(messages: ContactProps[]) {
  try {
    for (const message of messages) {
      await createMessage(message);
    }
  } catch (error) {
    console.log(error);
  }
}
