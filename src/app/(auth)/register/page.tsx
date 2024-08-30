import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button, Input, Label, Icons, } from '@/components/ui'
import Link from 'next/link'

export default function RegisterPage() {
  const [isLoading, setIsLoading] = useState(false)

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault()
    setIsLoading(true)

    // TODO: Implement registration logic here

    setIsLoading(false)
  }

  return (
    <div className="container relative h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-600 to-purple-900" />
        <div className="relative z-20 flex items-center text-lg font-medium">
          <Icons.logo className="mr-2 h-6 w-6" />
          OnlyPipe
        </div>
        <div className="relative z-20 mt-auto">
          <h1 className="text-4xl font-semibold tracking-tight">
            Get Started with Us
          </h1>
          <p className="mt-4 text-lg">
            Complete these easy steps to register your account.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 space-y-4"
          >
            <div className="flex items-center space-x-2 bg-white/10 p-4 rounded-lg">
              <div className="flex-shrink-0 w-8 h-8 bg-white text-purple-600 rounded-full flex items-center justify-center font-semibold">1</div>
              <span>Sign up your account</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/5 p-4 rounded-lg">
              <div className="flex-shrink-0 w-8 h-8 bg-white/20 text-white rounded-full flex items-center justify-center font-semibold">2</div>
              <span>Set up your workspace</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/5 p-4 rounded-lg">
              <div className="flex-shrink-0 w-8 h-8 bg-white/20 text-white rounded-full flex items-center justify-center font-semibold">3</div>
              <span>Set up your profile</span>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Sign Up Account
            </h1>
            <p className="text-sm text-muted-foreground">
              Enter your personal data to create your account.
            </p>
          </div>
          <div className="grid gap-6">
            <form onSubmit={onSubmit}>
              <div className="grid gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <Button variant="outline" disabled={isLoading}>
                    <Icons.google className="mr-2 h-4 w-4" />
                    Google
                  </Button>
                  <Button variant="outline" disabled={isLoading}>
                    <Icons.gitHub className="mr-2 h-4 w-4" />
                    GitHub
                  </Button>
                </div>
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">
                      Or
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="first-name">First Name</Label>
                    <Input id="first-name" placeholder="e.g. John" required />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="last-name">Last Name</Label>
                    <Input id="last-name" placeholder="e.g. Francisco" required />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" placeholder="e.g. johnfrans@gmail.com" type="email" autoCapitalize="none" autoComplete="email" autoCorrect="off" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" placeholder="Enter your password" type="password" autoCapitalize="none" autoComplete="new-password" required />
                </div>
                <Button disabled={isLoading}>
                  {isLoading && (
                    <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                  )}
                  Sign Up
                </Button>
              </div>
            </form>
          </div>
          <p className="px-8 text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link
              href="/login"
              className="underline underline-offset-4 hover:text-primary"
            >
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
