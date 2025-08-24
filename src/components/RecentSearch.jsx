import React from 'react'

function RecentSearch({recentHistory,setRecentHistory,setSelectedHistory}) {
    const clearHistory=()=>{
      localStorage.clear()
      setRecentHistory([])
    }
  return (
    <>
        <div className='col-span-1 bg-zinc-800'>
        <h3 className='text-xl flex  text-center justify-center text-white'><span>Recent History</span>
          <button className='cursor-pointer pt-1.5' onClick={clearHistory}><svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#1f1f1f" className='text-white fill-current'><path d="m400-325 80-80 80 80 51-51-80-80 80-80-51-51-80 80-80-80-51 51 80 80-80 80 51 51Zm-88 181q-29.7 0-50.85-21.15Q240-186.3 240-216v-480h-48v-72h192v-48h192v48h192v72h-48v479.57Q720-186 698.85-165T648-144H312Zm336-552H312v480h336v-480Zm-336 0v480-480Z"/></svg></button>
        </h3>
        <ul className='text-left  overflow-auto '>
          {
            recentHistory&&recentHistory.map((item,index)=>(
              <li key={index}onClick={()=>setSelectedHistory(item)} className=' p-1 pl-3 truncate text-zinc-400 cursor-pointer pl-5 px-5 hover:bg-zinc-700 hover:text-zinc-200' >{item}</li>
            ))
          }
        </ul>
      </div>

    </>
  )
}


export default RecentSearch
