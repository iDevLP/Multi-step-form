import StepInformation from './components/StepInformation/StepInformation'
import StepForm from './components/StepForm/StepForm'
import './App.css'
import StepProvider from './context/stepContext';

function App() {

  return (
    <>
      <main>
        <StepProvider>
          <StepInformation />
          <StepForm />
        </StepProvider>
      </main>
    </>
  );
}

export default App
