'use client';
import { palette } from '@/app/config/themes/palette';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { ptBR } from '@mui/x-data-grid/locales';
import { Paper, useTheme } from '@mui/material';
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
                pageSizeOptions={[10, 25, 50]}
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