'use client';
import { DataGrid, GridColDef, GridSortModel } from '@mui/x-data-grid';
import { ptBR } from '@mui/x-data-grid/locales';
import { Paper, useTheme } from '@mui/material';
import { usePathname, useRouter  } from 'next/navigation';
import React from 'react';

export interface Column {
    id: string;
    label: string;
    sortable?: boolean;
}

export interface TableCMSProps {
    columns: Column[];
    rows: Record<string, any>[];
    rowCount: number;
    pageSize: number;
    page: number;
    onPageChange: (newPage: number) => void;
    onPageSizeChange: (newPageSize: number) => void;
    sortModel?: GridSortModel;
    onSortModelChange?: (model: GridSortModel) => void;
}

export function TableCMS({ columns, rows, rowCount, pageSize, page, onPageChange, onPageSizeChange, sortModel, onSortModelChange }: TableCMSProps) {
    const router = useRouter();
    const theme = useTheme();
    const pathname = usePathname();

    const basePath = pathname.split("/")[2];

    const gridColumns: GridColDef[] = columns.map((col) => ({
        field: col.id,
        headerName: col.label,
        flex: 1,
        sortable: col.sortable ?? true,
    }));

    const gridRows = rows.map((row) => ({
        ...row,
        id: row.id,
    }));

    return (
        <Paper>
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
                sortingMode={sortModel !== undefined ? "server" : undefined}
                sortModel={sortModel}
                onSortModelChange={onSortModelChange}
                pageSizeOptions={[10, 25, 50]}
                disableRowSelectionOnClick
                onRowClick={(params) => router.push(`/cms/${basePath}/${params.id}`)}
                localeText={ptBR.components.MuiDataGrid.defaultProps.localeText}
                sx={theme.customStyles.tableCMS}
            />
        </Paper>
    );
};
