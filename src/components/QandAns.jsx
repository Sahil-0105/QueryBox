import React from 'react'
import Answer from './Answer';
function QandAns({item,index}) {
  return (
    <>
      <div key={index+Math.random()} className={item.type=="q"?'flex justify-end':''}>
                  {item.type=='q'?
                  <li key={index+Math.random()} 
                  className='p-1 text-right border-7 bg-zinc-500 border-zinc-500 rounded-tl-3xl rounded-br-3xl rounded-bl-3xl w-fit' index={index}>
                    <Answer ans={item.text} type={item.type} totalResult={1} ></Answer></li>:(
                    item.text.map((ansItem,ansIndex)=>(
                    <li key={ansIndex+Math.random()} className='p-1 text-left' index={ansIndex}><Answer ans={ansItem} type={item.type}totalResult={item.text.length} ></Answer></li>
                  ))
                )}
                  </div>
             
    </>
  )
}

export default QandAns
