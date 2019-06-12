import React, { useState } from 'react'
import { useTransition, animated } from 'react-spring'

const Toggle = () => {
  const [items, setItems] = useState([{
      letter: 'S',
      key: 1
    }, {
      letter: 'P',
      key: 2
    }, {
      letter: 'R',
      key: 3
    }, {
      letter: 'I',
      key: 4
    }, {
      letter: 'N',
      key: 5
    }, {
      letter: 'G',
      key: 6
    }
  ])
  const transition = useTransition(items, item => item.key, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  })

  return (
    <div style={{ position: 'relative' }}>
      {transition.map(({ item, key, props }) => 
        <animated.h1 style={props} key={key}>{item.letter}</animated.h1>
      )}
      <button onClick={() => setItems([{
        letter: 'S',
        key: 1
      }])}>Toggle</button>
    </div>
  )
}

export default Toggle

// const Toggle = () => {
//   const [isToggled, setIsToggled] = useState(false)
//   const transition = useTransition(isToggled, null, {
//     from: {
//       opacity: 0, 
//       position: 'absolute'
//     },
//     enter: { opacity: 1 },
//     leave: { opacity: 0 }
//   })

//   return (
//     <div style={{ position: 'relative' }}>
//       {transition.map(({ item, key, props }) => 
//         item ? (
//           <animated.h1 style={props}>Hello</animated.h1>
//         ) : (
//           <animated.h1 style={props}>World</animated.h1>
//         )
//       )}
//       <button onClick={() => setIsToggled(!isToggled)}>Toggle</button>
//     </div>
//   )
// }

