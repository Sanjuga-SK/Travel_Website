import React from 'react'
import { ArrowRight } from 'lucide-react'

interface ButtonProps{
text:string;
variant: "primary" | "outline" | "noborder";
onClick? :()=>void;
}

const Button = ({text,variant="primary",onClick}:ButtonProps) => {
    const variantStyle = 
    variant === "primary" ? "text-black bg-amber-300 p-3 rounded" : 
    variant === "outline" ? "border border-[#E9C349]/60 p-2 text-[#E9C349] rounded w-full" : "text-amber-300"
  return (
    <div>
        <button
        type='button'
        onClick={onClick}
        className={`flex items-center gap-2 justify-between ${variantStyle}`}
        >
            {text}
            <ArrowRight/>
        </button>

    </div>
  )
}

export default Button