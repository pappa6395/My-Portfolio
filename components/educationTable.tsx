import React from 'react'
import DataTable from './DataTableComponents/Datatable'
import { Educations } from '@prisma/client'
import { columns } from '@/app/(dashboard)/dashboard/resume/educations/Columns'
import TableHeader from './DataTableComponents/TableHeader'

const EducationTable = ({educations}: {educations: Educations[]}) => {

  return (

    <div>
        <TableHeader
            title="Education"
            linkTitle="Add Education"
            href="/dashboard/resume/educations/new"
            data={educations}
            model="course"
        />
        <div className="py-8">
            <DataTable data={educations} columns={columns} />
        </div>
    </div>

  )
}

export default EducationTable