'use client'
import { useMutation } from '@tanstack/react-query'
import type z from 'zod'
import { sendEmail } from '../actions/resend'
import type { formSchema } from '../zod/contact-form-schema'

export const useSendMessage = () => {
	return useMutation({
		mutationFn: (values: z.infer<typeof formSchema>) => {
			return sendEmail(values)
		},
		onSuccess: () => {
			// handle success
		},
		onError: (error) => {
			console.error('Mutation error:', error)
		},
	})
}
