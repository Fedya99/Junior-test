import React, { useState } from 'react'
function App() {
  const [info, setInfo] = useState({
    name: null,
    surname: null,
    birth: null,
    select: null
  })
  const [select, setSelect] = useState('')
  const onChangeHandler = (e) => {
    const { value } = e.target
    setInfo({...info, [e.target.name]: value})
  }
  const handleChangeSelect = (e) => {
    setInfo({...info, select: e.target.value})
    setSelect(e.target.value)
  }
  if(info.name && info.surname && info.birth && info.select){
    console.log(JSON.stringify(info))
  }
  return (
    <div className="form" style={{display: 'flex'}}>
      <div className="inputs" style={{width: '20%', border: '1px solid #2A3B47', padding: '10px', marginRight: '20px'}}>
        <input type="text" name='name' placeholder="Name" onChange={onChangeHandler} style={{marginBottom: '10px'}}/> <br/>
        <input type="text" name='surname' placeholder="Surname" onChange={onChangeHandler} style={{marginBottom: '10px'}}/> <br/>
        <input type="text" name='birth' placeholder="Birth Date" onChange={onChangeHandler} style={{marginBottom: '10px'}}/> <br/>
        <select 
          style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}
          onChange={handleChangeSelect}
          value={select}
          name="(select)"
        >
          <option selected>(select)</option>
          <option value="Star" style={{fontSize: '20px', fontWeight: '600'}}>&#9734;</option>
          <option value="Heart" style={{fontSize: '20px', fontWeight: '600'}}>&#9825;</option>
          <option value="Octagon" style={{fontSize: '20px', fontWeight: '600'}}>&#11203;</option>
        </select>
      </div>
      <div className="answers" style={{width: '20%', border: '1px solid #2A3B47', padding: '10px'}}>
        <div style={{marginBottom: '2px'}}>Name: {info.name}</div>
        <div style={{marginBottom: '2px'}}>Surname: {info.surname}</div>
        <div style={{marginBottom: '2px'}}>Birth Date: {info.birth}</div>
        <div style={{marginBottom: '2px'}}>Select Result: {info.select}</div>
      </div>
    </div>
  );
}

export default App;
