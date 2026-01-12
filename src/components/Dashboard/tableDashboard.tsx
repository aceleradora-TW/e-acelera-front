import { palette } from '@/app/config/themes/palette';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

export interface Column {
    id: string;
    label: string;
}

export interface ContentTableProps {
    columns: Column[];
    rows: Record<string, any>[];
}

export const mockColumns = [
    { id: 'titulo', label: 'Título' },
    { id: 'shortDescription', label: 'Resumo' },
    { id: 'description', label: 'Descrição' },
    { id: 'reference', label: 'Referencia' },
    { id: 'video', label: 'Vídeo' },
    { id: 'links', label: 'Links' },
];

export const mockRows = [
    { titulo: 'Conteúdo 1', shortDescription: 'Breve desc 1Breve desc 1 Breve desc 1Breve desc 1 Breve desc 1Breve desc 1 Breve desc 1Breve desc 1', description: 'Desc completa 1', reference: 'Ref 1', video: 'Video 1', links: 'Link 1' },
    { titulo: 'Conteúdo 2', shortDescription: 'Breve desc 2', description: 'Desc completa 2', reference: 'Ref 2', video: 'Video 2', links: 'Link 2' },
];

export function TableDashboard({ columns, rows }: ContentTableProps) {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {columns.map((col) => (
                            <TableCell key={col.id} sx={{ whiteSpace: 'nowrap', fontWeight: 'bold', color: palette.bgColor.main, backgroundColor: palette.buttonHover.main }}>{col.label}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, id) => (
                        <TableRow
                            key={id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            {columns.map((col) => (
                                <TableCell
                                    key={col.id}
                                    sx={{
                                        whiteSpace: 'nowrap',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                        maxWidth: 200
                                    }}>
                                    {row[col.id]}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};