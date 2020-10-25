/* Main Container */

export const containerStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100vh',
    width: '100vw',
    color: '#545454',
    fontFamily: 'sans-serif'
}

/* Tabs Bar */

export const tabStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    color: '#ffffff',

    '& .tab': {
        fontSize: '15px',
        fontWeight: '600',
        width: '100%',
        textAlign: 'center',
        backgroundColor: 'rgba(93, 20, 105, 0.5)',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px 0px',
    },

    '& .active-tab': {
        backgroundColor: 'rgba(93, 20, 105, 1)'
    },

    '& .tab:nth-child(1)': {
        borderRight: '1px solid #fff',
        borderTopLeftRadius: '15px'
    },

    '& .tab:nth-child(2)': {
        borderTopRightRadius: '15px'
    }
}

/* Header */

export const headerStyles = {
    padding: '15px',
    backgroundColor: '#fff',
    color: '#5D1469',
    fontSize: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    boxShadow: '0px 0px 7px 3px #5D1469',
}

/* Crypto List and UserHoldings */

export const cryptoListStyles = {
    overflow: 'hidden',
    margin: '40px 10px',
    height: '100%',

    '& .crypto-table': {
        overflowY: 'scroll',
        height: 'calc(100% - 49px)',
    },

    '& .list-text': {
        fontSize: '25px',
        fontWeight: '600',
        margin: '0px 0px 20px 20px',
        color: '#5D1469',
    }
}

export const userHoldingsStyles = {
    overflow: 'hidden',
    margin: '40px 10px',
    height: '100%',

    '& .user-holdings-table': {
        overflowY: 'scroll',
        height: '100%',
    },

    '& .no-holdings': {
        fontSize: '25px',
        color: 'rgba(91, 20, 105, 1)',
        display: 'block',
        textAlign: 'center'
    }
}


export const tableStyles = {
    '& table': {
        width: '100%',

        '& .column': {
            display: 'grid',
            gridTemplateColumns: '0.2fr .8fr',
            justifyItems: 'flex-start'
        },
        
        '& .table-heading': {
            textAlign: 'right',
            padding: '20px'
        },

        '& .table-row-item': {
            position: 'relative',
            textAlign: 'right',
            padding: '20px',
            fontWeight: 600,
        },

        '& .serial-number': {
            padding: '20px',
            textAlign: 'left',
        },

        '& .crypto-name': {
            padding: '20px',
            textAlign: 'left',
        },

        '& .table-row-name': {
            padding: '20px',
            textAlign: 'left',
            fontWeight: 600,
        },

        '& .table-row-serial-number': {
            padding: '20px',
            textAlign: 'left',
        },

        '& .crypto-symbol': {
            color: '#808A9D',
            fontWeight: '200',
            fontSize: '14px',
        },

        '& .row-price': {
            color: '#3861FB',
        },
        
        '& .row-circulating-supply': {
            color: '#222531'
        },

        '& td:first-child': {
            position: '-webkit-sticky',
            // eslint-disable-next-line
            position: 'sticky',
            left: '-1px',
            backgroundColor: '#ffffff',
            zIndex: 1
        },

        '& th:first-child': {
            position: '-webkit-sticky',
            // eslint-disable-next-line
            position: 'sticky',
            left: '-1px',
            backgroundColor: '#ffffff',
            zIndex: '2',
        },

        '& th': {
            position: '-webkit-sticky',
            // eslint-disable-next-line
            position: 'sticky',
            fontSize: '14px',
            top: '-1px',
            backgroundColor: '#fff',
            zIndex: 1
        },

        '& .row-holdings': {
            display: 'flex',
            flexDirection: 'column'
        },

        '& td': {
            minWidth: '150px',
        },

        '& td:nth-child(3)': {
            minWidth: '100px',
        },
        
        '& .profit': {
            color: 'green',
        },

        '& .loss': {
            color: 'red',
        },

        '& .my-holdings': {
            color: 'green',
        },

        '& .holdings-worth': {
            color: '#808A9D',
            fontSize: '12px',
            fontWeight: '500'
        }
    }
}

export const addInPortfolioButtonStyles = {
    position: 'absolute',
    top: '0',
    right: '20px',
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',

    '& .add-in-portfolio-button': {
        backgroundColor: '#5D1469',
        color: '#fff',
        padding: '10px',
        borderRadius: '5px',
        cursor: 'pointer',
        textAlign: 'center',
    },

    '& form': {
        display: 'flex',
        flexDirection: 'column'
    },

    '& input': {
        padding: '5px 10px',
        border: '1px solid #5D1469',
        borderRadius: '5px',
        maxWidth: '125px'
    },

    '& button': {
        padding: '5px 20px',
        border: '1px solid #fff',
        backgroundColor: '#5D1469',
        color: '#fff',
        cursor: 'pointer',
    },

    '& .coin-added': {
        color: 'green'
    }

}


export const loadingStyles = {
    fontSize: '30px',
    textAlign: 'center',
    color: 'rgba(91, 20, 105, 1)'
} 


export const mobileContainerStyles = {
    fontSize: '14px',
}


export const mobileHeaderStyles = {
    fontSize: '14px',
}

export const mobileListTextStyles = {
    fontSize: '20px',
}

export const mobileTableStyles = {
    '& tbody td': {
        minWidth: '120px'
    },

    '& thead .table-heading': {
        padding: '15px',
    },

    '& tbody .table-row-item': {
        padding: '15px',
    },

    '& tbody .serial-number': {
        padding: '10px',
    },

    '& tbody .crypto-name': {
        padding: '10px',
    },

    '& tbody .table-row-name': {
        padding: '10px',
    },

    '& tbody .table-row-serial-number': {
        padding: '10px',
    },

    '& tbody td:nth-child(3)': {
        minWidth: '50px',
    }
}

export const mobileAddInPortfolioContainer = {
    right: '15px',

    '& button': {
        padding: '5px 13px',
    },

    '& input': {
        maxWidth: '100px',
    },

    '& .add-in-portfolio-button': {
        padding: '5px',
    }
}



