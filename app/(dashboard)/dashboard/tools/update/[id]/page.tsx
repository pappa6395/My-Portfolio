

import { getToolById } from '@/actions/tools';
import ToolForm from '@/components/dashboard/Forms/ToolForm';
import React from 'react';

const page = async ({params: paramsPromise}: any) => {

  const { id } = await paramsPromise;
  const toolById = await getToolById(id) || null;

  return (

    <div>
        <ToolForm 
          initialData={toolById}
          editingId={id}
        />
    </div>


  )
}

export default page