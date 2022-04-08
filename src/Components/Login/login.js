import React from 'react';
import axios from 'axios';
import md5 from 'md5';
import Cookies from 'universal-cookie';

const loginURL = "#";
const cookies = new Cookies();

const Login = () => {

    state = {
        form: {
            username: '',
            password: ''
        }
    }

    handleChange = async e => {
        await this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    } 

    iniciarSesion = async ()=> {
        await axios.get(loginURL, {params: (username: this.state.form.username, password: md5(this.state.form.password))})
        .then(res => {
            return res.data;
        })
        .then(res => {
            if(res.length > 0){
                let respuesta = res[0];
                cookies.set('id', res.id, {path: '/'});
                cookies.set('apellido', res.apellido, {path: '/'});
                cookies.set('nombre', res.nombre, {path: '/'});
                cookies.set('username', res.username, {path: '/'});
                alert(`Bienvenido ${res.nombre} ${res.apellido}`);
            }else{
                alert('El usuario o contraseña no son correctos')
            }
        })
        .catch(err => {
            console.log(err);
        })
    }

  return (
    <div className='containerPrincipal'>
        <div className='containerSecundario'>
            <div className="form">
                <label>Usuario</label>
                <br />
                <input 
                type={text} 
                className='form-box' 
                name='username'
                onChange = {this.handleChange}
                />
                <br />
                <label>Password</label>
                <br />
                <input 
                type={password} 
                className='form-box' 
                name='password'
                onChange = {this.handleChange}
                />
                <br />
                <button className="button-form" onClick= {()=> this.iniciarSesion()}>Iniciar Sesion</button>
            </div>
        </div>
    </div>
  )
}

export default Login