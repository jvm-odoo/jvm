import React, { Fragment, useEffect } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import { useSelector, useDispatch } from 'react-redux'

import { Experience } from '../'
import { setExperiences } from '../../../redux/slices/experiences'

export const EXPERIENCES = gql`
  {
    experiences {
        id,
        image,
        place,
        dateFrom,
        dateTo,
        role,
    }
  }
`

export const Experiences = () => {
    const dispatch = useDispatch()
    const {loading, error, data} = useQuery(EXPERIENCES);
    const experiences = useSelector(({ experiences }) => experiences)

    useEffect(() => {
        if (!loading) {
            if (error) {
              console.log('EXPERIENCES ERROR: ', error)
            }

            dispatch(setExperiences(data?.experiences ?? []))
        }
    }, [loading, error, data, dispatch])

    return (
        <Fragment>
            {experiences.map(experience => (
                <Experience
                    key={`exp-${experience.id}`}
                    image={experience.image}
                    place={experience.place}
                    from={experience.dateFrom}
                    to={experience.dateTo}
                    title={experience.role}
                />
            ))}
        </Fragment>
    )
}
