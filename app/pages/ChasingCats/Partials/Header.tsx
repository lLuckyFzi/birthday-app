import React from "react";
import { FaCat } from "react-icons/fa";
import Text from "~/components/Text";

interface HeaderProps {
  count: number;
  max: number;
}

function Header(props: HeaderProps) {
  const { count = 0, max = 0 } = props;

  return (
    <div className="flex gap-x-4 justify-center items-center">
      <FaCat className="text-[#FFDD32] w-7 h-7" />
      <Text weight="medium">{count}/{max}</Text>
    </div>
  );
}

export default Header;
