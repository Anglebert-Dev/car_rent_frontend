import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

interface IButtonProps {
  theme?: "filled" | "outlined";
  text: string;
}

const BaseButton = styled.button`
  ${tw`
    pl-5
    pr-5
    pt-3
    pb-3
    outline-none
    rounded-md
    text-white
    text-xs 
    font-semibold
    border-transparent
    border-2
    border-solid
    focus:outline-none
    transition-all
    duration-200
    ease-in-out
    m-1
  `};
`;

const OutlinedButton = styled(BaseButton)`
  background-color: #ff0000;
  color: #fff;
  border-color: #ff0000;

  &:hover {
    background-color: transparent;
    color: #ff0000;
    border-color: #ff0000;
  }
`;

const FilledButton = styled(BaseButton)`
  border-color: #ff0000;
  color: #ff0000;
  background-color: transparent;

  &:hover {
    background-color: #ff0000;
    color: #fff;
    border-color: transparent;
  }
`;

export function Button(props: IButtonProps) {
  const { theme, text } = props;

  if (theme === "filled") return <FilledButton>{text}</FilledButton>;
  else return <OutlinedButton>{text}</OutlinedButton>;
}
