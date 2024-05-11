<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class FrontController extends Controller
{
    public function Index(){
    return Inertia('Front/Index');
    }//
    public function Detail(){
    return Inertia('Front/Detail');
    }//
     public function Book(){
    return Inertia('Front/Book');
    }//
}
