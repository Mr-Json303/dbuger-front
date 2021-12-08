import React from 'react'
import { TextField } from '@mui/material'
import { Controller } from 'react-hook-form';

export function InputField(props) {
    const { control, rules, name, type, label, error, rows } = props;
    return (
        <>
            <Controller
                control={control}
                name={name}
                rules={rules}
                render={({ field }) => (
                    <TextField
                        variant='standard'
                        value={field.value || ''}
                        onChange={field.onChange}
                        inputRef={field.ref}
                        type={type || 'text'}
                        label={label}
                        id={name}
                        error={!!error[name]}
                        helperText={error[name] ? error[name] ? error[name].message : 'algo no esta bien' : ''}
                        fullWidth
                        multiline
                        rows={rows || 1}
                    />
                )}
            />
        </>
    )
}