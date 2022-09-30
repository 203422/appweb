import '../assets/style/input.css'

function Input({ label, tipo, placeholder, valor1, valor2, valor3 }) {

    if (tipo === 'radio') {
        return (
            <div className='contenedorRadio'>
                <label className='label'>
                    {label}
                </label>
                <label>
                    <input className='input inputRadio' type={tipo} placeholder={placeholder}></input>
                    {valor1}
                </label>

                <label>
                    <input className='input inputRadio' type={tipo} placeholder={placeholder}></input>
                    {valor2}
                </label>

                <label>
                    <input className='input inputRadio' type={tipo} placeholder={placeholder}></input>
                    {valor3}
                </label>

            </div>
        )
    }

    return (
        <div className={`contenedorInput ${label} ${tipo} `} >
            <label className='label'>
                {label}

            </label>
            <input className='input' type={tipo} placeholder={placeholder}></input>
        </div >
    )
}

export default Input;