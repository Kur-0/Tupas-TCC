import { Link } from "react-router-dom"

import Header from "../Componentes/Header/Header";

function Home() {
    return (
        <div className="min-h-screen bg-Fundo bg-cover">
            <Header />
            <div className="p-20 w-full h-full flex flex-row bg-color_bg bg-opacity-75 ">
                <div className="flex-col text-color_vinho ml-12 mt-6 mb-10">

                    <h2 className=" font-bold text-xl mb-10">Home</h2>
                    <div className="flex-col ">
                        <h1 className="text-2xl font-semibold text-wrap w-80 mb-2">Seu guia para o sucesso físico e mental.</h1>
                        <p className="text-wrap w-80 text-sm">Lorem ipsum dolor sit amet consectetur. Id luctus a a sed lectus aenean aenean tortor. Ultrices felis sed donec est urna aliquet.</p>
                    </div>

                </div>
            </div>

            <h1 className="text-xl text-color text-color_bg font-bold px-20 mt-24 ml-10 mb-40 ">Serviços</h1>
            <div className="flex flex-row px-8 justify-around mb-6">

                <div className="flex flex-col items-center">
                    <h1 className="text-colortxt_white font-semibold mb-2">Estética Física</h1>
                    <img className="w-56" src="faustoteste.png" />
                </div>

                <div className="flex flex-col items-center">
                    <h1 className="text-colortxt_white font-semibold mb-2">Saúde Corporal</h1>
                    <img className="w-56" src="faustoteste.png" />
                </div>

                <div className="flex flex-col items-center">
                    <h1 className="text-colortxt_white font-semibold mb-2">Saúde Mental</h1>
                    <img className="w-56" src="faustoteste.png" />
                </div>

            </div>

            <div className="w-full flex flex-row justify-center mt-20 mb-20">
                <button type="submit" className="bg-color_bg text-color text-color_vinho py-2 rounded-xl w-60 mb-2 text-center font-semibold">Saber Mais</button>
            </div>

            <div className="p-8 w-full h-full flex flex-row bg-color_bg bg-opacity-75 mb-10">
                <h2 className=" font-bold text-xl text-color_vinho mb-10">Planos Exclusivos</h2>
                <div className="">
                   
                </div>
            </div>

        </div>
    )
}
export default Home