import React from 'react'

import DataTable from './DataTableComponents/Datatable'
import { Courses } from '@prisma/client'
import { columns } from '@/app/(dashboard)/dashboard/resume/courses/Columns'
import TableHeader from './DataTableComponents/TableHeader'

const CourseTable = ({courses}: {courses: Courses[]}) => {

  return (

    <div>
        <TableHeader
            title="Courses"
            linkTitle="Add Course"
            href="/dashboard/resume/courses/new"
            data={courses}
            model="course"
        />
        <div className="py-8">
            <DataTable data={courses} columns={columns} />
        </div>
    </div>

  )
}

export default CourseTable