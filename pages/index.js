import { useEffect, useState } from 'react'
import classnames from 'classnames'
import { useContext } from 'react'
import { Context } from '../contex/context'

const url = 'https://api.kanye.rest/'
export default function Home({ data, time }) {
  const { color, toggleColor } = useContext(Context)

  console.log('data :', data, 'time', time)
  return (
    <div className="p-20">
      {/*  */}
      <div className="mt-8">
        <div className="flex gap-2">
          <label className="font-bold">Quote</label> :<div>{data.quote}</div>
        </div>
        <div className="flex gap-2">
          <label className="font-bold">Time</label> :{' '}
          <div>
            <span className="font-medium">{time}</span>
            <span> in millisecond </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  const t0 = performance.now()
  const res = await fetch(url)
  const data = await res.json()
  const t1 = performance.now()
  const time = t1 - t0

  return { props: { data, time } }
}


// 
function ToggleColor() {
  return (
    <div>
      <h1
        className={classnames({
          'text-blue-400': color,
          'text-green-400': !color,
        })}
      >
        Home
      </h1>
      <div></div>
      <button
        onClick={toggleColor}
        className={classnames('rounded bg-red-300 px-8 py-2 ')}
      >
        Change color
      </button>
    </div>
  )
}
