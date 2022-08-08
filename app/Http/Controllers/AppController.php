<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class AppController extends Controller
{
  public function show()
  {
    return Inertia::render('Welcome', [
      'event' => 'bar'
    ]);
  }
}
