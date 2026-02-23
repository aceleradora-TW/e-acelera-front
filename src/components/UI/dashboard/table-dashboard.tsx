'use client';
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
    rowCount: number;
    pageSize: number;
    page: number;
    onPageChange: (newPage: number) => void;
    onPageSizeChange: (newPageSize: number) => void;
}

export function TableDashboard({ columns, rows, rowCount, pageSize, page, onPageChange, onPageSizeChange }: TableDashboardProps) {
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
                paginationMode="server"
                rowCount={rowCount}
                paginationModel={{ page, pageSize }}
                onPaginationModelChange={(model) => {
                    onPageChange(model.page);
                    onPageSizeChange(model.pageSize);
                }}
                pageSizeOptions={[10, 25, 50]}
                disableRowSelectionOnClick
                onRowClick={(params) => router.push(`/dashboard/${params.id}`)}
                localeText={ptBR.components.MuiDataGrid.defaultProps.localeText}
                sx={theme.customStyles.tableDashboard}
            />
        </Paper>
    );
};