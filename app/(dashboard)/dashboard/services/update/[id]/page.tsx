
import { getServiceById } from '@/actions/services';
import ServiceForm from '@/components/dashboard/Forms/ServiceForm';
import React from 'react'

const page = async ({params: paramsPromise}: any) => {

  const { id } = await paramsPromise;
  const service = await getServiceById(id) || null;
  
  return (

    <div>
        <ServiceForm 
          initialData={service}
          editingId={id}
        />
    </div>


  )
}

export default page