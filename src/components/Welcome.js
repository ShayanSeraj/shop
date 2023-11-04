import { faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'

export default function Welcome() {

    const [showWlcome, setShowWlcome] = useState()

    useEffect(()=>{
        const data = localStorage.getItem('show_app_intro')
        setShowWlcome(JSON.parse(data) ?? true)
    },[])

    const onHideWelcome = () => {
        setShowWlcome(false)
        localStorage.setItem('show_app_intro', JSON.stringify(false))
    }

    return (
        <React.Fragment>
            {showWlcome && (
                <div className='container'>
                    <div className="bg-primary text-white my-3">
                        <FontAwesomeIcon icon={faClose}
                            style={{ float: 'right', margin: '5px', cursor: 'pointer' }}
                            onClick={onHideWelcome} />
                        <div className="p-4">Welcome</div>
                    </div>
                </div>)
            }
        </React.Fragment>
    )
}
