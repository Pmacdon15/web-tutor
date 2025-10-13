'use client'
import { useMutation } from '@tanstack/react-query'
import { sendEmail } from '../actions/resend'

export const useSendMessage = () => {
	return useMutation({
		mutationFn: (formData: FormData) => {
			return sendEmail(formData)
		},
		onSuccess: () => {
			// handle success
		},
		onError: (error) => {
			console.error('Mutation error:', error)
		},
	})
}
