## Guia de instalación

Antes de comenzar, asegúrate de tener [Git](https://git-scm.com/downloads), [Xampp](https://sourceforge.net/projects/xampp/files/XAMPP%20Windows/8.2.4/xampp-windows-x64-8.2.4-0-VS16-installer.exe/download), [Composer](https://getcomposer.org/), [Node.js](https://nodejs.org/en) y [Visual Studio Code](https://code.visualstudio.com/download) instalados en tu sistema.

Antes de comenzar se debe iniciar el servidor de Apache y el gestor de base de datos MySQL contenidos en Xampp. 

Clonar el proyecto en la carpeta de su preferencia por medio del siguiente comando utilizando git o el simbolo del sistema de windows:

```bash
git clone https://github.com/ExequielGL/Taller2_IDWM.git
```

Luego abrir la carpeta utilizando Visual studio code y seguir con la guía.

### Laravel

Para configurar Laravel, se debe abrir una terminal con la ruta dentro de la carpeta 'backend', luego sigue estos pasos:

1. **Instalar dependencias de PHP con Composer:**

```bash
composer install
```
En el caso de que presente algun tipo de error que requiera actualizar composer ejecutar:

```bash
composer update
```

En el caso de presentar el error: "Failed to download ... from dist: the zip extension and unzip/7z commands are both missing, skipping. The php.ini used...". Debe dirigirse a la siguiente ruta: C:\xampp\php\php.ini y descomentar la linea 962: "extension=zip' del archivo php.ini. Ahora vuelva a ejecutar composer install.

Este comando instalará las dependencias de PHP necesarias para el proyecto.

2. **Generar JWT secret**

```bash
php artisan jwt:secret
```

Este comando incluirá dependencias que ejecutará correctamente JWT.

3. **Configurar las variables de entorno:**

```bash
copy .env.example .env
```

Este comando copiará el archivo .env.example a .env. Aquí debes configurar la base de datos, debes modificar la linea 14 del archivo .env de la siguiente manera:

```bash
DB_DATABASE=IDWM_Taller2_EG
```

4. **Generar APP_KEY:**

```bash
php artisan key:generate
```

Este comando creará una llave para ejecutar el servidor de laravel.

5. **Poblar la base de datos:**

En el panel de control de Xampp, presionar el botón Admin de la sección de MySQL, luego se debe crear una base de datos con el nombre 'Taller2_IDWM_EG' y luego en el proyecto ejecutar el siguiente comando:

```bash
php artisan migrate --seed
```

Este comando creará y poblará las tablas en la base de datos. Asegúrate de que la base de datos este operativa y coincida con la configuración realizada previamente en el archivo .env.

6. **Iniciar el servidor de laravel:**

```bash
php artisan serve
```

Este comando iniciará el servidor de Laravel de manera local.

### Angular (Version 16.0.2)

Para configurar angular, se debe abrir una terminal con la ruta dentro de la carpeta 'frontend', luego sigue estos pasos:

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

**Una vez realizados todos los pasos, los dos servidores tienen que estar ejecutándose simultaneamente y se debe ingresar a la URL del servidor local proporcionada por Angular.**

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
