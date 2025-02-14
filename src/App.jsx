import { Route, Routes } from 'react-router-dom'
import './index.css'
import Header from './components/Header'
import TicketSelection from './components/TicketSelection'
import AttendeeDetails from './components/AttendeeDetails'
import TicketReady from './components/TicketReady'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function App(){
  const [formStep, setFormStep] = useState(0);
  const { watch, register, setValue, formState: { errors, isValid }, handleSubmit } = useForm({ mode: 'all' });
  const [image, setImage] = useState(null);

  function nextStep() {
    if (formStep >= 0) { 
      setFormStep(step => step + 1);
    }
  }

  function prevStep() {
    if (formStep <= 2) { 
      setFormStep(step => step - 1);
    }
  }

  function newTicket() {
    setFormStep(0);
  }

  const generateTicket = (data) => {
    localStorage.setItem("ticketData", JSON.stringify(data));
    nextStep();
  };

  return (
    <main className="ticketContainer">
      <Header/>
      {formStep === 0 && 
        <TicketSelection 
          next={() => nextStep()}  
          cancel={() => newTicket()}
          register={register}
          errors={errors}
          isValid={isValid}
          setValue={setValue}
        /> 
      } 
      {formStep === 1 && 
        <AttendeeDetails 
          handleSubmit={handleSubmit(generateTicket)} 
          back={() => prevStep()}
          register={register}
          errors={errors}
          isValid={isValid}
          image={image}
          setImage={setImage}
          setValue={setValue}
        /> 
      } 
      {formStep === 2 && 
        <TicketReady  
          newTicket={() => newTicket()} 
          register={register}
          errors={errors}
          isValid={isValid}
        /> 
      } 
      <pre> {JSON.stringify(watch(), null, 2)} </pre>
    </main>
  );
}
