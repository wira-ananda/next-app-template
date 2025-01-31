"use client";
import React from "react";
import LoginForm from "../components/Auth/LoginForm";
import SignupForm from "../components/Auth/SignupForm";
import useMode from "../clients/hooks/useMode";

export default function Login() {
  const { isArtist, setIsArtist, isLogin, setIsLogin } = useMode();

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="w-[50%] mx-auto bg-white p-8 rounded-xl shadow-md">
        {isLogin ? (
          <LoginForm isArtist={isArtist} setIsArtist={setIsArtist} />
        ) : (
          <SignupForm isArtist={isArtist} setIsArtist={setIsArtist} />
        )}
        <div className="text-center mt-4">
          <button
            onClick={toggleForm}
            className="text-blue-500 hover:underline"
          >
            {isLogin
              ? "Belum punya akun? Daftar di sini"
              : "Sudah punya akun? Masuk di sini"}
          </button>
          <div className="text-center my-2 text-blue-500">
            {isArtist && (
              <button onClick={() => setIsArtist(false)}>
                pindah ke akun user | lg di artist
              </button>
            )}
            {!isArtist && (
              <button onClick={() => setIsArtist(true)}>
                pindah ke akun artist | lg di user
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
