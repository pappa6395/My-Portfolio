

import { getToolById } from '@/actions/tools';
import ToolForm from '@/components/dashboard/Forms/ToolForm';
import React from 'react';

const page = async ({params: paramsPromise}: any) => {

  const { id } = await paramsPromise;

  let toolById = null;
  try {
    toolById = await getToolById(id) || null;
  } catch (err) {
    console.log("Failed to get tool:", err);
  }

  return (

    <div>
        <ToolForm 
          initialData={toolById ?? null}
          editingId={id ?? ""}
        />
    </div>


  )
}

export default page