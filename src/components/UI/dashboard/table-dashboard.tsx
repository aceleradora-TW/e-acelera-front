'use client';
import { palette } from '@/app/config/themes/palette';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { ptBR } from '@mui/x-data-grid/locales';
import { Paper, useTheme } from '@mui/material';
import { useRouter } from 'next/navigation';
import React from 'react';
import { ThemeRow } from '@/types/theme.types';

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
];

export const mockRows: ThemeRow[] = [
  { id: '1', titulo: 'Conteúdo 1', shortDescription: 'Breve desc 1...', description: 'Desc completa 1', reference: 'Ref 1', video: 'Video 1', links: 'Link 1', type: "theme" },
  { id: '2', titulo: 'Conteúdo 2', shortDescription: 'Breve desc 2', description: 'Desc completa 2', reference: 'Ref 2', video: 'Video 2', links: 'Link 2', type: "theme" },
  { id: '3', titulo: 'Conteúdo 3', shortDescription: 'Breve desc 3', description: 'Desc completa 3', reference: 'Ref 3', video: 'Video 3', links: 'Link 3', type: "theme" },
  { id: '4', titulo: 'Conteúdo 4', shortDescription: 'Breve desc 4', description: 'Desc completa 4', reference: 'Ref 4', video: 'Video 4', links: 'Link 4', type: "theme" },
  { id: '5', titulo: 'Conteúdo 5', shortDescription: 'Breve desc 5', description: 'Desc completa 5', reference: 'Ref 5', video: '', links: 'Link', type: "theme" },
];

export function TableDashboard({ columns, rows }: TableDashboardProps) {
    const router = useRouter();
    const theme = useTheme();

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
                sx={theme.customStyles.tableDashboard}
            />
        </Paper>
    );
};