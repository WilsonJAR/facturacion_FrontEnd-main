import React from 'react';
import { Formik,Form, Field, ErrorMessage } from 'formik';
import './Formulario.css';
import { Contenedor } from '../../styles/Contenedor';
import {useCreateClient} from './../../utils/hooks/useUpdatePerson';


const images = require.context("../../assets/images", true);
const Formulario = () => {

    const [createPersona] = useCreateClient();

    const takeValuesForm =(values)=>{
        let nombres = values.nombre;
        let apellidos = values.apellido;
        let sexo = values.sexo;

        createPersona({variables:{data:{ 
            nombres,
            apellidos,
            sexo}}}
          )
    }
    const validateValues = (values)=>{
        let errors = {};
        if(!values.nombre){
            errors.nombre = 'Este campo no puede estar vacio';
        }

        if(!values.apellido){
            errors.apellido =  'Este campo no puede estar vacio';
        }
        if(!values.sexo){
            errors.sexo = 'Este campo no puede estar vacio';
        }



        return errors;
    }
    return ( 
        <Contenedor>
            <Formik
            initialValues={
                {
                    nombre: '',
                    apellido: '',
                    sexo: '',
                    fechaNacimineto: '',
                    telefono: '',
                    direccion: ''
                }   
            }
            onSubmit={takeValuesForm}
            validate={validateValues}
            >
                {({errors, touched})=>(
                    <Form className='formulario'>
                    <div className='formulario__header'>
                        <div  className='formulario__header--img'>
                            <img src={images('./clientes.png')} alt='iconForm'/>
                        </div>
                        <h1>Registrar Cliente</h1>
                    </div>
                    <div className='formulario__main'>
                        <div className='formulario__content'>
                            <label className='formulario__main--label' htmlFor='nombre'>Nombre*</label>
                            <Field className="formulario__values" type="text" name="nombre" />
                            <ErrorMessage name='nombre'  component={()=>(<h1 className='form__value--error'>{errors.nombre}</h1>)}/>
                        </div>
                        <div className='formulario__content'>
                            <label className='formulario__main--label' htmlFor='apellido'>Apellidos*</label>
                            <Field className="formulario__values" type="text" name="apellido" />
                            <ErrorMessage name='apellido'  component={()=>(<h1 className='form__value--error'>{errors.apellido}</h1>)}/>
                        </div>
                        <div className='formulario__content'>
                            <label className='formulario__main--label' htmlFor='sexo'>sexo*</label>
                            <Field className="formulario__values" as="select" name="sexo" >
                            <option></option>
                            <option value="M">M</option>
                            <option value="F">F</option>
                        </Field>
                        <ErrorMessage name='sexo'  component={()=>(<h1 className='form__value--error'>{errors.sexo}</h1>)}/>
                        </div>
                        <div className='formulario__content'>
                            <label className='formulario__main--label' htmlFor='fechaNacimiento'>Fecha Nacimiento</label>
                            <Field className="formulario__values" type="date" name="fechaNacimiento" />
                        </div>

                        <div className='formulario__content'>
                            <label className='formulario__main--label' htmlFor='telefono'>Telefono*</label>
                            <Field className="formulario__values" type="tel" name="telefono"/>
                            
                        </div> 

                        <div className='formulario__content'>
                            <label className='formulario__main--label' htmlFor='direccion'>Direccion</label>
                            <Field className="formulario__values" type="text" name="direccion"/>
                        </div>
                        <button className="formulario__buttonSubmit" type='submit'> Guardar</button>
                    </div>
                </Form>
                )}
                
            </Formik>
        
        </Contenedor>
     );
}
 
export default Formulario;
