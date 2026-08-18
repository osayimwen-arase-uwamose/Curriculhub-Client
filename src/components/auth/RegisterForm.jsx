import { useState } from "react";

import {
  useForm,
} from "react-hook-form";

import {
  zodResolver,
} from "@hookform/resolvers/zod";

import {
  Eye,
  EyeOff,
  KeyRound,
  User,
  School,
} from "lucide-react";

import {
  toast,
} from "sonner";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import registerSchema from "../../validation/register.schema.js";

import authService from "../../services/auth.service.js";

import useAuth from "../../hooks/useAuth.js";

import Button from "../ui/Button.jsx";

export default function RegisterForm() {
  const navigate = useNavigate();

  const { login } = useAuth();

  const [
    showPassword,
    setShowPassword,
  ] = useState(false);

  const {
    register,
    handleSubmit,
    formState: {
      errors,
      isSubmitting,
    },
  } = useForm({
    resolver: zodResolver(
      registerSchema
    ),

    defaultValues: {
      firstName: "",
      middleName: "",
      lastName: "",
      email: "",
      password: "",
      terms: false,
    },
  });

  const onSubmit = async (formData) => {
    try {
      const data =
        await authService.register(
          formData
        );

      /*
       * If registration automatically
       * authenticates the user, the backend
       * should return:
       *
       * {
       *   accessToken,
       *   user
       * }
       *
       * In that case we establish the
       * authenticated session immediately.
       */

      if (
        data?.accessToken &&
        data?.user
      ) {
        login(data);

        toast.success(
          "Account created successfully."
        );

        navigate("/dashboard", {
          replace: true,
        });

        return;
      }

      /*
       * If registration requires the
       * user to verify their email or
       * subsequently log in, we don't
       * establish an authenticated session.
       */

      toast.success(
        "Account created successfully. Please sign in."
      );

      navigate("/login", {
        replace: true,
      });

    } catch (error) {
      console.error(
        "Registration failed:",
        error
      );

      const message =
        error.response?.data?.message ||
        "Unable to create your account. Please try again.";

      toast.error(message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
    >

      {/* First Name */}

      <div className="space-y-2">
        <label
          htmlFor="firstName"
          className="
            block
            font-mono
            text-[13px]
            font-medium
            uppercase
            tracking-wide
            text-text
          "
        >
          First Name
        </label>

        <div className="relative">
          <User
            size={18}
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              left-3
              top-1/2
              -translate-y-1/2
              text-muted-slate
            "
          />

          <input
            id="firstName"
            type="text"
            placeholder="Jane"
            autoComplete="given-name"
            {...register("firstName")}
            className="
              w-full
              rounded-none
              border
              border-grid-line
              bg-surface
              py-3
              pl-10
              pr-3
              font-body
              text-body-md
              text-on-background
              outline-none
              transition-all

              focus:border-primary
              focus:ring-1
              focus:ring-primary
              focus:shadow-[2px_2px_0px_0px_#0F172A]
            "
          />
        </div>

        {errors.firstName && (
          <FieldError>
            {errors.firstName.message}
          </FieldError>
        )}
      </div>


      {/* Middle Name */}

      <div className="space-y-2">
        <label
          htmlFor="middleName"
          className="
            block
            font-mono
            text-[13px]
            font-medium
            uppercase
            tracking-wide
            text-text
          "
        >
          Middle Name (Optional)
        </label>

        <div className="relative">
          <User
            size={18}
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              left-3
              top-1/2
              -translate-y-1/2
              text-muted-slate
            "
          />

          <input
            id="middleName"
            type="text"
            placeholder="Quincy"
            autoComplete="additional-name"
            {...register("middleName")}
            className="
              w-full
              rounded-none
              border
              border-grid-line
              bg-surface
              py-3
              pl-10
              pr-3
              font-body
              text-body-md
              text-on-background
              outline-none
              transition-all

              focus:border-primary
              focus:ring-1
              focus:ring-primary
              focus:shadow-[2px_2px_0px_0px_#0F172A]
            "
          />
        </div>

        {errors.middleName && (
          <FieldError>
            {errors.middleName.message}
          </FieldError>
        )}
      </div>


      {/* Last Name */}

      <div className="space-y-2">
        <label
          htmlFor="lastName"
          className="
            block
            font-mono
            text-[13px]
            font-medium
            uppercase
            tracking-wide
            text-text
          "
        >
          Last Name
        </label>

        <div className="relative">
          <User
            size={18}
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              left-3
              top-1/2
              -translate-y-1/2
              text-muted-slate
            "
          />

          <input
            id="lastName"
            type="text"
            placeholder="Doe"
            autoComplete="family-name"
            {...register("lastName")}
            className="
              w-full
              rounded-none
              border
              border-grid-line
              bg-surface
              py-3
              pl-10
              pr-3
              font-body
              text-body-md
              text-on-background
              outline-none
              transition-all

              focus:border-primary
              focus:ring-1
              focus:ring-primary
              focus:shadow-[2px_2px_0px_0px_#0F172A]
            "
          />
        </div>

        {errors.lastName && (
          <FieldError>
            {errors.lastName.message}
          </FieldError>
        )}
      </div>


      {/* Email */}

      <div className="space-y-2">
        <label
          htmlFor="email"
          className="
            block
            font-mono
            text-[13px]
            font-medium
            uppercase
            tracking-wide
            text-text
          "
        >
          Email
        </label>

        <div className="relative">
          <School
            size={18}
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              left-3
              top-1/2
              -translate-y-1/2
              text-muted-slate
            "
          />

          <input
            id="email"
            type="email"
            placeholder="jane.doe@mailbox.com"
            autoComplete="email"
            {...register("email")}
            className="
              w-full
              rounded-none
              border
              border-grid-line
              bg-surface
              py-3
              pl-10
              pr-3
              font-body
              text-body-md
              text-on-background
              outline-none
              transition-all

              focus:border-primary
              focus:ring-1
              focus:ring-primary
              focus:shadow-[2px_2px_0px_0px_#0F172A]
            "
          />
        </div>

        {errors.email && (
          <FieldError>
            {errors.email.message}
          </FieldError>
        )}
      </div>


      {/* Password */}

      <div className="space-y-2">
        <label
          htmlFor="password"
          className="
            block
            font-mono
            text-[13px]
            font-medium
            uppercase
            tracking-wide
            text-text
          "
        >
          Password
        </label>

        <div className="relative">
          <KeyRound
            size={18}
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              left-3
              top-1/2
              -translate-y-1/2
              text-muted-slate
            "
          />

          <input
            id="password"
            type={
              showPassword
                ? "text"
                : "password"
            }
            placeholder="••••••••"
            autoComplete="new-password"
            {...register("password")}
            className="
              w-full
              rounded-none
              border
              border-grid-line
              bg-surface
              py-3
              pl-10
              pr-12
              font-body
              text-body-md
              text-on-background
              outline-none
              transition-all

              focus:border-primary
              focus:ring-1
              focus:ring-primary
              focus:shadow-[2px_2px_0px_0px_#0F172A]
            "
          />

          <button
            type="button"
            onClick={() =>
              setShowPassword(
                (current) => !current
              )
            }
            className="
              absolute
              right-3
              top-1/2
              -translate-y-1/2
              text-muted-slate
              transition-colors
              hover:text-on-background
            "
            aria-label={
              showPassword
                ? "Hide password"
                : "Show password"
            }
          >
            {showPassword ? (
              <EyeOff size={18} />
            ) : (
              <Eye size={18} />
            )}
          </button>
        </div>

        {errors.password && (
          <FieldError>
            {errors.password.message}
          </FieldError>
        )}
      </div>


      {/* Terms */}

      <div className="flex items-start pt-2">
        <div className="flex h-5 items-center">
          <input
            id="terms"
            type="checkbox"
            {...register("terms")}
            className="
              brutalist-checkbox
              h-4
              w-4
              cursor-pointer
              rounded-none
              border
              border-on-background
              bg-surface
              focus:outline-none
              focus:ring-0
            "
          />
        </div>

        <div className="ml-3 text-sm">
          <label
            htmlFor="terms"
            className="
              cursor-pointer
              font-body
              text-body-md
              text-on-surface-variant
            "
          >
            I agree to the{" "}

            <Link
              to="/terms"
              className="
                font-bold
                text-primary
                underline-offset-2
                hover:underline
              "
            >
              Terms of Service
            </Link>

            {" "}and{" "}

            <Link
              to="/privacy"
              className="
                font-bold
                text-primary
                underline-offset-2
                hover:underline
              "
            >
              Privacy Policy
            </Link>
            .
          </label>

          {errors.terms && (
            <FieldError>
              {errors.terms.message}
            </FieldError>
          )}
        </div>
      </div>


      {/* Submit */}

      <div className="pt-4">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={isSubmitting}
          className="
            w-full
            uppercase
            tracking-wide
          "
        >
          {isSubmitting
            ? "Creating Account..."
            : "Create Account"}
        </Button>
      </div>


      {/* Sign In */}

      <div
        className="
          mt-8
          border-t
          border-grid-line
          pt-6
          text-center
        "
      >
        <p
          className="
            font-body
            text-body-md
            text-on-surface-variant
          "
        >
          Already have an account?{" "}

          <Link
            to="/login"
            className="
              font-bold
              text-primary
              transition-colors
              hover:text-primary-fixed-dim
              hover:underline
              underline-offset-4
            "
          >
            Login
          </Link>
        </p>
      </div>

    </form>
  );
}

function FieldError({ children }) {
  return (
    <p
      className="
        text-sm
        font-medium
        text-error
      "
    >
      {children}
    </p>
  );
}