import React, {forwardRef} from 'react';
import { IMaskInput } from 'react-imask';

export const TextMaskCustom = forwardRef(function TextMaskCustom(props, ref) {
    const { value, onChange, ...other } = props;
    return (
      <IMaskInput
        {...other}
        mask="##:##:##"
        definitions={{
          '#': /[0-9]/,
        }}
        inputRef={ref}
        onAccept={(value) => onChange({ target: { name: props.name, value } })}
        overwrite
      />
    );
  });