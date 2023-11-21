## Guia de instalación

Antes de comenzar, asegúrate de tener [Composer](https://getcomposer.org/), [Node.js](https://nodejs.org/en) y [Xampp](https://sourceforge.net/projects/xampp/files/XAMPP%20Windows/8.2.4/xampp-windows-x64-8.2.4-0-VS16-installer.exe/download) instalados en tu sistema.

### Laravel

Para configurar Laravel, se debe abrir una terminal con la ruta dentro de la carpeta 'api_practica2', luego sigue estos pasos:

1. **Instalar dependencias de PHP con Composer:**

```bash
composer install
```

Este comando instalará las dependencias de PHP necesarias para el proyecto.

2. **Configurar las variables de entorno:**

```bash
copy .env.example .env
```

Este comando copiará el archivo .env.example a .env. Aquí debes configurar la base de datos.

3. **Generar APP_KEY:**

```bash
php artisan key:generate
```

Este comando creará una llave para ejecutar el servidor de laravel.

4. **Poblar la base de datos:**

```bash
php artisan migrate --seed
```

Este comando creará y poblará las tablas en la base de datos. Asegúrate de que la base de datos exista, este operativa y coincida con la configuración del archivo .env.

5. **Iniciar el servidor:**

```bash
php artisan serve
```

Este comando iniciará el servidor de Laravel de manera local.

### Angular

Para configurar angular, se debe abrir una terminal con la ruta dentro de la carpeta 'frontend_practica2', luego sigue estos pasos:

1. **Instalar dependencias de node.js:**

```bash
npm install
```

Se instalarán las dependencias necesarias de node.js para ejecutar el proyecto. En caso de presentar problemas consultar la sección [Incompatibilidad de version de Node.JS](#incompatibilidad-de-version-de-nodejs)

2. **Si se utiliza la consola de Windows (Opcional):**

Abra una terminal de PowerShell con privilegios de administrador en su computadora y ejecute el siguiente comando:

```bash
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```

Esto permitirá la ejecución de Scripts en Windows.

3. **Iniciar el servidor:**

```bash
ng serve
```

O si no puedes ejecutar scripts en Windows, utiliza el siguiente comando:

```bash
npm start
```

Cualquiera de estos comandos iniciarán el servidor de Angular.

**Una vez realizados todos los pasos, se deberá ingresar a la URL del servidor local proporcionada por Angular.**

## Incompatibilidad de version de Node.JS

Si se muestran problemas de compatibilidad entre la versión actual de nodejs y angular se debe instalar la versión 18.16.0 a través de Node Version Manager, para instalar haga clic [aquí](https://github.com/coreybutler/nvm-windows/releases/download/1.1.11/nvm-setup.exe) y una vez instalado siga los siguientes pasos:

1. **Abrir terminal cmd:**

```bash
nvm
```

Esto verificará una correcta instalación:

2. **Instale la versión 18.16.0 de node:**

```bash
nvm install 18.16.0
```

Este comando instalará la version 18.16.0 de node en el sistema

3. **Usar la versión 18.16.0 de node:**

```bash
nvm use 18.16.0
```

Este comando elegirá la version 18.16.0 de node para utilizar

**Una vez realizados todos los pasos, se deberian haber solucionado los problemas de incompatibilidad por nodeJS intente volver a ejecutar los pasos de la sección de [Angular](#angular)**
