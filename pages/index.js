import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';



export default function Home() {

  const [rdata, setrdata] = useState()
  const [example, setexample] = useState()

  const router = useRouter()

  async function getData() {
    const res = await fetch('http://nihongo-api.alifzulkifeli.com/random')
    const data = await res.json()
    setrdata({ data })
    setexample(JSON.parse(data.example))
    console.log(example);
  }

  const reload = () => {
    setrdata()
    getData()
  }

  useEffect(() => {
    getData()
  }, [])



  return (
    rdata ?
      <div className="bg-gray-100" >
        <div className=" grid justify-end" >
          <h1 className='pt-5 pr-6 text-5xl text-blue-500 ' onClick={() => router.push('/add')} >{"+"}</h1>
        </div>
        <div className="bg-gray-100h h-screen  float-none ">
          <div className="bg-gray-100 mt-52 w-full text-center lg:w-1/2 rounded  ">
            {rdata.data && (
              <>
                <p className=' text-7xl ' >{rdata.data.word} </p>
                <p className=' text-xl font-bold text-blue-500 pt-3  '>{rdata.data.meaning}</p>
                <p className='text-lg' >{rdata.data.explaination}</p>
                {example.example1 && <p className='text-lg pt-4 ' >- {example.example1}</p>}
                {example.example2 && <p className='text-lg' >- {example.example2}</p>}
                {example.example3 && <p className='text-lg ' >- {example.example3}</p>}

<div className='p-4' ></div>
                <span className='text-4xl mt-4' onClick={reload} >🔄</span>
              </>
            )}

          </div>

        </div>

      </div> :
      <>Loading</>
  )
}



