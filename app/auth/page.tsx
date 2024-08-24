"use client"
import { useState } from "react"
import Input from "../components/Input"
import axios from "axios"
import { signIn } from "next-auth/react"
import { FcGoogle } from "react-icons/fc"
import { FaGithub } from "react-icons/fa"

const Auth = () => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [variant, setVariant] = useState("login")

  const toggleVariant = () => {
    setVariant((currentVariant) =>
      currentVariant === "login" ? "register" : "login"
    )
  }

  const login = async () => {
    try {
      await signIn("credentials", {
        email,
        password,
        callbackUrl: "/profiles",
      })
    } catch (error) {
      console.log(error)
    }
  }

  const register = async () => {
    try {
      await axios.post("/api/register", {
        username,
        email,
        password,
      })
      await login()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="relative h-full w-full bg-fixed bg-[url('/images/hero.jpg')] bg-cover bg-no-repeat">
      <div className="bg-black w-full h-full bg-opacity-50">
        <nav className="px-12 py-5">
          <img src="/images/logo.png" alt="logo" className="h-12" />
        </nav>
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-50 p-16 self-center mt-2 w-full lg:w-2/5 lg:max-w-md rounded-md ">
            <h2 className="text-white text-4xl font-semibold mb-6">
              {variant === "login" ? "Sign in" : "Register"}
            </h2>
            <div className="flex flex-col gap-4">
              {variant === "register" && (
                <Input
                  id="name"
                  type="text"
                  label="username"
                  value={username}
                  onChange={(e: any) => {
                    setUsername(e.target.value)
                  }}
                />
              )}

              <Input
                id="email"
                type="email"
                label="Email"
                value={email}
                onChange={(e: any) => {
                  setEmail(e.target.value)
                }}
              />
              <Input
                id="password"
                type="password"
                label="password"
                value={password}
                onChange={(e: any) => {
                  setPassword(e.target.value)
                }}
              />
            </div>
            <button
              onClick={variant === "login" ? login : register}
              className="bg-red-600 text-white py-3 rounded w-full mt-8 hover:bg-red-700 transition"
            >
              {variant === "login" ? "Login" : " Sign up"}
            </button>
            <div className="flex justify-center items-center gap-4 mt-8">
              <div
                onClick={() => signIn("google", { callbackUrl: "/profiles" })}
                className="w-10 h-10 bg-white rounded-full flex justify-center items-center cursor-pointer hover:opacity-80 transition"
              >
                <FcGoogle size={25} />
              </div>
              <div
                onClick={() => signIn("github", { callbackUrl: "/profiles" })}
                className="w-10 h-10 bg-white rounded-full flex justify-center items-center cursor-pointer hover:opacity-80 transition"
              >
                <FaGithub size={25} />
              </div>
            </div>
            <p className="text-neutral-500 mt-8">
              {variant === "login"
                ? "First time using Netflix?"
                : "Already have an account"}
              <span
                onClick={toggleVariant}
                className="text-white cursor-pointer hover:underline ml-1"
              >
                {variant === "login" ? "create an account" : "Login"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Auth
