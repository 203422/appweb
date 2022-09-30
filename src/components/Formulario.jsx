import Input from "./Input";
import '../assets/style/formulario.css'

function Formulario({ titulo, checkbox, boton }) {
    return (
        <form>
            <h1>{titulo}</h1>
            <div className="contenedorFormulario">

                <Input
                    label='nombre'
                    tipo='text'
                    placeholder='Nombre'
                />

                <Input
                    label='apellido'
                    tipo='text'
                    placeholder='Apellido'
                />

                <Input
                    label='ciudad'
                    tipo='text'
                    placeholder='Ciudad'
                />

                <Input
                    label='telefono'
                    tipo='tel'
                    placeholder='Telefono'
                />

                <Input
                    label='correo'
                    tipo='email'
                    placeholder='correo@gmail.com'
                />

                <Input
                    label='contraseña'
                    tipo='password'
                    placeholder='Contraseña'
                />

                <Input
                    label='fecha de nacimiento'
                    tipo='date'
                />

                <Input
                    label='Sexo'
                    tipo='radio'
                    valor1='Hombre'
                    valor2='Mujer'
                    valor3='Sin especificar'
                />
                <div className="check">
                    <input type='checkbox'></input>
                    <label>
                        {checkbox}
                    </label>
                </div>

                <div className="contenedorBoton">
                    <input type={boton} className='boton' ></input>
                </div>


            </div>
        </form>
    );
}

export default Formulario;