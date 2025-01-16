import React from 'react'
import TableHeader from './DataTableComponents/TableHeader'
import DataTable from './DataTableComponents/Datatable'
import { Experiences } from '@prisma/client'
import columns from '@/app/(dashboard)/dashboard/resume/ExperienceColumns'



const ExperienceTable = ({experiences}: {experiences: Experiences[]}) => {

  return (

    <div>
        <TableHeader
          title="Experience"
          linkTitle="Add Experience"
          href="/dashboard/resume/new"
          data={experiences}
          model="experience"
          />
        <div className="py-8">
          <DataTable data={experiences ?? []} columns={columns} />
        </div>
    </div>

  )
}

export default ExperienceTable