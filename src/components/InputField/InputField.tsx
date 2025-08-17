"use client";
import React, { useState, useRef } from "react";
import { XMarkIcon, EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";

export interface InputFieldProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  helperText?: string;
  errorMessage?: string;
  disabled?: boolean;
  invalid?: boolean;
  variant?: "filled" | "outlined" | "ghost";
  size?: "sm" | "md" | "lg";
  type?: "text" | "password" | "email" | "number";
}

export const InputField: React.FC<InputFieldProps> = ({
  value = "",
  onChange,
  label,
  placeholder,
  helperText,
  errorMessage,
  disabled,
  invalid,
  variant = "outlined",
  size = "md",
  type = "text",
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Tailwind base styles
  const base =
    "block w-full rounded-md transition-shadow focus:outline-none focus:ring-2 focus:ring-offset-1";

  const variants = {
    filled: "bg-gray-100 border border-gray-300",
    outlined: "bg-white border border-gray-300",
    ghost: "bg-transparent border border-transparent",
  };

  const sizes = {
    sm: "text-sm h-8 px-3",
    md: "text-base h-10 px-4",
    lg: "text-lg h-12 px-5",
  };

  const hasClearButton = !!value?.length && !disabled;

  const inputType = type === "password" && showPassword ? "text" : type;

  const toggleShowPassword = () => setShowPassword(!showPassword);

  const clearInput = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
      inputRef.current.focus();
      if (onChange)
        onChange({
          target: { value: "" },
        } as React.ChangeEvent<HTMLInputElement>);
    }
  };

  return (
    <div className="w-full max-w-full">
      {label && (
        <label
          className={`block mb-1 font-semibold text-gray-700 ${
            disabled ? "opacity-50" : ""
          }`}
        >
          {label}
        </label>
      )}

      <div
        className={`relative flex items-center ${
          invalid
            ? "ring-2 ring-red-500"
            : "focus-within:ring-2 focus-within:ring-blue-500"
        } rounded-md shadow-sm`}
      >
        <input
          ref={inputRef}
          type={inputType}
          value={value}
          onChange={onChange}
          disabled={disabled}
          placeholder={placeholder}
          aria-invalid={invalid}
          aria-disabled={disabled}
          aria-describedby={helperText ? `${label}-helper-text` : undefined}
          className={`${base} ${variants[variant]} ${sizes[size]} ${
            disabled
              ? "cursor-not-allowed bg-gray-100 text-gray-400"
              : "text-gray-900"
          }`}
        />

        {/* Clear Button */}
        {hasClearButton && (
          <button
            type="button"
            onClick={clearInput}
            className="absolute right-10 text-gray-400 hover:text-gray-600 focus:outline-none"
            aria-label="Clear input"
          >
            <XMarkIcon className="h-5 w-5" />
          </button>
        )}

        {/* Password Toggle */}
        {type === "password" && (
          <button
            type="button"
            onClick={toggleShowPassword}
            className="absolute right-3 text-gray-400 hover:text-gray-600 focus:outline-none"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? (
              <EyeSlashIcon className="h-5 w-5" />
            ) : (
              <EyeIcon className="h-5 w-5" />
            )}
          </button>
        )}
      </div>

      {/* Helper or Error Text */}
      <p
        id={helperText ? `${label}-helper-text` : undefined}
        className={`mt-1 text-sm ${invalid ? "text-red-600" : "text-gray-600"}`}
      >
        {invalid && errorMessage ? errorMessage : helperText}
      </p>
    </div>
  );
};

export default InputField;
