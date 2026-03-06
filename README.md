## Desafio tecnico seicho

### Levantar proyecto

Se necesita tener dos consolas una corriendo el backend y otra el frontend

Desde el directorio base se siguen estos pasos

    cd backend
    npm run dev

Con eso queda corriendo el backend en http://localhost:5000. 

Para el frontend es

    cd frontend
    npm run start

Y deberia quedar corriendo en http://localhost:3000

### Decisiones tecnicas

Se eligio esta estructura porque es la mas familiar y estandar para este tipo de apps, en este caso se considera el alcance del proyecto solo dentro del desafio pero con posibilidad de escalarla.

Se opto por express para el backend por ser mas ligera de uso permitiendo levantar una api rapidamente. Se definieron interfaces para las entidades estipuladas por conveniencia de desarrollo y para el tipado, usando una base de datos JSON.

En cuanto a frontend, se uso React sin un framework en particular como nextJS, porque se considero mas rapido de levantar dada la poca experiencia trabajando con frameworks de React, y porque en este caso la estructura pedida se consideraba lo suficientemente simple.

Dado el limite de tiempo se priorizo agilidad de desarrollo por lo que hay cosas que se quedaron fuera, en parte tambien por falta de experiencia haciendo backend con node o por desconocer el estandar en este medio, siendo mi experiencia mucho mayor con frameworks de python.

En este sentido faltan cosas como un mejor uso del tipado, considerando que en muchos casos se definieron metodos que pueden retornar Any por ejemplo y si bien no es catastrofico si se es consistente, se puede considerar un uso relativamente pobre de typescript.

En terminos de funcionalidades, quedo corto el diseño y la interaccion con el usuario, se pueden agregar efectos para evidenciar mejor ciertas acciones como clickear para ver info de un proyecto, quiza separarlos por paginas y que sea por navegacion por barra que se llegue a distintas vistas en vez de condensar todo en una pagina por conveniencia.

Falta implementar funciones yendo un poco mas alla de lo estipulado en el desafio como eliminar proyectos, sacar trabajadores de un proyecto, moverlos a otros. Quiza funciones como limitar a cuantos proyectos se puede asignar un trabajador, incluso haciendo que dependa de su senioridad por ejemplo.

Creo que no cambiaria mucho, es mas bien un tema cosas que se podrian agregar.

### Explicacion conceptual

En terminos de escalabilidad, se requiere un base de datos, asegurarse que se tenga capacidad para en este caso 10.000 proyectos, se tiene que considerar que esto implica muchos mas trabajadores. En ese sentido seria un problema de espacio primero y luego de eficiencia en requests y accesos a base de datos.

Creo que esto igual puede relacionarse con la pregunta dos, y es que habria que considerar concurrencia, cuantos usuarios simultaneos estarian usando la plataforma y que tipo de uso le darian, si es solo consultar informacion, se podria implementar un cache para tener los datos a mano y evitar tantas consultas a base de datos. Si son tareas de asignacion hay que considerar cuantas escrituras a base de datos serian y en ese caso se podria implementar un cache donde los cambios se mantienen en memoria hasta que es necesario escribir a la base de datos.

Se puede considerar la separacion de roles y accesos de manera que solo cierta parte de los usuarios con mayor senioridad requieran hacer este tipo de request que escriben a base de datos, limitando el uso concurrente y previniendo accesos masivos a base de datos, asumiendo que se combine con soluciones planteadas anteriormente como caches y tal.


### Video explicativo

Link al video explicativo: [video](https://www.loom.com/share/e6fc56b43f7544b9b4a4225e21406a7a)