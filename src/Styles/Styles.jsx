export const CustomStyles = {
    btnNav: {
        background: '#30A2FF',
        color: '#ffff',
        padding: '5px 22px 5px 22px',
        fontSize: '14px',
        borderRadius: '18px',
        fontFamily: 'Montserrat',
        fontWeight: 'bold',
        margin: '0px 4px 0px 4px',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: '#ffff',
            color: '#30A2FF',
            border: '1px solid #30A2FF'
        }
    },
    navLink: {
        mx: 2,
        cursor: 'pointer',
        position: "relative",
        fontSize: '14px',
        fontFamily: 'Montserrat',
        fontWeight: 'bold',
        '&:before': {
            content: "''",
            marginBottom:'-3.5px',
            position: 'absolute',
            width: '0',
            height: '1.8px',
            bottom: '2px',
            left: '50%',
            transform: 'translate(-50%,0%)',
            visibility: 'hidden',
            transition: 'all 0.3s ease-in-out',
            border:'1.5px solid #30A2FF',
            borderRadius:'8px'
        },
        '&:hover:before': {
            visibility: 'visible',
            width: '100%',
        }
    }
}