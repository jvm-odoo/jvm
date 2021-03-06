import React, { ReactText } from 'react'
import {
    DataGrid,
    GridColDef,
    GridEditCellPropsParams,
} from '@material-ui/data-grid'
import styled from 'styled-components'
import { IThemeContainer } from '../../constants/themes'

const StyledDataGrid = styled(DataGrid)``

type rowProps = { [key: string]: string | number }

interface IEditableGridProps {
    columns: GridColDef[]
    rows: any
    onSave: (typedProps: rowProps) => void
    loading: boolean
}

const DataGridContainer = styled.div`
    flex: 1;
    height: 600px;

    .MuiDataGrid-root,
    .MuiTablePagination-root {
        color: ${({ theme }: IThemeContainer) => theme.text};
    }
`

export const EditableGrid = ({
    columns,
    rows,
    onSave,
    loading,
}: IEditableGridProps) => {
    const handleEditCellChangeCommitted = React.useCallback(
        ({ id, field, props }: GridEditCellPropsParams) => {
            let parsedValue = props.value

            if (!Number.isNaN(Number(parsedValue))) {
                parsedValue = Number(parsedValue)
            }

            onSave({
                id,
                [field]: parsedValue as ReactText,
            })
        },
        [onSave]
    )

    return (
        <DataGridContainer>
            <StyledDataGrid
                rows={rows}
                columns={columns}
                pageSize={100}
                checkboxSelection
                columnBuffer={100}
                onEditCellChangeCommitted={handleEditCellChangeCommitted}
                loading={loading}
            />
        </DataGridContainer>
    )
}
