// Header


export const headerStyles = {
    root: {
        padding: '15px',
        backgroundColor: '#fff',
        display: 'flex',
        justifyContent: 'space-between',
        boxShadow: '0px 0px 7px 3px #5D1469',
      },
  
      text: {
        fontSize: '20px',
        color: '#5D1469',
      },
  
      mobileText: {
        fontSize: '14px',
      },
}


// Tabs

export const tabsStyles = {
    root: {
        display: 'flex',
        justifyContent: 'space-between',
        color: '#ffffff',
      },
  
      tab: {
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
  
        '&:nth-child(1)': {
          borderRight: '1px solid #fff',
          borderTopLeftRadius: '15px',
        },
  
        '&:nth-child(2)': {
          borderTopRightRadius: '15px',
        },
      },
  
      activeTab: {
        backgroundColor: 'rgba(93, 20, 105, 1)',
      },
}

// CryptoList

export const cryptoListStyles = {
    root: {
        overflow: 'hidden',
        margin: '40px 10px',
        height: '100%',
      },
  
      cryptoTable: {
        overflowY: 'scroll',
        height: 'calc(100% - 49px)',
      },
  
      listText: {
        fontSize: '25px',
        fontWeight: '600',
        margin: '0px 0px 20px 20px',
        color: '#5D1469',
      },
  
      mobileListText: {
        fontSize: '20px',
      },
}

// User Holdings

export const userHoldingsStyles = {
    root: {
        overflow: 'hidden',
        margin: '40px 10px',
        height: '100%',
      },
  
      userHoldingsTable: {
        overflowY: 'scroll',
        height: '100%',
      },
  
      noHoldings: {
        fontSize: '25px',
        color: 'rgba(91, 20, 105, 1)',
        display: 'block',
        textAlign: 'center',
      },
}


// Tables

export const tableContainerStyles = {
      table: {
        width: '100%',
  
        '& td:first-child': {
          position: '-webkit-sticky',
          // eslint-disable-next-line
          position: 'sticky',
          left: '-1px',
          backgroundColor: '#ffffff',
          zIndex: 1,
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
          zIndex: 1,
        },
  
        '& td': {
          minWidth: '150px',
        },
  
        '& td:nth-child(3)': {
          minWidth: '100px',
        },
      },
  
      mobileTable: {
        '& .MuiTableCell-root': {
            padding: '10px',
        },
        '& td': {
          minWidth: '120px',
        },

        '& td:nth-child(1)': {
            minWidth: '80px',
        },
  
        '& td:nth-child(3)': {
          minWidth: '50px',
        },
      },
  
      column: {
        display: 'grid',
        gridTemplateColumns: '0.2fr .8fr',
        justifyItems: 'flex-start',
      },
  
      tableHeading: {
        textAlign: 'right',
        padding: '20px',
      },
  
      serialNumber: {
        padding: '20px',
        textAlign: 'left',
      },
  
      cryptoName: {
        padding: '20px',
        textAlign: 'left',
      },
  
      mobileSerialNumber: {
        padding: '10px',
      },
  
      mobileCryptoName: {
        padding: '10px',
      },
  
      mobileTableHeading: {
        padding: '15px',
      },
}

export const tableRowStyles = {
    column: {
        display: 'grid',
        gridTemplateColumns: '0.2fr .8fr',
        justifyItems: 'flex-start',
      },
  
      tableRowItem: {
        position: 'relative',
        textAlign: 'right',
        padding: '20px',
        fontWeight: 600,
      },
  
      serialNumber: {
        padding: '20px',
        textAlign: 'left',
      },
  
      tableRowName: {
        padding: '20px',
        textAlign: 'left',
        fontWeight: 600,
      },
  
      tableRowSerialNumber: {
        padding: '20px',
        textAlign: 'left',
      },
  
      cryptoSymbol: {
        color: '#808A9D',
        fontWeight: '200',
        fontSize: '14px',
      },
  
      rowPrice: {
        color: '#3861FB',
      },
  
      rowCirculatingSupply: {
        color: '#222531',
      },
  
      rowHoldings: {
        display: 'flex',
        flexDirection: 'column',
      },
  
      myHoldings: {
        color: 'green',
      },
  
      holdingsWorth: {
        color: '#808A9D',
        fontSize: '12px',
        fontWeight: '500',
      },
  
      mobileTableRowItem: {
        padding: '15px',
      },
  
      mobileSerialNumber: {
        padding: '10px',
      },
  
      mobileCryptoName: {
        padding: '10px',
      },
  
      mobileTableRowName: {
        padding: '10px',
      },
  
      mobileTableRowSerialNumber: {
        padding: '10px',
      },
  
      mobileTableHeading: {
        padding: '15px',
      },

      profit: {
        color: 'green',
      },
  
      loss: {
        color: 'red',
      },
}


// Add CryptoInPortfolioButton

export const addCryptoInPortfolioStyles = {
    root: {
        position: 'absolute',
        top: '0',
        right: '20px',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
  
        '& form': {
          display: 'flex',
          flexDirection: 'column',
        },
  
        '& input': {
          padding: '5px 10px',
          border: '1px solid #5D1469',
          borderRadius: '5px',
          maxWidth: '125px',
        },
  
        '& button': {
          padding: '5px 20px',
          border: '1px solid #fff',
          backgroundColor: '#5D1469',
          color: '#fff',
          cursor: 'pointer',
        },
      },
  
      addInPortfolioButton: {
        backgroundColor: '#5D1469',
        color: '#fff',
        padding: '10px',
        borderRadius: '5px',
        cursor: 'pointer',
        textAlign: 'center',
      },
  
      coinAdded: {
        color: 'green',
      },
  
      mobileRoot: {
        right: '15px',
  
        '& button': {
          padding: '5px 13px',
        },
  
        '& input': {
          maxWidth: '100px',
        },
      },
  
      mobileAddInPortfolioButton: {
        padding: '5px',
      },
}

// Container

export const containerStyles = {
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100vh',
        width: '100vw',
        color: '#545454',
        fontFamily: 'sans-serif',
      },
  
      mobileRoot: {
        fontSize: '14px',
      },
  
      loading: {
        fontSize: '30px',
        textAlign: 'center',
        color: 'rgba(91, 20, 105, 1)',
      },
}