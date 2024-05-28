## Hi there 👋

# Botones de Remedios

Este proyecto proporciona una interfaz simple con botones para diferentes remedios, construida utilizando el framework Ionic.

## Descripción

La aplicación presenta una interfaz con cuatro botones, cada uno de los cuales ejecuta una función diferente al hacer clic:

- **Remedio 1**: Ejecuta la función `remedio1()`.
- **Remedio 2**: Ejecuta la función `remedio2()`.
- **S.O.S**: Ejecuta la función `sos()`.
- **Ubicación**: Ejecuta la función `ubicacion()`.

## Estructura del Código

El código principal del proyecto se estructura de la siguiente manera:

```html
<ion-header>
  <ion-toolbar>
    <ion-title>
      Botones de Remedios
    </ion-title>
  </ion-toolbar>
</ion-header>

<ion-content class="ion-padding">
  <ion-button expand="full" color="primary" (click)="remedio1()">
    Remedio 1
  </ion-button>

  <ion-button expand="full" color="secondary" (click)="remedio2()">
    Remedio 2
  </ion-button>

  <ion-button expand="full" color="danger" (click)="sos()">
    S.O.S
  </ion-button>

  <ion-button expand="full" color="tertiary" (click)="ubicacion()">
    Ubicación
  </ion-button>
</ion-content>

Este `README.md` proporciona instrucciones detalladas para la instalación y ejecución del proyecto, así como información sobre las funcionalidades, consideraciones de desarrollo, y cómo contribuir.
