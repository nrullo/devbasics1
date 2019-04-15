# Qué es TDD?

TDD es una técnica de desarrollo de aplicaciones de software que se basa en un corto ciclo de desarrollo, compuesto por 
los siguientes tres pasos: 

1. Escribi un test.
     - Con Interfaces describe cada comportamiento que creas necesario para hacer posible tu operación.

2. Hace que el test pase.
    - Nuestro segundo objetivo, hacer que nuestro test pase y quede verde. En este punto no importa lo que hagas para
    lograrlo lo único que importa es que el test pase de rojo a verde. Esto es un punto clave en esta técnica en el que 
    muchos fracasan por querer seguir reglas superiores de ingeniería, no importa el asco que sea lo que escribiste lo 
    único que tenes que hacer es que el test pase. Es más dificil de entender que de explicar.
     
3. Hace que el código esté bien.
    - Ahora que aquello que codeamos funciona, es tiempo de hacer que además esté bien hecho. Esto implica empezar por 
    remover cualquier duplicado de nuestro código, cualquier duplicado en los mismos tests, eliminar hardcodeos, 
    generalizar constantes por variables.
   
## Cómo es un ciclo de TDD

1. Escribo un test
2. Hago que mi solución compile, corra.
3. Verifico que mi nuevo test falla.
4. Cambio lo necesario para que mi test pase.
5. Remuevo duplicados y generalizo el código.

Bueno, aca podria parar de escribir, esto es todo lo que es TDD, era bastante mas facil de lo que parecía, no?

### Estrategias de TDD
#### Fake It
Devolve constantes y gradualmente con las iteraciones vas a ir generalizando hasta tener codigo de verdad.

#### Soluciones triviales
Si el problema es tan sencillo que podes escribir la solución directamente, hacelo, cuidado con el pitfall de que es
obvio y que no es obvio. Algo trivial es algo que todos estamos de acuerdo en cómo se soluciona y no lleva más de 
un par de líneas de código, si no es ese el caso, no era trivial.


#### Triangulacion
Esta estrategia parte de la misma idea que la triangulación en trigonometría, si conozco A y B y alfa y beta
puedo obtener C. Acá la idea es similar, tengo que partir de los test A y B para poder generalizar la implementación 
de C. Esta estrategia se utiliza cuando no sabemos cómo generalizar un comportamiento, escribimos los test que nos 
parezcan necesarios para llevar adelante nuestro refactor y paso a paso vamos generalizando nuestro código. Este tipo
de estrategia nos va a dar como resultado una serie de unit tests que contienen muchos casos borde.

### Que necesitamos

Para poder hacer TDD, vamos a necesitar dos cosas, un framework que nos permita crear y correr pruebas unitarias y un 
framework que nos permita simular comportamiento. Muchas veces van a escuchar que se refiere a simular comportamiento
con palabras como stub o mock, estos frameworks los que nos dan es la posibilidad de reemplazar una dependencia de 
nuestro código por una falsa haciendo que cualquier llamado a la dependencia sea atendido y respondido por nuestro
"fake". 


Algunos de los frameworks para unit testing en JS:
* http://www.jsunit.net/
* https://unitjs.com/
* https://qunitjs.com/
* https://jasmine.github.io/
* https://karma-runner.github.io/2.0/index.html
* https://mochajs.org/
* https://jestjs.io/

Mocking:
* https://sinonjs.org/

Dependency overriding in NodeJS:
* https://www.npmjs.com/package/proxyquire

Assertion.
* https://www.chaijs.com/ 


### FAQ

1. Que es un Unit Test? 
    - Un test unitario es un test cuyo objetivo es el de probar el funcionamiento correcto de una unidad de código.

2. Que beneficios tienen TDD?
    - El poder refactorizar constantemente el código y saber que todo sigue funcionando

3. No se como aislar el comportamiento de X? 
    - No empieces por ahí, primero domina la técnica usandola en codigo nuevo.

4. Tengo que modificar código que no tiene test qué hago?
    - Le haces los test.

5. Cuándo debería empezar a utilizar TDD?
    - Ya.

6. Trabajo en UI y no se como hacer unit tests.
    - https://azumo.udemy.com/react-tdd/

7. Los test son muy difíciles y pierdo mucho tiempo.
    - Si te encontras alguna vez con la situación de que algo es muy difícil de testear lo más probable es que el código 
    base esté mal hecho y por eso no puedes testearlo. TDD apunta a crear código cuyo principal objetivo es que sea 
    testeable.

#### Donde sigo investigando

1. https://azumo.udemy.com/organization/search/?src=ukw&q=test+driven+development
2. https://www.amazon.com/Test-Driven-Development-Kent-Beck/dp/0321146530
3. https://www.amazon.com/Art-Unit-Testing-examples/dp/1617290890/

