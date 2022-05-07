import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/router'

const Add = () => {
  const router = useRouter()
  const [data, setdata] = useState({
    word: "",
    meaning: "",
    explaination: "",
    example: ""
  })

  const handleSubmit = () => {
    if (!data.word) { toast.error("Word is required"); return }
    if (!data.meaning) { toast.error("Translation is required"); return }
    const example = {
      example1: data.example1,
      example2: data.example2,
      example3: data.example3
    }

    try {
      const response = fetch(
        `http://nihongo-api.alifzulkifeli.com/add`,
        {
          body: JSON.stringify({
            word: data.word,
            meaning: data.meaning,
            explaination: data.explaination,
            example: JSON.stringify(example)
          }),
          headers: { "Content-Type": "application/json" },
          method: 'POST'
        }

      ).then(resp => {
        if (resp.status === 200) {
          return resp.json()
        } else {
          console.log("Status: " + resp.status)
          return Promise.reject("server")
        }
      })
        .then(dataJson => {
          console.log(dataJson);
        })
        console.log(response);
      toast.promise(response, {
        loading: 'Loading',
        success: 'Success',
        error: 'Error when adding',
      })


    } catch (error) {
      console.log(error);
      toast.error("Error occured")
    }

  }

  const handleChange = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value })
  }


  return (<div div className="bg-gray-100">
    <p className='pt-5 pl-5 text-lg text-blue-500 ' onClick={() => router.push('/')} >{"< Back"}</p>
    <div className="bg-gray-100 min-h-screen flex items-center">

      <div className="bg-gray-100 p-10 w-11/12  lg:w-1/2 mx-auto rounded">

        <div className="flex items-center mb-5">
          <input name="word" id="name" type="text" placeholder="Word" className=" bg-gray-100 border-b-2 border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-blue-400" onChange={(e) => handleChange(e)} />
        </div>
        <div className="flex items-center mb-5">
          <input type="text" name="meaning" placeholder="Translation" className=" bg-gray-100  border-b-2 border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-blue-400" onChange={(e) => handleChange(e)} />
        </div>
        <div className="flex items-center mb-12">
          <input type="text" name="explaination" placeholder="Explaination" className=" bg-gray-100  border-b-2 border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-blue-400" onChange={(e) => handleChange(e)} />
        </div>
        <div className="flex items-center mb-4">
          <input type="text" name="example1" placeholder="Example1" className=" bg-gray-100  border-b-2 border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-blue-400" onChange={(e) => handleChange(e)} />
        </div>
        <div className="flex items-center mb-4">
          <input type="text" name="example2" placeholder="Example2" className=" bg-gray-100  border-b-2 border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-blue-400" onChange={(e) => handleChange(e)} />
        </div>
        <div className="flex items-center mb-4">
          <input type="text" name="example3" placeholder="Example3" className=" bg-gray-100  border-b-2 border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-blue-400" onChange={(e) => handleChange(e)} />
        </div>
        <div className="text-right">

          <button type="submit" className="py-3 px-8 bg-blue-500 text-blue-100 hover:bg-blue-700 font-bold rounded" onClick={handleSubmit}>Submit</button>
        </div>

      </div>
    </div>
  </div>

  );
}

export default Add;








