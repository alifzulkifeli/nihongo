import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/router'
import { supabase } from '../lib/supabse';

const Add = () => {
  const router = useRouter()
  const [sdata, setsdata] = useState({
    word: "",
    furigana:"",
    meaning: "",
    explaination: "",
    example: ""
  })

  const handleSubmit = async () => {
    if (!sdata.word) { toast.error("Word is required"); return }
    if (!sdata.meaning) { toast.error("Translation is required"); return }

    const example = {
      example1: sdata.example1,
      example2: sdata.example2,
      example3: sdata.example3
    }

    const { data, error } = await supabase
      .from('words')
      .insert([
        {
          word: sdata.word,
          furigana: sdata.furigana,
          meaning: sdata.meaning,
          explaination: sdata.explaination,
          example: JSON.stringify(example)
        },
      ])

      console.log(error);

      if (data) {
        router.push('/')
        toast.success("Succes")
      }
  }

  const handleChange = (e) => {
    setsdata({ ...sdata, [e.target.name]: e.target.value })
  }


  return (<div div className="bg-gray-100">
    <p className='pt-5 pl-5 text-lg text-blue-500 ' onClick={() => router.push('/')} >{"< Back"}</p>
    <div className="bg-gray-100 min-h-screen flex items-center">

      <div className="bg-gray-100 p-10 w-11/12  lg:w-1/2 mx-auto rounded">

        <div className="flex items-center mb-5">
          <input name="word" id="name" type="text" placeholder="Word" className=" bg-gray-100 border-b-2 border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-blue-400" onChange={(e) => handleChange(e)} />
        </div>
        <div className="flex items-center mb-5">
          <input name="furigana" type="text" placeholder="Furigana" className=" bg-gray-100 border-b-2 border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-blue-400" onChange={(e) => handleChange(e)} />
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








