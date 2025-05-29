"use client"
import Image from "next/image"
import Link from "next/link"
import House from "../../../../public/images/13625 1.png"
import Left from '../../../../public/images/left.svg'

import google from "../../../../public/images/🦆 icon _google_.png"
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Login() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const onSubmit = async (data) => {
        console.log(data)
        setLoading(true);
        try {
            await new Promise(resolve => setTimeout(resolve, 2000));
            const ok = true;

            if (ok) {
                reset();
                router.push("/");
            } else {
                throw new Error('Failed to send message');
            }
        } catch (error) {
            console.error('Signin error:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen grid grid-cols-1 xl:grid-cols-2 pb-10 lg:pb-0">
            {/* Left - Form Section */}
            <div className="flex items-center justify-center px-4 sm:px-8 md:px-16 lg:px-20">
                <div className="w-full max-w-md sm:max-w-lg">
                    <div className="mb-8">
                        <h1 className="text-[22px] sm:text-[26px] font-semibold">
                            Welcome Back to BetaHouse!
                        </h1>
                        <p className="text-[#181A20D1] text-[14px] sm:text-[16px] mt-2">
                            Let's get started by filling out the information below
                        </p>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                        {/* Email */}
                        <div className="flex flex-col gap-2">
                            <label htmlFor="email" className="text-[15px] sm:text-[16px] font-medium">
                                Email
                            </label>
                            <input
                                {...register('email', {
                                    required: 'Email Address is required',
                                    pattern: {
                                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                        message: 'Invalid email format',
                                    },
                                })}
                                id="email"
                                type="email"
                                placeholder="Enter your email address"
                                className="border-2 border-[#DEDFE0] text-[#2632388F] p-2 rounded-md outline-none"
                            />
                            {errors.email && (
                                <p className="text-red-500 text-[12px]">{errors.email.message}</p>
                            )}
                        </div>

                        {/* Password */}
                        <div className="flex flex-col gap-2">
                            <label htmlFor="password" className="text-[15px] sm:text-[16px] font-medium">
                                Password
                            </label>
                            <input
                                {...register('password', {
                                    required: 'This field is required',
                                    minLength: {
                                        value: 8,
                                        message: 'Password must be at least 8 characters long',
                                    },
                                    pattern: {
                                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/,
                                        message: 'Must include uppercase, lowercase, number & special char',
                                    },
                                })}
                                id="password"
                                type="password"
                                placeholder="Enter your password"
                                className="border-2 border-[#DEDFE0] text-[#2632388F] p-2 rounded-md outline-none"
                            />
                            {errors.password && (
                                <span className="text-red-500 text-[12px]">{errors.password.message}</span>
                            )}
                        </div>

                        {/* Remember Me / Forgot Password */}
                        <div className="flex justify-between items-center text-[14px] sm:text-[16px]">
                            <label className="flex items-center gap-2" htmlFor="remember">
                                <input type="checkbox" id="remember" />
                                Remember Me
                            </label>
                            <p className="text-[#EC5E5E] cursor-not-allowed">Forgot Password</p>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-[#3D9970] text-white py-3 rounded-xl font-medium hover:opacity-90 transition"
                        >
                            {loading ? "Signing up..." : "Sign up"}
                        </button>

                        {/* OR divider */}
                        <div className="flex items-center justify-center gap-4">
                            <Image alt="left vector" src={Left} />
                            <p className="text-sm">or</p>
                            <Image alt="right vector" src={Left} />
                        </div>

                        {/* Google Sign-in */}
                        <div className="flex items-center justify-center gap-4 border border-black py-3 rounded-xl">
                            <Image alt="google icon" src={google} />
                            <p>Continue with Google</p>
                        </div>

                        {/* Link to Sign up */}
                        <div className="text-center">
                            <span className="text-gray-600">New User? </span>
                            <Link href="/auth/signup" className="text-[#3D9970] hover:underline">
                                Sign up
                            </Link>
                        </div>
                    </form>
                </div>
            </div>

            {/* Right - Image Section */}
            <div className="relative hidden md:block">
                <Image
                    src={House}
                    alt="House"
                    className="w-full h-full object-cover rounded-md"
                />
                <div className="absolute top-5 left-5 flex items-center gap-2 text-white text-xl font-bold">
                    <span className="bg-[#3D9970] p-2 rounded-full">BH</span>
                    <h1>BetaHouse</h1>
                </div>
            </div>
        </div>
    );
}
