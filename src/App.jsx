import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login'
import Home from './pages/Home'
import RenstraTujuan from './pages/RenstraTujuan';
import RenstraSasaran from './pages/RenstraSasaran';
import TargetPkSasaran from './pages/TargetPkSasaran';
import TargetPkProgram from './pages/TargetPkProgram';
import LaporanTahunan from './pages/LaporanTahunan';
import LaporanKinerja from './pages/LaporanKinerja';
import Help from './pages/Help';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/renstra-tujuan' element={<RenstraTujuan />}></Route>
        <Route path='/renstra-sasaran' element={<RenstraSasaran />}></Route>
        <Route path='/target-pk-sasaran' element={<TargetPkSasaran />}></Route>
        <Route path='/target-pk-program' element={<TargetPkProgram />}></Route>
        <Route path='/laporan-tahunan' element={<LaporanTahunan />}></Route>
        <Route path='/laporan-kinerja' element={<LaporanKinerja />}></Route>
        <Route path='/help' element={<Help />}></Route>
      </Routes>
    </>
  )
}

export default App
