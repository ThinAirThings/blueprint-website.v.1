'use server'
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocument, PutCommand } from "@aws-sdk/lib-dynamodb";
import { sendEmail } from "../helpers/sendEmail";
import ContactFormResponseEmail from "../../emails/emails/blueprint-contactForm-response";
import ContactFormNotify from "@/emails/emails/blueprint-contactForm-notify";
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const db = DynamoDBDocument.from(new DynamoDBClient({}))

export const submitContactForm = async (successState: boolean, formData: FormData) => {
    const rawFormData = Object.fromEntries(formData.entries()) as {
        email: string,
    } as {
        name: string
        email: string
        company: string
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
            company: rawFormData.company,
            phoneNumber: rawFormData.phoneNumber,
            quantity: rawFormData.quantity,
            budget: rawFormData.budget,
            message: rawFormData.message,
        }
    })
    try {
        const { data, error } = await resend.emails.send({
            from: 'Blueprint Custom Apparel <sales@auto.blueprintapparelcompany.com>',
            to: [rawFormData.email],
            subject: 'Thanks for Contacting Blueprint!',
            react: <ContactFormResponseEmail/>
          });
        // const toCustomer = await sendEmail({
        //     from: "Blueprint Custom Apparel <sales@email.blueprintapparelcompany.com>",
        //     to: [rawFormData.email],
        //     subject: "Thanks for Contacting Blueprint!",
        //     emailJSX: <ContactFormResponseEmail/>,
        // })

        await resend.emails.send({
            from: 'Blueprint Custom Apparel <automation@auto.blueprintapparelcompany.com>',
            to: ['dan@blueprintapparelcompany.com', 'matt@blueprintapparelcompany.com'],
            subject: 'New Contact Form Submission',
            react: <ContactFormNotify
                email={rawFormData.email}
                name={rawFormData.name}
                company={rawFormData.company}
                phoneNumber={rawFormData.phoneNumber}
                quantity={rawFormData.quantity}
                budget={rawFormData.budget}
                message={rawFormData.message}
            />
        })

        // const toBlueprint = await sendEmail({
        //     from: "Blueprint Automation <auto@email.blueprintapparelcompany.com>",
        //     to: [
        //         "dan@blueprintapparelcompany.com",
        //         "matt@blueprintapparelcompany.com"
        //     ],
        //     subject: `New Contact Form Submission - ${rawFormData.name} from ${rawFormData.company}`,
        //     emailJSX: <ContactFormNotify
        //         email={rawFormData.email}
        //         name={rawFormData.name}
        //         company={rawFormData.company}
        //         phoneNumber={rawFormData.phoneNumber}
        //         quantity={rawFormData.quantity}
        //         budget={rawFormData.budget}
        //         message={rawFormData.message}
        //     />,
        // })
        // Add to printavo
        await fetch(`https://www.printavo.com/api/v1/customers?email=dan@blueprintapparelcompany.com&token=${process.env.PRINTAVO_API_KEY}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                first_name: rawFormData.name.split(" ")[0],
                last_name: rawFormData.name.split(" ")[1]??"Not Included",
                customer_email: rawFormData.email,
                company: rawFormData.company,
                phone: rawFormData.phoneNumber??'Not Included',
            })
        })
    } catch (e) {
        console.log(e)
    }

    return true
}


