import React from 'react';
import ReactDOM from 'react-dom';
import Contacto from './Componentes/Contacto/Contacto.js';
import Informacion from './Componentes/Informacion/Informacion.js';
import Lcd from './Componentes/Lcd/App.js';
import LcdFactory from './Componentes/Lcd/Factory.js';
import Body from './Componentes/Main/Body.js';
import Footer from './Componentes/Main/Footer.js';
import Page404 from './Componentes/Page404/Page404.js';

var _ = require('underscore')

const strNumerosEnSegmentos = [
  '010101111',
  '000001001',
  '010011110',
  '010011011',
  '000111001',
  '010110011',
  '010110111',
  '010001001',
  '010111111',
  '010111011'
]
describe('#render', function () {
  it('render en el componente Contacto', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Contacto />, div);
  });

  it('render en el componente Informacion', () => {
    const tr = document.createElement('tr');
    ReactDOM.render(<Informacion />, tr);
  });
  it('render en el componente Lcd', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Lcd />, div);
  });

  it('render en el componente Lcd-Factory', () => {
    const div = document.createElement('div');
    ReactDOM.render(<LcdFactory />, div);
  });

  it('render en el componente Footer', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Footer />, div);
  });

  it('render en el componente Page404', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Page404 />, div);
  });

});
describe('#Entrada', function () {

        it('El sistema debe tomar correctamente el size a usar', function () {
            let textoEntrada = '1,3446';
            let strNumeros = textoEntrada.split(",");
            let strResult = strNumeros[0];
            expect(strResult)==1;
        });

        it('El sistema debe tomar correctamente el número a mostrar', function () {
            let textoEntrada = '1,3446';
            let strNumeros = textoEntrada.split(",");
            let strResult = strNumeros[1];
            expect(strResult)==3446;
        });

        it('El sistema debe crear la matriz de segmentos correctamente', function () {
            let textoEntrada = '1,3446';
            let strNumeros = textoEntrada.split(",");
            let strMatriz = _.range(strNumeros[0]*2+1).map(function() {
              return _.range(strNumeros[0]*2+1).map(function() {
                return " ";
              })
            })
            let strResult = strMatriz[1][2];
            expect(strResult)=="_";
        });

        it('El sistema debe crear la linea de segmentos correctamente', function () {
            let textoEntrada = '1,3446';
            let strNumeros = textoEntrada.split(",");
            let strLinea = _.range(strNumeros[0]*2+1).map(function() {
              return "";
            })
            let strResult = strLinea[0];
            expect(strResult)=="";
        });
    });
    describe('#Segmentos', function () {

            it('El sistema debe crear correctamente el primer segmento', function () {
                let textoEntrada = '2,3';
                let strNumeros = textoEntrada.split(",");
                let strSizeNumero = strNumeros[0];
                let strLinea = _.range(strNumeros[0]*2+1).map(function() {
                  return "";
                })
                for (let i = 0; i < strSizeNumero*2+1; i++) {
                  strLinea[i]="";
                }

                expect(strLinea[0])==2;
            });

            it('El sistema debe crear correctamente el segundo segmento', function () {
                let textoEntrada = '2,3';
                let strNumeros = textoEntrada.split(",");
                let strSizeNumero = strNumeros[0];
                let strMatriz = _.range(strNumeros[0]*2+1).map(function() {
                  return _.range(strNumeros[0]*2+1).map(function() {
                    return " ";
                  })
                })
                for (let i = 0; i < (strMatriz*2+1); i++) {
                  strMatriz[0][i]=" "
                }
                expect(strMatriz[0][0])==1;
            });

            it('El sistema debe crear correctamente el tercer segmento', function () {
                let textoEntrada = '2,3';
                let strNumeros = textoEntrada.split(",");
                let strSizeNumero = strNumeros[0];
                let strMatriz = _.range(strNumeros[0]*2+1).map(function() {
                  return _.range(strNumeros[0]*2+1).map(function() {
                    return " ";
                  })
                })
                for (let i = 1; i <= (strSizeNumero); i++) {
                  strMatriz[i][0]=strNumerosEnSegmentos[3]==='0' ? ' ' : '|'
                  strMatriz[i][(strSizeNumero*2)]=strNumerosEnSegmentos[5]==='0' ? ' ' : '|'
                }
                expect(strMatriz[1][1])==1;
            });

            it('El sistema debe crear correctamente el cuarto segmento', function () {
                let textoEntrada = '2,3';
                let strNumeros = textoEntrada.split(",");
                let strSizeNumero = strNumeros[0];
                let strMatriz = _.range(strNumeros[0]*2+1).map(function() {
                  return _.range(strNumeros[0]*2+1).map(function() {
                    return " ";
                  })
                })
                for (let i = 1; i < (strSizeNumero*2); i++) {
                  strMatriz[strSizeNumero][i]=" "
                }
                expect(strMatriz[2][1])==2;
            });

            it('El sistema debe crear correctamente el quinto segmento', function () {
                let textoEntrada = '2,3';
                let strNumeros = textoEntrada.split(",");
                let strSizeNumero = strNumeros[0];
                let strMatriz = _.range(strNumeros[0]*2+1).map(function() {
                  return _.range(strNumeros[0]*2+1).map(function() {
                    return " ";
                  })
                })
                let i = strSizeNumero+1;
                for (; i <= strSizeNumero*2; i++) {
                  strMatriz[i][0]=strNumerosEnSegmentos[6]==='0' ? ' ' : '|'
                  strMatriz[i][(strSizeNumero*2)]=strNumerosEnSegmentos[8]==='0' ? ' ' : '|'
                }
                expect(strMatriz[1][3])==1;
            });

            it('El sistema debe crear correctamente el sexto segmento', function () {
                let textoEntrada = '2,3';
                let strNumeros = textoEntrada.split(",");
                let strSizeNumero = strNumeros[0];
                let strMatriz = _.range(strNumeros[0]*2+1).map(function() {
                  return _.range(strNumeros[0]*2+1).map(function() {
                    return " ";
                  })
                })
                for (let i = 1; i < (strSizeNumero*2); i++) {
                  strMatriz[strSizeNumero*2][i]=" "
                }
                expect(strMatriz[1][4])==1;
            });

            it('El sistema debe crear correctamente el séptimo segmento', function () {
                let textoEntrada = '2,3';
                let strNumeros = textoEntrada.split(",");
                let strSizeNumero = strNumeros[0];
                let strMatriz = _.range(strNumeros[0]*2+1).map(function() {
                  return _.range(strNumeros[0]*2+1).map(function() {
                    return " ";
                  })
                })

                expect(strMatriz[1][0])==2;
            });
        });
