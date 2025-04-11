import React, { type ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface PrimaryButton {
  children: ReactNode;
}

type PrimaryButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  PrimaryButton;

function PrimaryButton(props: PrimaryButtonProps) {
  const { children, className, ...otherProps } = props;
  const combinedClassName = twMerge(
    "py-[6px] border border-[#666666] rounded-lg flex justify-center w-[150px] shadow-[0px_4px_0px_0px_rgba(0,0,0,0.6)] active:shadow-none active:translate-y-[4px]",
    className
  );

  return (
    <button className={combinedClassName} {...otherProps}>
      {children}
    </button>
  );
}

export default PrimaryButton;
