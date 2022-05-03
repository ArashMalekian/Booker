import React , {useContext , useState , useEffect , useRef} from 'react'
import {dateContext} from '../../context/BookerContext'
import {digitsEnToFa} from '@persian-tools/persian-tools'
import Clock from 'react-live-clock';
import classes from './Header.module.scss'
import { motion } from "framer-motion"



export const Header = () => {
    const context = useContext(dateContext)
    const [isShowHeader, setIsShowHeader] = useState(true)
    const [lastYPos, setLastYPos] = useState(0)
    useEffect(() => {
        const handleScroll = () => {
            const yPos = window.scrollY;
            const isScrollingUp = yPos < lastYPos;
            setIsShowHeader(isScrollingUp);
            setLastYPos(yPos);
        }
        window.addEventListener('scroll' , handleScroll , false)
      return () => {
        window.removeEventListener('scroll' , handleScroll , false)
      };
    }, [lastYPos])

    return (
        <>
        <div className={classes.container} >
        <motion.div className={classes.datebox} animate={{y: isShowHeader ? 0 : -70}} initial={{y:0}} >
                {
                    context.loading ?
                    <h1>لطفا صبر کنید</h1>
                    :
                    <h1>{context.data.result.datefa}</h1>
                }
                    
                
                <Clock filter={date => digitsEnToFa(date)} format={'HH:mm:ss'} ticking={true}  />
            
               {
                   context.error && <h1>
                       {context.error}
                   </h1>
               }

        </motion.div>
        </div>
        </>
    )
}
