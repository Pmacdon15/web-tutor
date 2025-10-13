import { useMutation } from '@tanstack/react-query'
import { sendMessage } from '../Dal/resend'

export const useSendMessage = () => {
	return useMutation({
		mutationFn: () => {
			return sendMessage()
		},
		onSuccess: () => {
			// handle success
		},
		onError: (error) => {
			console.error('Mutation error:', error)
		},
	})
}
