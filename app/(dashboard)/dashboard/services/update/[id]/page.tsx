
import { getServiceById } from '@/actions/services';
import ServiceForm from '@/components/dashboard/Forms/ServiceForm';
import React from 'react'

const page = async ({params: paramsPromise}: any) => {

  const { id } = await paramsPromise;

  let service = null;
  try {
    service = await getServiceById(id) || null;
  } catch (err) {
    console.log("Failed to get service:", err);
  }
  
  return (

    <div>
        <ServiceForm 
          initialData={service ?? null}
          editingId={id ?? ""}
        />
    </div>


  )
}

export default page