import { Route, Routes } from 'react-router-dom'
import './index.css'
import Header from './components/Header'
import TicketSelection from './components/TicketSelection'
import AttendeeDetails from './components/AttendeeDetails'
import TicketReady from './components/TicketReady'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

function App(){

  const [formStep, setFormStep] = useState(0);
  const { watch, register, formState:{errors,isValid}} = useForm({mode:'all'})
  const[image, setImage] = useState(null)

  function nextStep(){
    if (formStep >= 0) { 
    setFormStep(step => step + 1)
    }
  }

  function prevStep(){
    if (formStep <= 2){ 
    setFormStep(step => step - 1)
    }
  }

  function newTicket(){
    setFormStep(0)
  }

  function getTicket(){

  }



  return (
    <main className="ticketContainer">
      { formStep === 0 && 
        <TicketSelection 
          next={() => nextStep()}  
          cancel={() => newTicket()}
          register = {register}
          errors = {errors}
          isValid = {isValid}
        /> 
      } 
      { formStep === 1 && 
        <AttendeeDetails 
          next={() => nextStep()} 
          back={() => prevStep()}
          register = {register}
          errors = {errors}
          isValid = {isValid}
          image = {image}
          setImagec={() => setImage}
        /> 
      } 
      { formStep === 2 && 
        <TicketReady  
        newTicket={() => newTicket()} 
        completed={() => getTicket()}
        register = {register}
        errors = {errors}
        isValid = {isValid}
        /> 
      } 
      <pre> {JSON.stringify(watch(), null, 2)} </pre>
    </main>
    
  )
}
export default App