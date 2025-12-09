'use server'
import { Resend } from 'resend'
import type z from 'zod'
import { EmailTemplate } from '@/components/email-templates/contact-email'
import { formSchema } from '../zod/contact-form-schema'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmail(values: z.infer<typeof formSchema>) {
	const validatedFields = formSchema.safeParse({
		name: values.name,
		email: values.email,
		message: values.message,
	})

	if (!validatedFields.success) {
		return {
			error: validatedFields.error,
		}
	}

	const { data, error } = await resend.emails.send({
		from: 'Contact Form <contact@resend.dev>',
		to: ['pmacdonald15@gmail.com'],
		subject: 'Contact Form Filled Out',
		react: EmailTemplate({
			name: validatedFields.data.name,
			email: validatedFields.data.email,
			message: validatedFields.data.message,
		}),
		replyTo: validatedFields.data.email
	})

	console.log('Result: ', data)

	if (error) {
		console.error('Error ', error)
		throw new Error(`Error sending email: ${JSON.stringify(error)}`)
	}
	return data
}
