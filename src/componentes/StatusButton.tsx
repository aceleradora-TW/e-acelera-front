import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';


export default function StatusButtom() {
    const [status, setStatus] = React.useState<string>('');
    const [backgroundColor, setBackgroundColor] = React.useState<string>('');

    const handleChange = (event: SelectChangeEvent) => {

        const value = event.target.value as string;
        setStatus(value);

        switch (value) {
            case '1':
                setBackgroundColor('#9EFF85');
                break;
            case '2':
                setBackgroundColor('#FFDE6B');
                break;
            case '3':
                setBackgroundColor('white');
                break;
            default:
                setBackgroundColor('');
        }
    };

    

    return (
        <Box sx={{ minWidth: 120, backgroundColor, width: "30%" }}>
            
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label" sx={{ color: 'black' }}>Status</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={status}
                        label="Status"
                        onChange={handleChange}
                        sx={{
                            '& .MuiOutlinedInput-notchedOutline': {
                                borderColor: 'black',
                            },
                            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                borderColor: 'black',
                            },
                            color: "#000000"
                        }}
                    
                    >
                        <MenuItem value="1">Concluido</MenuItem>
                        <MenuItem value="2">Em andamento</MenuItem>
                        <MenuItem value="3">Pendente</MenuItem>
                    </Select>
                </FormControl>
         
        </Box>
    );
}
