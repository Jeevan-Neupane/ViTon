import React, { useId } from "react";
import { Container, Input, Label } from "./style";

function InputField({ label, type = "text", ...props }, ref) {
  const id = useId();
  return (
    <Container>
      {label && <Label htmlFor={id}>{label}</Label>}
      <Input
        type={type}
        ref={ref}
        {...props}
        id={id}
      />
    </Container>
  );
}

export default React.forwardRef(InputField);
