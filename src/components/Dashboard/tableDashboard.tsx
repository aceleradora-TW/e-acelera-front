'use client';
import { palette } from '@/app/config/themes/palette';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { ptBR } from '@mui/x-data-grid/locales';
import { Paper } from '@mui/material';
import { useRouter } from 'next/navigation';
import React from 'react';

export interface Column {
    id: string;
    label: string;
}

export interface TableDashboardProps {
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
    { id: 'conteudo', label: 'Conteúdo' },
    { id: 'blabla', label: 'Conteúdo' },
    { id: 'bleblae', label: 'Conteúdo' },
];

export const mockRows = [
    { id: '1', titulo: 'Conteúdo 1', shortDescription: 'Breve desc 1Breve desc 1 Breve desc 1Breve desc 1 Breve desc 1Breve desc 1 Breve desc 1Breve desc 1', description: 'Desc completa 1', reference: 'Ref 1', video: 'Video 1', links: 'Link 1' },
    { id: '2', titulo: 'Conteúdo 2', shortDescription: 'Breve desc 2', description: 'Desc completa 2', reference: 'Ref 2', video: 'Video 2', links: 'Link 2' },
    { id: '3', titulo: 'Conteúdo 3', shortDescription: 'Breve desc 3', description: 'Desc completa 3', reference: 'Ref 3', video: 'Video 3', links: 'Link 3' },
    { id: '4', titulo: 'Conteúdo 4', shortDescription: 'Breve desc 4', description: 'Desc completa 4', reference: 'Ref 4', video: 'Video 4', links: 'Link 4' },
    { id: '5', titulo: 'Conteúdo 5', shortDescription: 'Breve desc 5', description: 'Desc completa 5', reference: 'Ref 5', video: '', links: 'Link' },
    { id: '6', titulo: 'Conteúdo 11', shortDescription: 'Breve desc 1Breve desc 1 Breve desc 1Breve desc 1 Breve desc 1Breve desc 1 Breve desc 1Breve desc 1', description: 'Desc completa 1', reference: 'Ref 1', video: 'Video 1', links: 'Link 1' },
    { id: '7', titulo: 'Conteúdo 21', shortDescription: 'Breve desc 2', description: 'Desc completa 2', reference: 'Ref 2', video: 'Video 2', links: 'Link 2' },
    { id: '8', titulo: 'Conteúdo 31', shortDescription: 'Breve desc 3', description: 'Desc completa 3', reference: 'Ref 3', video: 'Video 3', links: 'Link 3' },
    { id: '9', titulo: 'Conteúdo 41', shortDescription: 'Breve desc 4', description: 'Desc completa 4', reference: 'Ref 4', video: 'Video 4', links: 'Link 4' },
    { id: '10', titulo: 'Conteúdo 51', shortDescription: 'Breve desc 5', description: 'Desc completa 5', reference: 'Ref 5', video: '', links: 'Link' },
    { id: '11', titulo: 'Conteúdo 12', shortDescription: 'Breve desc 1Breve desc 1 Breve desc 1Breve desc 1 Breve desc 1Breve desc 1 Breve desc 1Breve desc 1', description: 'Desc completa 1', reference: 'Ref 1', video: 'Video 1', links: 'Link 1' },
    { id: '12', titulo: 'Conteúdo 22', shortDescription: 'Breve desc 2', description: 'Desc completa 2', reference: 'Ref 2', video: 'Video 2', links: 'Link 2' },
    { id: '13', titulo: 'Conteúdo 32', shortDescription: 'Breve desc 3', description: 'Desc completa 3', reference: 'Ref 3', video: 'Video 3', links: 'Link 3' },
    { id: '14', titulo: 'Conteúdo 42', shortDescription: 'Breve desc 4', description: 'Desc completa 4', reference: 'Ref 4', video: 'Video 4', links: 'Link 4' },
    { id: '15', titulo: 'Conteúdo 52', shortDescription: 'Breve desc 5', description: 'Desc completa 5', reference: 'Ref 5', video: '', links: 'Link' },
    { id: '16', titulo: 'Conteúdo 13', shortDescription: 'Breve desc 1Breve desc 1 Breve desc 1Breve desc 1 Breve desc 1Breve desc 1 Breve desc 1Breve desc 1', description: 'Desc completa 1', reference: 'Ref 1', video: 'Video 1', links: 'Link 1' },
    { id: '17', titulo: 'Conteúdo 23', shortDescription: 'Breve desc 2', description: 'Desc completa 2', reference: 'Ref 2', video: 'Video 2', links: 'Link 2' },
    { id: '18', titulo: 'Conteúdo 33', shortDescription: 'Breve desc 3', description: 'Desc completa 3', reference: 'Ref 3', video: 'Video 3', links: 'Link 3' },
    { id: '19', titulo: 'Conteúdo 43', shortDescription: 'Breve desc 4', description: 'Desc completa 4', reference: 'Ref 4', video: 'Video 4', links: 'Link 4' },
    { id: '20', titulo: 'Conteúdo 53', shortDescription: 'Breve desc 5', description: 'Desc completa 5', reference: 'Ref 5', video: '', links: 'Link' },
    { id: '21', titulo: 'Conteúdo 14', shortDescription: 'Breve desc 1Breve desc 1 Breve desc 1Breve desc 1 Breve desc 1Breve desc 1 Breve desc 1Breve desc 1', description: 'Desc completa 1', reference: 'Ref 1', video: 'Video 1', links: 'Link 1' },
    { id: '22', titulo: 'Conteúdo 24', shortDescription: 'Breve desc 2', description: 'Desc completa 2', reference: 'Ref 2', video: 'Video 2', links: 'Link 2' },
    { id: '23', titulo: 'Conteúdo 34', shortDescription: 'Breve desc 3', description: 'Desc completa 3', reference: 'Ref 3', video: 'Video 3', links: 'Link 3' },
    { id: '24', titulo: 'Conteúdo 44', shortDescription: 'Breve desc 4', description: 'Desc completa 4', reference: 'Ref 4', video: 'Video 4', links: 'Link 4' },
    { id: '25', titulo: 'Conteúdo 54', shortDescription: 'Breve desc 5', description: 'Desc completa 5', reference: 'Ref 5', video: '', links: 'Link' },
    { id: '26', titulo: 'Conteúdo 15', shortDescription: 'Breve desc 1Breve desc 1 Breve desc 1Breve desc 1 Breve desc 1Breve desc 1 Breve desc 1Breve desc 1', description: 'Desc completa 1', reference: 'Ref 1', video: 'Video 1', links: 'Link 1' },
    { id: '27', titulo: 'Conteúdo 25', shortDescription: 'Breve desc 2', description: 'Desc completa 2', reference: 'Ref 2', video: 'Video 2', links: 'Link 2' },
    { id: '28', titulo: 'Conteúdo 35', shortDescription: 'Breve desc 3', description: 'Desc completa 3', reference: 'Ref 3', video: 'Video 3', links: 'Link 3' },
    { id: '29', titulo: 'Conteúdo 45', shortDescription: 'Breve desc 4', description: 'Desc completa 4', reference: 'Ref 4', video: 'Video 4', links: 'Link 4' },
    { id: '30', titulo: 'Conteúdo 55', shortDescription: 'Breve desc 5', description: 'Desc completa 5', reference: 'Ref 5', video: '', links: 'Link' },
    { id: '31', titulo: 'Conteúdo 16', shortDescription: 'Breve desc 1Breve desc 1 Breve desc 1Breve desc 1 Breve desc 1Breve desc 1 Breve desc 1Breve desc 1', description: 'Desc completa 1', reference: 'Ref 1', video: '', links: 'Link' },
    { id: '32', titulo: 'Conteúdo 26', shortDescription: 'Breve desc 2', description: 'Desc completa 2', reference: 'Ref 2', video: 'Video 2', links: 'Link 2' },
    { id: '33', titulo: 'Conteúdo 36', shortDescription: 'Breve desc 3', description: 'Desc completa 3', reference: 'Ref 3', video: 'Video 3', links: 'Link 3' },
    { id: '34', titulo: 'Conteúdo 46', shortDescription: 'Breve desc 4', description: 'Desc completa 4', reference: 'Ref 4', video: 'Video 4', links: 'Link 4' },
    { id: '35', titulo: 'Conteúdo 56', shortDescription: 'Breve desc 5', description: 'Desc completa 5', reference: 'Ref 5', video: '', links: 'Link' },
    { id: '36', titulo: 'Conteúdo 17', shortDescription: 'Breve desc 1Breve desc 1 Breve desc 1Breve desc 1 Breve desc 1Breve desc 1 Breve desc 1Breve desc 1', description: 'Desc completa 1', reference: 'Ref 1', video: '', links: 'Link' },
    { id: '37', titulo: 'Conteúdo 27', shortDescription: 'Breve desc 2', description: 'Desc completa 2', reference: 'Ref 2', video: 'Video 2', links: 'Link 2' },
    { id: '38', titulo: 'Conteúdo 37', shortDescription: 'Breve desc 3', description: 'Desc completa 3', reference: 'Ref 3', video: 'Video 3', links: 'Link 3' },
    { id: '39', titulo: 'Conteúdo 47', shortDescription: 'Breve desc 4', description: 'Desc completa 4', reference: 'Ref 4', video: 'Video 4', links: 'Link 4' },
    { id: '40', titulo: 'Conteúdo 57', shortDescription: 'Breve desc 5', description: 'Desc completa 5', reference: 'Ref 5', video: '', links: 'Link' },
];


export function TableDashboard({ columns, rows }: TableDashboardProps) {
    const router = useRouter();

    const gridColumns: GridColDef[] = columns.map((col) => ({
        field: col.id,
        headerName: col.label,
        flex: 1,
        sortable: true,
    }));

    const gridRows = rows.map((row) => ({
        ...row,
        id: row.id,
    }));

    return (
        < Paper sx={{ margin: '24px 32px' }}>
            <DataGrid
                rows={gridRows}
                columns={gridColumns}
                pageSizeOptions={[10, 25, 100]}
                initialState={{
                    pagination: { paginationModel: { pageSize: 10, page: 0 } },
                }}
                disableRowSelectionOnClick
                onRowClick={(params) => router.push(`/dashboard/${params.id}`)}
                localeText={ptBR.components.MuiDataGrid.defaultProps.localeText}
                sx={{
                    '& .MuiDataGrid-columnHeader': {
                        backgroundColor: palette.buttonHover.main,
                        color: palette.bgColor.main,
                    },
                    '& .MuiDataGrid-cell:focus': { 
                        outline: 'none', 
                    },
                   '& .MuiDataGrid-menuIconButton': { color: '#fff', }, 
                   '& .MuiDataGrid-sortIcon': { color: palette.buttonHover.main },
                   '& .MuiDataGrid-columnSeparator': { color: '#fff',  },
                }}
            />
        </Paper>
    );
};