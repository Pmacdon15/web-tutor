'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import type { z } from 'zod'
import { Button } from '@/components/ui/button'
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import { useSendMessage } from '@/lib/mutations/send-message'
import { formSchema } from '@/lib/zod/contact-form-schema'
import { Input } from '../input'
import { Textarea } from '../textarea'

export function ContactForm() {
	const { mutate } = useSendMessage({
		onSuccess: () => {
			toast.success('Email Sent', {
				description:
					"Your message has been sent to Pat's Web Dev Tutors!",
			})
			form.reset()
		},
		onError: (error) => {
			toast.error('Error Sending Email', {
				description:
					error instanceof Error
						? error.message
						: 'An error occurred while sending your message.',
			})
		},
	})

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: '',
			email: '',
			message: '',
		},
	})
	function onSubmit(values: z.infer<typeof formSchema>) {
		console.log(values)
		mutate(values)
	}

	return (
		<div className="flex flex-col gap-4 w-full md:w-3/6 text-foreground bg-black/40 p-6 rounded-lg backdrop-blur-sm shadow-2xl mb-8 border-4">
			<h1 className="text-3xl">Contact Me</h1>
			<Form {...form}>
				<form
					className="space-y-8"
					onSubmit={form.handleSubmit(onSubmit)}
				>
					<FormField
						control={form.control}
						name="name"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Name</FormLabel>
								<FormControl>
									<Input placeholder="Name" {...field} />
								</FormControl>							
								{/* <FormMessage /> */}
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Name</FormLabel>
								<FormControl>
									<Input placeholder="Email" {...field} />
								</FormControl>
								<FormDescription>
									This is your email.
								</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="message"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Name</FormLabel>
								<FormControl>
									<Textarea
										placeholder="Message"
										{...field}
									/>
								</FormControl>
								<FormDescription>
									This is your your message to me.
								</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button						
						type="submit"
					>
						Submit
					</Button>
				</form>
			</Form>
		</div>
	)
}


