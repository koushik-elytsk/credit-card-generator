import Check from '../assets/check.png';

const Success = ({toggleSubmit}) => {
  return (
    <div className="container">
        <img src={Check} width={100} height={100} alt="check" />
        <h1 className='success_message'>Added your card Details</h1>
        <div className='btn' onClick={(e) => toggleSubmit()}>Continue</div>
    </div> 
  )
}

export default Success