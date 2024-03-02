import * as z from "zod";
import { RegisterSchema } from "@/schema/index";
import service from "@/appwrite/dbconfig"

export const register = async(values: z.infer<typeof RegisterSchema>) => {

    const validatedFields = RegisterSchema.safeParse(values);

    if (!validatedFields.success) {
        return { error: "Invalid fields!" };
    }

    const data = await service.createContactPost(validatedFields.data)

    if (!data) {
        return { error: "Message Not Sent, Try Again Later!" };
    }

    return {success: "Message sent, Reach you soon with a reply!" }
}