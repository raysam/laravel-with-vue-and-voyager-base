<!-- <p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400"></a></p>

<p align="center">
<a href="https://travis-ci.org/laravel/framework"><img src="https://travis-ci.org/laravel/framework.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p> -->

## About Vous

Site for learn Vocabulary

## Follow step

1. run `composer install` (install all package for laravel)
2. run `npm i` or `npm install` (install all package for Vue)
3. run `cp .env.example .env` (copy content form .env.example to .env)
4. open `.env` file and edit:
   ```env
    APP_NAME=SITE_NAME
    APP_URL=Domain
    DB_HOST=mysql_url
    DB_PORT=mysql_port
    DB_DATABASE=database_name
    DB_USERNAME=database_username
    DB_PASSWORD=database_password
   ```
5. open file `config\app.php` and edit
    ```php
    'name' => env('APP_NAME', 'SITE_NAME')
    ```
6. run `php artisan key:generate` for generate Encryption Key
7. run `php artisan voyager:install` for install admin
8. run `php artisan voyager:admin your@email.com --create` for create admin
9. run `php artisan storage:link` for public storage
10. run `php artisan config:cache` and `php artisan config:clear` for clear all setting, need to run this both command line after edit config
11. run `php artisan serve` for create visual web service if you have it don't need to run it
12. run `npm run hot` for hot reload when develop FE

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
