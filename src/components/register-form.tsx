import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { Eye, EyeOff, Mail, User, Lock } from "lucide-react";

export function RegisterForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form className="p-6 md:p-8 space-y-6">
            <div className="flex flex-col items-center text-center">
              <h1 className="text-2xl font-bold">Register your account</h1>
              <p className="text-muted-foreground">
                Register to your Acme Inc account
              </p>
            </div>

            {/* Email */}
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  className="pl-8"
                  required
                />
              </div>
            </div>

            {/* Username */}
            <div className="grid gap-2">
              <Label htmlFor="username">Username</Label>
              <div className="relative">
                <User className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  id="username"
                  type="text"
                  placeholder="Your username"
                  className="pl-8"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Lock className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="******"
                  className="pl-8 pr-10"
                  minLength={6}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-2 top-2.5 text-muted-foreground"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div className="grid gap-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <div className="relative">
                <Lock className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  id="confirmPassword"
                  type={showConfirm ? "text" : "password"}
                  placeholder="******"
                  className="pl-8 pr-10"
                  minLength={6}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirm(!showConfirm)}
                  className="absolute right-2 top-2.5 text-muted-foreground"
                >
                  {showConfirm ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {/* Terms & Conditions */}
            <div className="flex items-center gap-2">
              <Checkbox id="terms" required />
              <Label
                htmlFor="terms"
                className="flex items-center text-sm text-muted-foreground cursor-pointer"
              >
                I agree to the&nbsp;
                <a
                  href="#"
                  className="font-medium underline underline-offset-4 hover:text-primary"
                >
                  Terms of Service
                </a>
                &nbsp;and&nbsp;
                <a
                  href="#"
                  className="font-medium underline underline-offset-4 hover:text-primary"
                >
                  Privacy Policy
                </a>
              </Label>
            </div>

            <Button type="submit" className="w-full">
              Register
            </Button>

            {/* Divider */}
            <div className="relative text-center text-sm">
              <span className="bg-card text-muted-foreground relative px-2">
                Or continue with
              </span>
              <div className="absolute inset-0 flex items-center"></div>
            </div>

            {/* Social login buttons */}
            <div className="grid grid-cols-3 gap-4">
              <Button variant="outline">Apple</Button>
              <Button variant="outline">Google</Button>
              <Button variant="outline">Meta</Button>
            </div>

            <div className="text-center text-sm">
              Already have an account?{" "}
              <a href="/login" className="underline underline-offset-4">
                Login
              </a>
            </div>
          </form>

          {/* Image side */}
          <div className="bg-muted relative hidden md:block">
            <img
              src="/images/logingym.jpg"
              alt="Image"
              className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
