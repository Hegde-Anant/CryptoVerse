import React from 'react'
import HistoryChart from '../components/HistoryChart'
import Coindetail from '../components/Coindetail'

const CryptoDetail = () => {
  return (
    <div className='wrapper-container mt-10'>
      <HistoryChart/>
      <Coindetail/>
    </div>
  )
}

export default CryptoDetail