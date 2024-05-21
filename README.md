# Trabajo Práctico: Desarrollo de Software

## Propuesta :

Sistema de gestión de tareas

## Integrantes:

- Calderon Bruno - 48881
- Rallip Sanchez Ismael - 51392

## Descripción del Proyecto

Un sistema que administre tareas creadas por el usuario con una clasificación propia (vida personal / estudio / trabajo ), con fechas límites asociadas a un calendario que se podrá filtrar por tipo o nivel de urgencia de la tarea. Las tareas tendrán un título, descripción, un apartado para subir archivos, y podrán contener subtareas.

El sistema enviará notificaciones pertinentes a cuántos días quedan para la entrega de una tarea específica (las notificaciones serán predeterminadas o podrán programarse previamente) para hacer recordar. Se podrá filtrar por tareas urgentes e importantes (1).


Nos basamos en Notion mezclado con Classroom.


(1).


![tareas urgentes e importantes](images/cuadro.png)



## Modelo de dominio 

(foto de modelo de dominio)

## notas sobre el trabajo 

### entrega 8/4 :

En esta primer entrega desarrollamos la descripcion del proyecto y definimos tipo de tarea como el primer CRUD a desarrollar.

tipos de tarea (vida personal / estudio / trabajo).

### entrega 24/5:

Para esta segunda entrega agregamos el CRUDTipoTareas.js donde se define la clase tipo tareas y se definen funciones para crear (ingresando el nombre y el codigo se genera de manera automatica y secuencial ), leer (por codigo ),actualizar (ingresando el codgio y ingresando el nuevo nombre ), elimnar (ingresando el codigo) y listar los tipos de tarea . Ademas en en EjemploTipoTareas.js probamos que la clase y las funciones realicen su funcion correctamente . 
