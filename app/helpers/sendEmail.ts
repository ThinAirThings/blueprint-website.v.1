'use server'
import { SES } from "@aws-sdk/client-ses";
import { render } from '@react-email/render';
const ses = new SES({region: "us-east-1"})

export const sendEmail = async ({
    to,
    from,
    subject,
    emailJSX
}: {
    to: string[];
    from: `${string} <${string}>`;
    subject: string;
    emailJSX: JSX.Element;
}) => await ses.sendEmail({
    Source: from,
    Destination: {
        ToAddresses: to
    },
    Message: {
        Body: {
            Html: {
                Charset: "UTF-8",
                Data: render(emailJSX)
            }
        },
        Subject: {
            Charset: "UTF-8",
            Data: subject
        }
    },
})
