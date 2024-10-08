import { useState } from "react";
import { FaRegEnvelope } from "react-icons/fa";
import { FaNeuter } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from 'axios'

function Login() {

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3001/register', {email, password})
    .then(result => console.log(result))
    .catch(err => console.log(err))
  }

  return (


    <div className="flex justify-center items-center min-h-screen ">
      <div className="bg-color_bg bg-opacity-75 p-8 rounded-lg shadow-md w-auto flex flex-row justify-start">

        <div className="flex-col">

          <img className="w-28 mb-4 mt-9 ml-6" src="./Logo.png" alt="" />

          <div className=" mb-8 ml-4">
            <h2 className="text-xl">Bem - vindo ao</h2>
            <h1 className="text-black font-bold text-4xl ">Tupã's</h1>
          </div>

          <form className="mb-2" onSubmit={handleSubmit}>
            <div className="relative mb-5 drop-shadow-md">
              <span className="absolute inset-y-0 left-3 flex items-center text-black"><FaRegEnvelope /></span>
              <input type="email" name="email" className="w-96 pl-10 pr-4 py-2 border rounded-full bg-white placeholder: text-black   focus:outline-none" placeholder="Digite seu e-mail" onChange={(e)=> setEmail(e.target.value)}/>
            </div>

            <div className="relative mb-5 drop-shadow-md">
              <span className="absolute inset-y-0 left-3 flex items-center  text-black"><FaNeuter /></span>
              <input type="password" name="password" className="w-full pl-10 pr-4 py-2 border rounded-full bg-white focus:outline-none" placeholder="Digite sua Senha" onChange={(e)=> setPassword(e.target.value)}/>
            </div>
          </form>

          <div className="flex items-center justify-between mb-8 mr-2 ml-2">
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox mr-2" />
              <span className="  text-black text-sm">Lembrar Senha</span>
            </label>
            <Link to="RecuperarSenha" className="text-sm  text-black hover:underline">Esqueceu a senha?</Link>
          </div>

          <div className="flex flex-col items-center">
            <Link to="Home" className="font-semibold  text-black hover:underline text-sm">
              <button type="submit" className="bg-color_verde text-colortxt_white py-2 rounded-3xl w-64 h-12 mb-2 text-center" >Entrar</button>
            </Link>
            <div className="flex flex-row">
              <span className=" text-black mr-2 text-sm">Sem Conta? </span>
              <Link to="Cadastrar" className="font-semibold  text-color_verde hover:underline text-sm" >Cadastrar-se</Link>
            </div>
          </div>
        </div>
     
      </div>
    </div>
  );
}
export default Login
