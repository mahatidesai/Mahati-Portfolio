import React from 'react';


export const DisplayCert =(isVisible) => {
    const certificate = [
        {
            id: '1',
            certUrl: 'Certification.png',
        },

    ]

    return(
        <>
             <div  className="certComponent">
                {
                    certificate.map((cert, i)=> {
                        return(
                            <img key = {cert.id} src={`/images/${cert.certUrl}`} className='certImage' alt='Certificate' />
                        )
                    })
                }
                            

                        
            </div>
        </>
    )
}