<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
  <meta name="csrf-token" content="{{ csrf_token() }}">

  <title>{{ config('app.name', 'Vous') }}</title>

  <link href="{{ mix('/css/app.css') }}" rel="stylesheet" />
  @routes
  <script src="{{ mix('/js/app.js') }}" defer></script>
</head>

<body>
  @inertia
</body>

</html>
