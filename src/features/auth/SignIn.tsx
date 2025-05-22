import { useSignInEmailPassword } from '@nhost/react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { useNavigate } from 'react-router-dom'

const formSchema = z.object({
  email: z.string().email({ message: 'Invalid email format' }),
  password: z.string().min(6, { message: 'Minimum 6 characters' }),
})

type FormData = z.infer<typeof formSchema>

const SignIn = () => {
  const navigate = useNavigate()
  const { signInEmailPassword, isLoading, isError, error, isSuccess } = useSignInEmailPassword()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async ({ email, password }: FormData) => {
    const result = await signInEmailPassword(email, password)

    if (result.isSuccess) {
      navigate('/dashboard') 
    }
  }

  return (
    <div className="max-w-md mx-auto mt-20 p-6 shadow-md border rounded-lg">
      <h1 className="text-xl font-semibold mb-4">Logg inn</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" {...register('email')} />
          {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
        </div>

        <div>
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" {...register('password')} />
          {errors.password && <p className="text-sm text-red-500">{errors.password.message}</p>}
        </div>

        {isError && <p className="text-sm text-red-500">{error?.message}</p>}
        {isSuccess && <p className="text-sm text-green-600">Login successful!</p>}

        <Button type="submit" disabled={isLoading} className="w-full">
          {isLoading ? 'Logging in...' : 'Log In'}
        </Button>
      </form>
    </div>
  )
}

export default SignIn
