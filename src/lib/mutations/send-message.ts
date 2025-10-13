'use client'
import { useMutation } from '@tanstack/react-query'
import type z from 'zod'
import { sendEmail } from '../actions/resend'
import type { formSchema } from '../zod/contact-form-schema'

export const useSendMessage = (
  options?: {
    onSuccess?: () => void
    onError?: (error: unknown) => void
  }
) => {
  return useMutation({
    mutationFn: (values: z.infer<typeof formSchema>) => {
      return sendEmail(values)
    },
    onSuccess: options?.onSuccess,
    onError: options?.onError,
  })
}