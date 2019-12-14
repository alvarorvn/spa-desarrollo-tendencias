import {Injectable} from '@angular/core';

@Injectable()
export class TendenciasService {

  private tendencias: Tendencia[] = [
    {
      id: 1,
      nombre: 'PWA',
      bio: 'PWA garantiza una experiencia instantánea, independiente y confiable de usuarios sin problemas de caché. Es seguro porque sirve a través de HTTP, para evitar la indagación del contenido y la manipulación de datos...',
      bio2: 'Las aplicaciones web progresivas (o PWA), aún forman parte de las tendencias web más populares de 2019. Estas aplicaciones web modernas se cargan como páginas web que tienen un alto nivel de funcionalidad. Pueden cargarse instantáneamente, independientemente del estado de la red y la elección del navegador, ya que están construidos con mejoras progresivas, una estrategia para el diseño web que enfatiza primero el contenido del sitio web principal.',
      img: 'assets/img/pwa.png'
    },
    {
      id: 2,
      nombre: 'SPA',
      bio: 'Es una excelente opción para crear sitios web receptivos, compatible con aplicaciones móviles, tabletas y versión de escritorio. Los desarrollos más recientes en SPA se basan en los marcos React y Angular, que lo hacen práctico y adecuado para aplicaciones híbridas...',
      bio2: 'La aplicación de una sola página (SPA), es una aplicación web basada en Javascript, que funciona bien entre los dispositivos de los usuarios. Aumenta el rendimiento, minimiza las interrupciones debido a la carga de la página y reduce el tiempo de desarrollo web al responder a las acciones de navegación, sin crear una solicitud para obtener un nuevo HTML desde el lado del servidor.',
      img: 'assets/img/spa.png'
    },
    {
      id: 3,
      nombre: 'IA o Bots',
      bio: 'La inteligencia artificial (IA), es la inteligencia mostrada por las máquinas para imitar la inteligencia humana y realizar funciones cognitivas, como la capacidad de aprender, recopilar datos, analizar información, comprender emociones o resolver problemas desafiantes...',
      bio2: 'Hemos observado cómo los chatbots de IA, los asistentes virtuales (como Alexa, Amazon, Siri de Apple y Cortana de Microsoft) y los robots de voz ayudan a las empresas ha agilizar algunos procesos de comunicación. Mejorando la experiencia del cliente en las diferentes plataformas digitales. Con la ayuda del desarrollo de Machine Learning (ML), las investigaciones y estudios de la Red Neural Artificial (ANN), la IA podría lograr sus objetivos codiciados: simular con éxito la verdadera empatía humana y demostrar el conocimiento del sentido común..',
      img: 'assets/img/ia.png'
    },
    {
      id: 4,
      nombre: 'Responsive',
      bio: 'Los sitios web aptos para dispositivos móviles, usan controles táctiles y se pueden gestionar en pantallas pequeñas...',
      bio2: 'Además, deben cargarse rápidamente para agilizar las consultas y posibles compras de la manera más visual y efectiva. En 2016, el equipo de Google creó su propio primer índice de búsqueda optimizado para dispositivos móviles. Es uno de los mejores enfoques de Google para brindar a sus visitantes de teléfonos inteligentes la misma calidad de experiencia de usuario al entregar resultados de búsqueda, independientemente del dispositivo que estén usando. Aunque el hardware y la interfaz de usuario son diferentes entre los equipos de escritorio y los dispositivos móviles, muchas empresas adoptaron la estrategia, para priorizar el tráfico digital y aumentar la comercialización de sus sitios web, ya que la mayor parte de las compras digitales se hacen con estos dispositivos..',
      img: 'assets/img/responsive.png'
    },
    {
      id: 5,
      nombre: 'JavaScript',
      bio: 'JavaScript sigue siendo el idioma más popular de los últimos seis años y continúa desarrollándose de acuerdo con el informe Stack Overflow 2018...',
      bio2: 'La evolución de sus marcos, bibliotecas y diseños en los últimos años demostró que tiene mucho que ofrecer en el mercado. No es de extrañar que sea el mejor lenguaje para desarrolladores, ya que proporciona una experiencia completamente nueva de flexibilidad, desafío y poder.',
      img: 'assets/img/java.png'
    },
    {
      id: 6,
      nombre: 'Ciberseguridad',
      bio: 'Las violaciones de datos, las amenazas cibernéticas, el pirateo de sitios web y el robo de datos, son la terrible amenaza que se esconde en las sombras más oscuras del avance tecnológico y la progresión científica...',
      bio2: 'La ciberseguridad o la seguridad de la tecnología de la información, son los sistemas de protección informática contra robo y interrupción del servicio, así como daños de hardware, software o datos electrónicos. Las personas, empresas, comunidades e industrias necesitan fortalecer su sistema de seguridad para proteger su información privada, servidores y bases de datos. Por lo tanto, las soluciones tenaces son necesarias para luchar contra los desafíos cibernéticos del mundo contemporáneo..',
      img: 'assets/img/seguridad.png'
    },
    {
      id: 7,
      nombre: 'Diseño UI',
      bio: 'Con una gran demanda de diseño web interactivo, el diseño UI sigue siendo una tendencia por sus gráficos dinámicos, una animación increíble y un impacto real en la usabilidad. Muestra la capacidad del desarrollador, para contar una historia visual mientras se comunica con el espectador mediante una variedad de herramientas y técnicas...',
      bio2: 'Motion UI es una biblioteca sostenible que permite los efectos de transición sin problemas en la interfaz de usuario. Es una de las bibliotecas de popularidad que más rápidamente gana, ya que permite a los desarrolladores animar contenido de la forma más sencilla posible, incluso sin tener una base sólida en JavaScript o en la biblioteca jQuery.',
      img: 'assets/img/disño.png'
    },
    {
      id: 8,
      nombre: 'Tecnología Blockchain',
      bio: 'A partir de la creación y desarrolló del bitcoin (criptomoneda), surge paralelamente la tecnología Blockchain, que hoy en día está en bastante auge...',
      bio2: 'Blockchain (cadena de bloques) es un tipo de libro de registros, conocido por su diseño seguro, consenso descentralizado y bloques de resistencia modificada. Está diseñado para reducir el costo del negocio financiero, reducir la frecuencia de liquidación de transacciones y mejorar el flujo de efectivo respaldado por registros / datos transparentes. sTiene un protocolo estricto para la comunicación entre nodos y un nuevo proceso de validación de bloques.',
      img: 'assets/img/chain.png'
    }
  ];

  constructor() {
    console.log('Servicio listo para usarse!!!');
  }

  getTendencias() {
    return this.tendencias;
  }

  getTendencia(id: number) {

    for (let tendencia of this.tendencias ) {

      if (tendencia.id == id) {
        return tendencia;
      }
    }

  }

  buscarTendencias( texto: string ): Tendencia[] {
    let tendenciasArray: Tendencia[] = [];
    texto = texto.toLowerCase();

    for(let tendencia of this.tendencias){
      let nombre = tendencia.nombre.toLowerCase();

      if( nombre.indexOf(texto) >= 0) {
        tendenciasArray.push(tendencia);
      }
    }


    return tendenciasArray;
  }

}

export interface Tendencia{
  id: number;
  nombre: string;
  bio: string;
  bio2: string;
  img: string;
}