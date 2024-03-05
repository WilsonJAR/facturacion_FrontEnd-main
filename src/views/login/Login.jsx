import React from 'react';
import {ContenedorSections} from './../../styles/Contenedor';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './login.css';
import WordsAnimation from '../../components/fragment/WordsAnimation';


const images = require.context("../../assets/images", true);

const Login = () => {
  const takeValues = (values,{resetForm})=>{
    resetForm();
    console.log({values});
  };
  const validateValues = (values)=>{
    let error = {};
    if (!values.username){
      error.username = 'Los campos no pueden estar vacios';
    }

    if (!values.password){
      error.password = 'Password is required';
    }
    return error;
  };

    return ( 
       <ContenedorSections>
        <div className='login__image'>
          <img 
          src={images('./digitalMarketing.jpeg')}
          alt='background'
          />
        <div className='Login__EfectText'>
         
          
        
          <WordsAnimation 
          texto={'Somos la mejor solucion para tu negocio '}
          >
             <div className='login__icon'>
                <img src={images('./empresa.png')} alt='icon'/>
            </div>
          </WordsAnimation>
        </div>
          
        </div>
        <div className='content__form'>
          <img src={images('./Logo.png')} alt='Logo' className='logo__form' />
        <Formik initialValues={
          {
            username: '',
            password: '',
          }
        }
       onSubmit={takeValues}
       validate={validateValues}
        >
          {({errors})=>(
             <Form className='form__login'>
              <h1 className='form__textEncabezado'>~Bienvenido de vuelta~</h1>
                <div className='form__values'>
                  <label className='form__values--label' htmlFor='username'>Usuario</label>
                  <Field className="form__values--input" name="username" type= "text" styles={errors.nombre &&{border: '1px solid red !important'}}/>
                  <ErrorMessage name='username' component={()=>(<div className='form__values--errors'><h1>{errors.username}</h1></div>)}/>
                  {console.log(errors.username)}
                </div>
                <div className='form__values'>
                  <label className='form__values--label' htmlFor='username'>Contrasena</label>
                  <Field className="form__values--input" name="password" type="password"/>
                  <ErrorMessage name='password' component={()=>(<div className='form__values--errors'><h1>{errors.password}</h1></div>)}/>
                </div>
                <button className='form__buttonSubmit' type="submit">Enviar</button>

                <h1 className='form__textCrearCuenta'>No tienes cuenta? Crea una Aqui</h1>
              </Form>
          )}
        </Formik>
        </div>
        
       </ContenedorSections>

     );
}
 
export default Login;