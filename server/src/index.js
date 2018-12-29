
import { forever } from 'async'

const begin = () => forever(next => {
    
}, err => {
    console.error(err)
    setTimeout(begin, 500)
})

begin()
