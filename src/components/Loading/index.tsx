import { Box, CircularProgress } from "@mui/material"

export const Loading = () => {
    return(
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <CircularProgress />
        </Box>
    )
}