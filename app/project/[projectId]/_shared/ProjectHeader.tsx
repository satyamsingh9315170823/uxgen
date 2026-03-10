import React from 'react'
import Image from "next/image";
import { Button } from '@/components/ui/button';
import { Save } from 'lucide-react';
import Link from 'next/link';
const ProjectHeader = () => {
  return (
    <div className='flex items-center justify-between py-3 px-4 shadow' >
        <div className="flex gap-2  items-center">
         
              
              <Image src={"/logo.png"} alt="logo" width={40} height={40} />
              <h2 className="text-xl font-semibold">
                <Link href={'/'}>
                UXGEN
                 </Link> 
                </h2>
               
            </div>
             
      <Button> <Save/> Save</Button>
    </div>
  )
}

export default ProjectHeader