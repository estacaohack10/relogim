import React from 'react';
import './Caixa.css';
import Timer from '../timer/Timer';
import Botao from '../botao/Botao';

class Caixa extends React.Component{

    constructor(){
        super();

        this.state = {
            minutos: 0,
            segundos: 10
        }

        this.decrementar();
    }

    decrementar(){
        let intervalo = setInterval(() => {
            let meusSegundos = this.state.segundos;
            let meusMinutos = this.state.minutos;

            if(meusMinutos === 0 && meusSegundos === 0){
                clearInterval(intervalo);
            }else if(meusSegundos === 0){
                meusSegundos = 59;
                meusMinutos--;
            }else{
                meusSegundos--;
            }

            this.setState({
                minutos: meusMinutos,
                segundos: meusSegundos
            });
        }, 1000);
    }

    render(){
        return <section className="Caixa">
            <div className="main">
                <Timer minutos={this.state.minutos} segundos={this.state.segundos}/>

                <div className="buttons">
                    <Botao conteudo="+"/>
                    <Botao conteudo="-"/>
                </div>
            </div>

            <div className="buttons">
                <Botao conteudo="Iniciar"/>
                <Botao conteudo="Parar"/>
            </div>
      </section>
    }
}

export default Caixa;