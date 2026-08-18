import { Link } from "react-router-dom";

import AuthLayout from "../components/auth/AuthLayout.jsx";

import LoginForm from "../components/auth/LoginForm.jsx";

import Card from "../components/ui/Card.jsx";

import Heading from "../components/ui/Heading.jsx";

export default function LoginPage() {
  return (
    <AuthLayout>

      <Card className="p-8">

        <div className="mb-8">

          <Heading
            as="h1"
            className="text-4xl"
          >
            Welcome back.
          </Heading>

          <p
            className="
              mt-3
              text-text-muted
            "
          >
            Sign in to access your
            CurriculHub workspace.
          </p>

        </div>

        <LoginForm />

      </Card>

    </AuthLayout>
  );
}

// export default function LoginPage() {
//   return (
//     <AuthLayout>
//       <Card className="p-8">
//         <div className="mb-8">
//           <Heading
//             as="h1"
//             className="text-4xl"
//           >
//             Welcome back.
//           </Heading>

//           <p
//             className="
//               mt-3
//               text-text-muted
//             "
//           >
//             Sign in to access your
//             CurriculHub workspace.
//           </p>
//         </div>

//         <LoginForm />

//         <div
//           className="
//             mt-8
//             border-t
//             border-border
//             pt-6
//             text-center
//             text-sm
//             text-text-muted
//           "
//         >
//           Don't have an account?{" "}

//           <Link
//             to="/register"
//             className="
//               font-bold
//               text-primary
//               underline
//               underline-offset-4
//               hover:text-primary-light
//             "
//           >
//             Join Curriculhub
//           </Link>
//         </div>
//       </Card>
//     </AuthLayout>
//   );
// }