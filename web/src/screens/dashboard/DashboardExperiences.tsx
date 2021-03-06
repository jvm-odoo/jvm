import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { GridCellParams, GridColDef } from '@material-ui/data-grid'
import { useMutation, useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

import { EditableGrid } from '../../components/dashboard/EditableGrid'
import { EXPERIENCES } from '../../components/landing/experience/Experiences'
import { setExperiences } from '../../redux/slices/experiences'
import { ExperienceEntity } from '../../../../api/src/experience/experience.entity'

const UPDATE_EXPERIENCE = gql`
    mutation UpdateExperience($experience: String!) {
        updateExperience(experience: $experience) {
            id
        }
    }
`

export const DashboardExperiences = () => {
    const [rows, setRows] = useState([])
    const { loading, error, data } = useQuery(EXPERIENCES)
    const [updateExperience] = useMutation(UPDATE_EXPERIENCE)
    const dispatch = useDispatch()

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 150 },
        {
            field: 'image',
            headerName: 'Image',
            width: 150,
            editable: true,
            type: 'string',
            renderCell: (params: GridCellParams) => (
                <img
                    src={params.value?.toString()}
                    alt="experience image"
                    width={48}
                />
            ),
        },
        {
            field: 'place',
            headerName: 'Place',
            width: 150,
            editable: true,
            type: 'string',
        },
        {
            field: 'role',
            headerName: 'Role',
            width: 150,
            editable: true,
            type: 'string',
        },
        {
            field: 'dateFrom',
            headerName: 'From',
            width: 150,
            editable: true,
            type: 'string',
        },
        {
            field: 'dateTo',
            headerName: 'To',
            width: 150,
            editable: true,
            type: 'string',
        },
    ]

    useEffect(() => {
        if (data?.experiences) {
            const experiences = data?.experiences ?? []

            dispatch(
                setExperiences([...experiences].sort((a, b) => b.id - a.id))
            )

            setRows(experiences)
        }
    }, [data])

    const handleSave = async (experience: Partial<ExperienceEntity>) => {
        await updateExperience({
            variables: {
                experience: JSON.stringify(experience),
            },
        })
    }

    if (error) {
        throw error
    }

    return (
        <EditableGrid
            columns={columns}
            rows={rows}
            onSave={handleSave}
            loading={loading}
        />
    )
}
