'use server'
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocument, PutCommand } from "@aws-sdk/lib-dynamodb";

const db = DynamoDBDocument.from(new DynamoDBClient({}))
export const submitContactForm = async (successState: boolean, formData: FormData) => {
    const rawFormData = Object.fromEntries(formData.entries()) as {
        email: string,
    } as {
        name: string
        email: string
        phoneNumber: string
        quantity: string
        budget: string
        message: string
    }

    await db.put({
        TableName: process.env.CONTACT_FORM_TABLE,
        Item: {
            email: rawFormData.email,
            name: rawFormData.name,
            phoneNumber: rawFormData.phoneNumber,
            quantity: rawFormData.quantity,
            budget: rawFormData.budget,
            message: rawFormData.message,
        }
    })
    return true
}


