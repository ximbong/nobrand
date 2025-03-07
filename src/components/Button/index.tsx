import { Link } from 'gatsby';
import { Button as RadixButton } from '@radix-ui/themes';
import styled, { css } from 'styled-components';
import React from 'react';

type ButtonType = 'primary' | 'secondary' | 'alt';

type ButtonProps = {
  buttonType?: ButtonType;
  to?: string;
};

const baseButtonStyles = css`
  padding: 12px 24px;
  font-size: 1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  font-family: 'Montserrat', sans-serif;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none; /* Remove link underlines */
`;

const buttonVariants = {
  primary: css`
    background-color: white;
    color: black;
    &:hover {
      background-color: black;
      color: white;
    }
  `,
  secondary: css`
    background-color: black;
    color: white;
    border: 2px solid black;
    &:hover {
      background-color: white;
      color: black;
    }
  `,
  alt: css`
    background-color: transparent;
    color: white;
    border: 2px solid white;
    &:hover {
      background-color: white;
      color: black;
    }
  `,
};

const StyledButton = styled(RadixButton)<{
  buttonType: 'primary' | 'secondary' | 'alt';
}>`
  ${baseButtonStyles}
  ${({ buttonType }) => buttonVariants[buttonType]}
`;

const ConditionalButton = ({ to, buttonType = 'primary', ...props }: ButtonProps) => {
  if (to) {
    return (
      <Link to={to}>
        <StyledButton buttonType={buttonType} {...props} />
      </Link>
    );
  }
  return <StyledButton buttonType={buttonType} {...props} />;
};

const PrimaryButton = ({ ...props }) => <ConditionalButton buttonType="primary" {...props} />;
const SecondaryButton = ({ ...props }) => <ConditionalButton buttonType="secondary" {...props} />;
const AltButton = ({ ...props }) => <ConditionalButton buttonType="alt" {...props} />;

export { PrimaryButton, SecondaryButton, AltButton };
