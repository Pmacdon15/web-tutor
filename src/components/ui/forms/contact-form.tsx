'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import { toast } from 'sonner'
import type z from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useSendMessage } from '@/lib/mutations/send-message'
import { formSchema } from '@/lib/zod/contact-form-schema'
import {
	Field,
	FieldError,
	FieldGroup,
	FieldLabel,
	FieldLegend,
	FieldSet,
} from '../field'

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
		defaultValues: {
			name: '',
			email: '',
			message: '',
		},
		resolver: zodResolver(formSchema),
	})

	function onSubmit(data: z.infer<typeof formSchema>) {
		mutate(data)
	}

	return (
		<form
			className="flex flex-col gap-4 w-full md:w-3/6 text-foreground bg-black/40 p-6 rounded-lg backdrop-blur-sm shadow-2xl mb-8 border-4"
			onSubmit={form.handleSubmit(onSubmit)}
		>
			<FieldGroup>
				<FieldSet>
					<FieldLegend>
						{' '}
						<h1 className="text-3xl">Contact Me</h1>
					</FieldLegend>
					<FieldGroup>
						<Controller
							control={form.control}
							name="name"
							render={({ field, fieldState }) => (
								<Field data-invalid={fieldState.invalid}>
									<FieldLabel htmlFor={field.name}>
										{field.name.slice(0, 1).toUpperCase() +
											field.name.slice(
												1,
												field.name.length,
											)}
									</FieldLabel>
									<Input
										{...field}
										aria-invalid={fieldState.invalid}
										id={field.name}
										placeholder={`Enter Your ${field.name}`}
										// required
									/>

									{fieldState.invalid && (
										<FieldError
											errors={[fieldState.error]}
										/>
									)}
								</Field>
							)}
						/>
						<Controller
							control={form.control}
							name="email"
							render={({ field, fieldState }) => (
								<Field data-invalid={fieldState.invalid}>
									<FieldLabel htmlFor={field.name}>
										{field.name.slice(0, 1).toUpperCase() +
											field.name.slice(
												1,
												field.name.length,
											)}
									</FieldLabel>
									<Input
										{...field}
										aria-invalid={fieldState.invalid}
										id={field.name}
										placeholder={`Enter Your ${field.name}`}
										// required
									/>
									{fieldState.invalid && (
										<FieldError
											errors={[fieldState.error]}
										/>
									)}
								</Field>
							)}
						/>
						<Controller
							control={form.control}
							name="message"
							render={({ field, fieldState }) => (
								<Field data-invalid={fieldState.invalid}>
									<FieldLabel htmlFor={field.name}>
										{field.name.slice(0, 1).toUpperCase() +
											field.name.slice(
												1,
												field.name.length,
											)}
									</FieldLabel>
									<Textarea
										{...field}
										aria-invalid={fieldState.invalid}
										id={field.name}
										placeholder={`Enter Your ${field.name}`}
										// required
									/>

									{fieldState.invalid && (
										<FieldError
											errors={[fieldState.error]}
										/>
									)}
								</Field>
							)}
						/>
					</FieldGroup>
				</FieldSet>
				<Button type="submit">Submit</Button>
			</FieldGroup>
		</form>
	)
}
