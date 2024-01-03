'use server'
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocument, PutCommand } from "@aws-sdk/lib-dynamodb";

const db = DynamoDBDocument.from(new DynamoDBClient({}))
export const submitContactForm = async (successState: boolean, formData: FormData) => {
    const rawFormData = Object.fromEntries(formData.entries()) as {
        email: string,
    }

    await db.put({
        TableName: process.env.CONTACT_FORM_TABLE,
        Item: {
            email: rawFormData.email,
        }
    })
    return true
}


